import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Not Found';
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <h1>404 - Page not found</h1>
        <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
      </div>
    </div>
  );
}
