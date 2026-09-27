import { PDFDocument, PDFRawStream } from 'pdf-lib';

/**
 * Extracts plain text from a PDF ArrayBuffer in the browser.
 * Reads content streams and decodes Tj / TJ / ' / " text operators.
 */
export async function extractTextFromPdf(arrayBuffer: ArrayBuffer): Promise<string> {
  try {
    const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
    const pages = pdfDoc.getPages();
    const extractedPagesText: string[] = [];

    for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
      const page = pages[pageIdx];
      const pageTextChunks: string[] = [];

      // Get page content streams
      const contents = page.node.Contents();
      if (contents) {
        const streamObjects = Array.isArray(contents) ? contents : [contents];

        for (const streamObj of streamObjects) {
          let streamBytes: Uint8Array | null = null;
          if (streamObj instanceof PDFRawStream) {
            streamBytes = streamObj.contents;
          } else if (
            typeof streamObj === 'object' &&
            streamObj !== null &&
            'asUint8Array' in streamObj &&
            typeof (streamObj as { asUint8Array: () => Uint8Array }).asUint8Array === 'function'
          ) {
            streamBytes = (streamObj as { asUint8Array: () => Uint8Array }).asUint8Array();
          } else if (
            typeof streamObj === 'object' &&
            streamObj !== null &&
            'getContents' in streamObj &&
            typeof (streamObj as { getContents: () => Uint8Array }).getContents === 'function'
          ) {
            streamBytes = (streamObj as { getContents: () => Uint8Array }).getContents();
          }

          if (streamBytes) {
            const rawText = new TextDecoder('latin1').decode(streamBytes);
            const textFromStream = parsePdfStreamOperators(rawText);
            if (textFromStream) {
              pageTextChunks.push(textFromStream);
            }
          }
        }
      }

      const pageFinal = pageTextChunks.join('\n').trim();
      extractedPagesText.push(pageFinal || `[Page ${pageIdx + 1}]`);
    }

    const fullText = extractedPagesText.join('\n\n--- Page Break ---\n\n').trim();
    return fullText || 'No selectable text found in this PDF (document may consist solely of scanned images).';
  } catch {
    // Fallback: heuristic scan of decoded text
    return heuristicPdfTextScan(arrayBuffer);
  }
}

function parsePdfStreamOperators(streamText: string): string {
  const result: string[] = [];
  // Match Tj: (Text) Tj
  // Match TJ: [(Text) 20 (More)] TJ
  // Match ' / ": (Text) '
  const regex = /\((.*?)\)\s*Tj|\[(.*?)\]\s*TJ/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(streamText)) !== null) {
    if (match[1] !== undefined) {
      // Direct (string) Tj
      result.push(cleanPdfString(match[1]));
    } else if (match[2] !== undefined) {
      // Array [(s1) -10 (s2)] TJ
      const arrayContent = match[2];
      const strMatches = arrayContent.match(/\((.*?)\)/g);
      if (strMatches) {
        const joined = strMatches
          .map((s) => cleanPdfString(s.slice(1, -1)))
          .join('');
        result.push(joined);
      }
    }
  }

  return result.join(' ').replace(/\s+/g, ' ').trim();
}

function cleanPdfString(str: string): string {
  return str
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\\\\/g, '\\');
}

function heuristicPdfTextScan(arrayBuffer: ArrayBuffer): string {
  const text = new TextDecoder('latin1').decode(new Uint8Array(arrayBuffer));
  const matches = text.match(/\(([^()]{2,100})\)\s*Tj/g);
  if (matches && matches.length > 0) {
    return matches
      .map((m) => {
        const inner = m.replace(/\)\s*Tj$/, '').replace(/^\(/, '');
        return cleanPdfString(inner);
      })
      .filter((s) => /[a-zA-Z0-9]/.test(s))
      .join(' ');
  }
  return 'Unable to extract text from this PDF file.';
}
