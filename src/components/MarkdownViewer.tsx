
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownViewer({texts}: {texts: string}) {
  return (
    <ReactMarkdown
    className='prose lg:prose-xl'
    remarkPlugins={[remarkGfm]}>{texts}</ReactMarkdown>
  )
}
