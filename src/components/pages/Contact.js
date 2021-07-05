export default function Contact() {
  return (
    <section className='w-full p-8 bg-gray-100'>
      <h2 className='py-4 text-center text-gray-600 text-2xl font-bold uppercase '>
        Lets Work Together
      </h2>
      <div className='max-w-3xl mx-auto py-4'>
        <form action=''>
          <FormLabel htmlFor='contactName' label='Name' />
          <FormInput id='contactName' type='text' name='name' />

          <FormLabel htmlFor='contactEmail' label='Email' />
          <FormInput id='contactEmail' type='email' name='email' />

          <FormLabel htmlFor='contactMessage' label='Message' />
          <textarea
            id='contactMessage'
            className='w-full mb-4 p-2 border-2 rounded-md border-gray-300'
            name='message'
            rows='3'
          ></textarea>

          <button
            className='w-full mt-4 px-4 py-2 border-2 rounded-md border-gray-600 hover:border-gray-500 bg-gray-600 hover:bg-gray-500 text-gray-200 hover:text-gray-100 text-center font-bold trans-ease-in'
            type='submit'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function FormLabel({ htmlFor, label }) {
  return (
    <label className='px-2 py-1' htmlFor={htmlFor}>
      {label}
    </label>
  );
}

function FormInput({ id, type, name }) {
  return (
    <input
      id={id}
      className='w-full mb-4 p-2 border-2 rounded-md border-gray-300'
      type={type}
      name={name}
    />
  );
}
