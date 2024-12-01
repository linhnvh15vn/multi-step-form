import { ReactElement, useState } from 'react';

export function useMultiForm(steps: ReactElement[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const back = () => setCurrentIndex((prev) => (prev <= 0 ? prev : prev - 1));

  const next = () =>
    setCurrentIndex((prev) => (prev >= steps.length - 1 ? prev : prev + 1));

  const goto = (index: number) => setCurrentIndex(index);

  return {
    currentIndex,
    index: steps[currentIndex],
    isFirst: currentIndex === 0,
    isLast: currentIndex === steps.length - 1,
    next,
    back,
    goto,
  };
}
