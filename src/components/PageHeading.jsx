import TypewriterEffect from './TypewriterEffect'

const PageHeading = () => {
  return (
    <div className="lg:flex-1 lg:basis-3/5 pb-0">
      <h1 className="lg:text-5xl lg:min-h-[50px] md:text-3xl text-2xl font-bold min-h-[40px] lg:text-left text-center">
        <TypewriterEffect
          words={[
            'Greetings Visitor!',
            'Full-stack Developer',
            'Payam Yektamaram',
          ]}
        />
      </h1>
    </div>
  )
}

export default PageHeading
