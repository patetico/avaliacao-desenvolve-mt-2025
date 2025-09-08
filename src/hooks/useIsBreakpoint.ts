import { useEffect, useState } from 'react';


const BREAKPOINTS = {
  'sm': 40,
  'md': 48,
  'lg': 64,
  'xl': 80,
  '2xl': 96,
};

function useIsBreakpoint(breakpoint: keyof typeof BREAKPOINTS) {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const size = parseFloat(styles.fontSize) * BREAKPOINTS[breakpoint];

    const queryList = window.matchMedia(`(min-width: ${size}px)`);

    const onChange = () => setIsBreakpoint(queryList.matches);
    onChange();

    queryList.addEventListener("change", onChange);
    return () => queryList.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isBreakpoint;
}

export default useIsBreakpoint;
