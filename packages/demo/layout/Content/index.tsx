export type Props = JSX.IntrinsicElements['div'] & {}

function Content(props: Props) {
  const { children, ...otherProps } = props

  return (
    <div {...otherProps} className="mt-8 flex gap-x-8">
      {children}
    </div>
  )
}

Content.defaultProps = {}

export default Content
