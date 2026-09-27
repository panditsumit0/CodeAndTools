import { Document, Paragraph, TextRun, Packer } from 'docx';
import { extractTextFromPdf } from './pdf-text-extractor';

export async function convertPdfToWord(file: File): Promise<Blob> {
  const buffer = await file.arrayBuffer();
  const extractedText = await extractTextFromPdf(buffer);

  const lines = extractedText.split('\n');
  const paragraphs = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return new Paragraph({});
    }

    if (trimmed.startsWith('--- Page Break ---')) {
      return new Paragraph({
        children: [
          new TextRun({
            text: '— Page Break —',
            italics: true,
            color: '888888',
            size: 20,
          }),
        ],
      });
    }

    return new Paragraph({
      children: [
        new TextRun({
          text: trimmed,
          size: 24, // 12pt
          font: 'Calibri',
        }),
      ],
      spacing: { after: 120 },
    });
  });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs.length > 0 ? paragraphs : [new Paragraph({ text: 'Converted from PDF.' })],
      },
    ],
  });

  return await Packer.toBlob(doc);
}
