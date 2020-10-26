import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>PARAYOGA</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <Link href='/blog'>
              <a className='nav-link'>
                Blog <span className='sr-only'>(current)</span>
              </a>
            </Link>
            {/* <Link href='#'>
              <a className='nav-link'>
                link 2 <span className='sr-only'></span>
              </a>
            </Link>
            <Link href='#'>
              <a className='nav-link'>
                link 3 <span className='sr-only'></span>
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
