import classnames from 'classnames'

type SectionSubHeadingProps = {
  content: String
  className?: String
}

const SectionSubHeading = (props: SectionSubHeadingProps) => (
  <h1
    className={classnames(
      'lg:text-2xl md:text-xl text-l mb-3 underline',
      props.className
    )}>
    {props.content}
  </h1>
)

export default SectionSubHeading
