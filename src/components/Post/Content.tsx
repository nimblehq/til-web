import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import { prism as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

/* eslint-disable @typescript-eslint/no-explicit-any */
const CodeBlock = {
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';

    return !inline ? (
      <SyntaxHighlighter
        language={language}
        style={style}
        useInlineStyles={false}
        className="syntax-highlight"
      >
        {children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Content = ({ children }: any) => {
  return (
    <ReactMarkdown
      components={CodeBlock}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm, remarkFrontmatter, remarkEmoji]}
    >
      {children}
    </ReactMarkdown>
  );
};
/* eslint-enable @typescript-eslint/no-explicit-any */
export default Content;
