import TypewriterEffect from './TypewriterEffect'
const PageHeading = () => {
  return (
    <div className="md:flex-1 md:basis-3/5 pb-0" >
      <h1 className="md:text-5xl md:min-h-[50px] text-2xl font-bold min-h-[40px] md:text-left text-center">
        <TypewriterEffect
          words={[
            'Greetings Visitor!',
            'Full-stack Developer',
            'Payam Yektamaram',
          ]}
        />
      </h1>
    </div>)
}

export default PageHeading;