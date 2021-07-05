import Project from '../Project';
import { projects } from '../../assets/data/portfolioData';

export default function Portfolio() {
  return (
    <section className='grid lg:grid-cols-2 gap-8 p-8 bg-gray-100'>
      {projects.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </section>
  );
}
