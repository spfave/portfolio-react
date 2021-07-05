import Nav from './Nav';

export default function Header({ pages, page, handlePageChange }) {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-700'>
      <h1 className='text-xl md:text-3xl tracking-wide text-gray-100 font-bold'>
        Sebastian Favè
      </h1>
      <Nav pages={pages} />
    </header>
  );
}
