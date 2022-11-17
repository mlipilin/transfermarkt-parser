export type Props = JSX.IntrinsicElements['div'] & {}

function Page(props: Props) {
  const { children, ...otherProps } = props

  return (
    <div {...otherProps} className="flex w-screen justify-center bg-gray-200">
      {children}
    </div>
  )
}

Page.defaultProps = {}

export default Page
