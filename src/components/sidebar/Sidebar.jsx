import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
    <span className="sidebarTitle">ABOUT ME</span>
    <img className="sidebarImg" src="https://images.pexels.com/photos/17028696/pexels-photo-17028696/free-photo-of-young-woman-in-black-dress-with-suspenders-sitting-on-a-lawn-with-a-photo-camera.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
    <li className="sidebarListItem">Life</li>
    <li className="sidebarListItem">Music</li>
    <li className="sidebarListItem">Style</li>
    <li className="sidebarListItem">Sport</li>
    <li className="sidebarListItem">Tech</li>
    <li className="sidebarListItem">Cinema</li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
    </div>
    </div>
    </div>
  )
}
