import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import type { CSSProperties } from 'react'

export default function CodeSnippet({
  language,
  code,
  theme,
}: {
  language: string
  code: string
  theme: { [key: string]: CSSProperties }
}) {
  return (
    <SyntaxHighlighter language={language} style={theme} className="max-h-[500px]">
      {code}
    </SyntaxHighlighter>
  )
}
