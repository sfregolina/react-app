import facepaint from 'facepaint'

const breakpoints = [426, 769, 1441, 2561];

const useBreakpointValue = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

export default useBreakpointValue;
