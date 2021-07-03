export default function Nav({ page, handlePageSelection }) {
  return (
    <nav className='flex space-x-4'>
      <a
        href='#about'
        onClick={() => handlePageSelection('About')}
        className='text-lg text-gray-300 hover:text-gray-200'
      >
        About
      </a>
      <a
        href='#contact'
        onClick={() => handlePageSelection('Contact')}
        className='text-lg text-gray-300 hover:text-gray-200'
      >
        Contact
      </a>
    </nav>
  );
}
