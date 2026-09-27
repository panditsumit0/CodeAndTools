'use client';

import { useState, useCallback, useEffect } from 'react';

export type TopicStatus = 'done' | 'in-progress' | 'not-started';

const PREFIX = 'devforge_learn_progress_';

function getKey(language: string) {
  return PREFIX + language;
}

function loadProgress(language: string): Record<string, TopicStatus> {
  try {
    const raw = localStorage.getItem(getKey(language));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(language: string, data: Record<string, TopicStatus>) {
  try {
    localStorage.setItem(getKey(language), JSON.stringify(data));
  } catch {
    // localStorage unavailable
  }
}

export function useTopicProgress(language: string) {
  const [progress, setProgress] = useState<Record<string, TopicStatus>>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loadProgress(language));
  }, [language]);

  const markDone = useCallback((topicId: string) => {
    setProgress(prev => {
      const next = { ...prev, [topicId]: 'done' as TopicStatus };
      saveProgress(language, next);
      return next;
    });
  }, [language]);

  const markInProgress = useCallback((topicId: string) => {
    setProgress(prev => {
      if (prev[topicId] === 'done') return prev; // don't downgrade done
      const next = { ...prev, [topicId]: 'in-progress' as TopicStatus };
      saveProgress(language, next);
      return next;
    });
  }, [language]);

  const resetTopic = useCallback((topicId: string) => {
    setProgress(prev => {
      const next = { ...prev, [topicId]: 'not-started' as TopicStatus };
      saveProgress(language, next);
      return next;
    });
  }, [language]);

  const getStatus = useCallback((topicId: string): TopicStatus => {
    return progress[topicId] || 'not-started';
  }, [progress]);

  const doneCount = Object.values(progress).filter(s => s === 'done').length;

  return { progress, markDone, markInProgress, resetTopic, getStatus, doneCount };
}
