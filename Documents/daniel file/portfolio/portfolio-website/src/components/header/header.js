import './header.css'
function Header(){
    return (
      <div className="header-container">
        <div className="name-and-image">
          <img src="" alt="" srcset="" />
          <h5>OJINGWA DANIEL</h5>
        </div>

        <div className="header-menu-container">
          <ul className="header-menu">
            <li>
              <a href="http://"> Home</a>
            </li>
            <li>
              <a href="http://">About</a>
            </li>
            <li>
              <a href="http://">Projects</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
}
export default Header