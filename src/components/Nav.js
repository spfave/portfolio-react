export default function Nav({ pages, page, handlePageChange }) {
  return (
    <nav className='flex space-x-4'>
      {pages.map((pageName, index) => (
        <NavLink
          key={index}
          pageName={pageName}
          handlePageChange={handlePageChange}
        />
      ))}
    </nav>
  );
}

function NavLink({ pageName, handlePageChange }) {
  return (
    <a
      href={`#${pageName.toLowerCase()}`}
      onClick={() => handlePageChange(pageName)}
      className='text-lg text-gray-300 hover:text-gray-200'
    >
      {pageName}
    </a>
  );
}
