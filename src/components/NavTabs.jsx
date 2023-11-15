// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const nav = {
  display: 'flex',
  height: '100px',
  alignItems: 'center',
  gap: '50px',
  listStyle: 'none'
}

const navLogo = {
  display: 'flex',
  justifyContent: 'center',
  background: 'blue',
  marginRight: '100px',
  width: '20%',
}


function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul style={nav}>

    <li className="logo" style={navLogo}>
    <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About'}
        >
          Logo
        </a>
    </li>


      <li className="nav-item" >
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>

  );
}

export default NavTabs;
