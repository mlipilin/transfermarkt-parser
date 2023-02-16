import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco as highlighterStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export type Props = {
  /** Source code */
  code: string
  /** Programming language */
  language?: string
  /** Block title */
  title: string
}

function CodeBlock(props: Props) {
  const { code, language, title, ...otherProps } = props

  return (
    <div {...otherProps}>
      <h2 className="mb-4 text-xl">{title}</h2>
      <div className="overflow-auto">
        <SyntaxHighlighter language={language} style={highlighterStyle}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

CodeBlock.defaultProps = {}

export default CodeBlock
