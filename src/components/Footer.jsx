import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <p>Frontend Challenge</p>
          </div>
          <div className='col-6 text-end'>
            <p>© {currentYear} Edgar Castillo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
