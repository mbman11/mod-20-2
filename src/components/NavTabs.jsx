


function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul className="nav">

    <li className="navLogo">
    <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage}
        >
          Logo
        </a>
    </li>


      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage}
        >
          Contact
        </a>
      </li>
    </ul>

  );
}

export default NavTabs;




