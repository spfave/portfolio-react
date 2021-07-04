import { useEffect } from 'react';

export function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, handler]);
}

/* 
References:
https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
https://dmitripavlutin.com/react-useref-guide/#:~:text=useRef%20%28initialValue%29%20is%20a%20built-in%20React%20hook%20that,is%20an%20object%20having%20a%20special%20property%20current.
https://www.youtube.com/watch?v=eWO1b6EoCnQ
*/
