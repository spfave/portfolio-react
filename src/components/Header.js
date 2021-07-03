import Nav from './Nav';

export default function Header({ page, handlePageSelection }) {
  return (
    <header className='flex justify-between items-center py-4 px-8 bg-gray-700'>
      <a href='#home' onClick={() => handlePageSelection('About')}>
        <h1 className='text-3xl text-gray-100 hover:text-gray-300 font-bold'>
          Sebastian Favè
        </h1>
      </a>
      <Nav page={page} handlePageSelection={handlePageSelection} />
    </header>
  );
}
