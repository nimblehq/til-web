import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });

jest.mock('react-markdown', () => (props) => {
  return props.children;
});

jest.mock('rehype-raw', () => () => undefined);
jest.mock('remark-emoji', () => () => undefined);
jest.mock('remark-frontmatter', () => () => undefined);
jest.mock('remark-gfm', () => () => undefined);
