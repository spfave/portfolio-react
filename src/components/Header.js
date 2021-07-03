import Nav from './Nav';

export default function Header({ pages, page, handlePageChange }) {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-700'>
      <a href='#home' onClick={() => handlePageChange(pages[0])}>
        <h1 className='text-3xl text-gray-100 hover:text-gray-300 font-bold trans-ease-in'>
          Sebastian Favè
        </h1>
      </a>
      <Nav pages={pages} page={page} handlePageChange={handlePageChange} />
    </header>
  );
}
