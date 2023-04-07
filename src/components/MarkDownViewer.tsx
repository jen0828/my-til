
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownViewer({texts}: {texts: string}) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{texts}</ReactMarkdown>
  )
}
