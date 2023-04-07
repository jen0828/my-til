
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkDownViewer({texts}: {texts: string}) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{texts}</ReactMarkdown>
  )
}
