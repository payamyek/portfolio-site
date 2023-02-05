import classnames from 'classnames'

type SectionHeadingProps = {
  content: String,
  className?: String,
}

const SectionHeading = (props: SectionHeadingProps) => (
  <h1
    className={classnames(
      'lg:text-3xl md:text-2xl text-xl mb-3',
      props.className
    )}>
    {props.content}
  </h1>
)

export default SectionHeading
