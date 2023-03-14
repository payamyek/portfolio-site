import TypewriterEffect from './TypewriterEffect.tsx'

const PageHeading = () => {
  return (
    <div className="lg:flex-1 lg:basis-3/5 pb-0">
      <span className="lg:text-5xl lg:min-h-[50px] md:text-3xl text-2xl font-bold min-h-[35px] lg:text-left text-center block">
        <TypewriterEffect
          words={[
            'Greetings Visitor!',
            'Full-stack Developer',
            'Payam Yektamaram',
          ]}
        />
      </span>
    </div>
  )
}

export default PageHeading
