import SectionHeading from './SectionHeading'

const AboutMe = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <SectionHeading content="About Me" />
    </div>
    <div className="flex flex-row">
      <p className="lg:text-xl md:text-l text-sm text-justify dark:text-white ">
        I am a
        <span className="font-bold">&nbsp;full-stack developer&nbsp;</span>
        currently working at the
        <span className="font-bold">
          &nbsp;Municipal Property Assessment Corporation.&nbsp;
        </span>
        I have always been interested in technology and building new things.
        Which is why I am currently learning
        <span className="font-bold">&nbsp;Rust&nbsp;</span>in hopes of using it
        to power a new
        <span className="font-bold">&nbsp;chess engine&nbsp;</span>I am
        currently building!
      </p>
    </div>
  </div>
)

export default AboutMe
