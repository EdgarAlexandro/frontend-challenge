// Loader component that displays a spinner while the login page is loading
export default function Loader() {
  return (
    <div className='text-center d-flex justify-content-center align-items-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
