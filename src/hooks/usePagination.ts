import { range } from 'es-toolkit';
import { useMemo } from "react";


const DOTS = "..." as const;
type Dots = typeof DOTS;

interface PaginationOptions {
  current: number;
  last: number;
  innerSiblings?: number;
  outerSiblings?: number;
}

const rangeInclusive = (from: number, to: number) => range(from, to + 1);

const usePagination = (
  {
    current = 1,
    last,
    outerSiblings = 1,
    innerSiblings = 1,
  }: PaginationOptions,
): (number | Dots)[] => useMemo(
  () => {
    // <outer> <dots> <inner> <curr> <inner> <dots> <outer>
    const totalItems = (innerSiblings + outerSiblings) * 2 + 3;
    if (totalItems >= last) return rangeInclusive(1, last);

    const indexInnerLeft = Math.max(1, current - innerSiblings);
    const indexInnerRight = Math.min(last, current + innerSiblings);

    const showLeftDots = outerSiblings + 1 < indexInnerLeft - 1;
    const showRightDots = indexInnerRight + 1 < last - outerSiblings - 1;

    const leftRange = [1, outerSiblings] as const;
    const rightRange = [last - outerSiblings + 1, last] as const;

    if (showLeftDots && showRightDots) {
      return [
        ...rangeInclusive(...leftRange),
        DOTS,
        ...rangeInclusive(indexInnerLeft, indexInnerRight),
        DOTS,
        ...rangeInclusive(...rightRange),
      ];
    }

    const sideItems = totalItems - outerSiblings - 1/* DOTS */;

    if (!showLeftDots) {
      return [
        ...rangeInclusive(1, sideItems),
        DOTS,
        ...rangeInclusive(...rightRange),
      ];
    }

    // !showRightDots
    return [
      ...rangeInclusive(...leftRange),
      DOTS,
      ...rangeInclusive(last - sideItems + 1, last),
    ];
  },
  [innerSiblings, outerSiblings, last, current],
);

export default usePagination;
