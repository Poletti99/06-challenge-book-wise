import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    minHeight: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
  },
});
