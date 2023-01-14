import { Outlet, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
function Handlelogout() {
  window.location.assign("/");
}
const Layout = () => {
  return (
    <div className="containermain">
      <button
        className="logoutbtn"
        onClick={() => {
          Handlelogout();
        }}
      >
        logout
      </button>
      <h1 className="titlemain">DashBoard</h1>

      <div className="flex">
        <Menu>
          <nav>
            <ul>
              <li>
                <Link to="/home/codes">Codes</Link>
              </li>
              <li>
                <Link to="/home/graph">graph</Link>
              </li>
              <li>
                <Link to="/home/grid">grid</Link>
              </li>
            </ul>
          </nav>
        </Menu>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
