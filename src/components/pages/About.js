import './About.css';

export default function About() {
  return (
    <section className='flex flex-col md:flex-row'>
      {/* md:self-center */}
      <div className='flex flex-col justify-center items-center md:w-1/2 p-6'>
        <h3 className=''>
          Developer <span>&nbsp;&ndash;&nbsp;</span> Programmer{' '}
          <span>&nbsp;&ndash;&nbsp;</span> Tech Enthusiast
        </h3>
        <p className=''>
          Hi, I'm Sebastian and I'm endeavouring to become a full-stack web
          developer. To that end I have been enthusiastically learning web
          development skills and joined an applied web development technologies
          course through the George Washington University to gain experience
          working in a collaborative environment and expand my professional
          network.
        </p>
        <p className=''>
          I'm looking forward to solving challenging problems in the technology
          sector, all while feeding my passion for learning and understanding
          how products and services are designed, built, and maintained.
        </p>
      </div>
      <div className='bg-landing bg-cover bg-center bg-no-repeat h-full md:w-1/2'></div>
    </section>
  );
}
