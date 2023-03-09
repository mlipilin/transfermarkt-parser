import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco as highlighterStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export type Props = {
  /** Source code */
  code?: string
  /** Loading indicator */
  isLoading?: boolean
  /** Programming language */
  language?: string
  /** Block title */
  title: string
}

function CodeBlock(props: Props) {
  const { code, isLoading, language, title, ...otherProps } = props

  return (
    <div {...otherProps}>
      <h2 className="mb-4 text-xl">{title}</h2>
      {isLoading ? (
        <div className="animate-pulse bg-slate-100 p-4 rounded-md space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-slate-300 rounded-lg col-span-2"></div>
            <div className="h-4 bg-slate-300 rounded-lg col-span-1"></div>
          </div>
          <div className="h-4 bg-slate-300 rounded-lg"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-slate-300 rounded-lg col-span-1"></div>
            <div className="h-4 bg-slate-300 rounded-lg col-span-2"></div>
          </div>
        </div>
      ) : (
        <div className="overflow-auto">
          <SyntaxHighlighter language={language} style={highlighterStyle}>
            {code ?? ''}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}

CodeBlock.defaultProps = {
  isLoading: false,
}

export default CodeBlock
