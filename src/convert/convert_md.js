import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export const convertMdToHtml = async (mdString) => {
  const processor = unified()
    .use(remarkParse, { fragment: true })
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify);
  const processed = await processor.process(mdString);

  return processed.value;
};
