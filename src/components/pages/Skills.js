export default function Skills() {
  return (
    <section className='w-full p-8 bg-gray-100'>
      <h2 className='py-4 text-center text-gray-600 text-2xl font-bold uppercase '>
        Development Tech Stack
      </h2>
      {/* <div className='flex flex-col space-y-8 items-center py-4'> */}
      <div className='grid grid-cols-3 gap-8 py-8'>
        <SkillCard title='Front End' notes={[1, 2, 3, 4]} />
        <SkillCard title='Back End' notes={[1, 2, 3, 4]} />
        <SkillCard title='Dev Tools' notes={[1, 2, 3, 4]} />
      </div>

      <div className='flex justify-center mb-8'>
        <div className='px-4 py-2 border-2 rounded-md border-gray-600 hover:border-gray-500 bg-gray-600 hover:bg-gray-500 text-gray-200 hover:text-gray-100 text-center font-bold trans-ease-in'>
          <a href='./assets/docs/sebastian-fave-resume.pdf' target='_blank'>
            View Résumé
          </a>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

function SkillCard({ title, notes }) {
  return (
    <div className='rounded-md overflow-hidden shadow-md bg-grey-50'>
      <div className='flex flex-col h-full'>
        <div className='bg-gray-600 px-4 py-3'>
          <h4 className='text-gray-200 font-bold text-lg'>{title}</h4>
        </div>
        <div className='px-4 py-2'>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
