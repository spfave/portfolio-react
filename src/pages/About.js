import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row">
      <div className="flex flex-col justify-center items-center space-y-4 bg-gray-100 md:w-1/2 p-6">
        <h3 className="text-center md:text-xl text-gray-700 font-bold uppercase mb-2">
          Developer <span>&nbsp;&ndash;&nbsp;</span> Programmer{' '}
          <span>&nbsp;&ndash;&nbsp;</span> Tech Enthusiast
        </h3>
        <p className="text-gray-600 text-justify">
          Thanks for visiting, I'm Sebastian and I'm endeavouring to become a
          full-stack web developer. To that end I have been enthusiastically
          learning web development skills and joined an applied web development
          course through George Washington University to gain experience working
          in a collaborative environment and expand my professional network.
        </p>
        <p className="text-gray-600 text-justify">
          I'm looking forward to solving challenging problems in the technology
          sector, all while feeding my passion for learning and understanding
          how products and services are designed, built, and maintained.
        </p>
        <Link
          to={`/portfolio`}
          className="border-2 rounded-md  border-gray-300 hover:border-gray-700 hover:bg-gray-700 text-gray-700 hover:text-gray-200 md:text-lg font-bold px-4 py-2 trans-ease-in">
          View Portfolio
        </Link>
      </div>
      <div className="bg-landing bg-cover bg-center bg-no-repeat h-full md:w-1/2"></div>
    </section>
  );
}
