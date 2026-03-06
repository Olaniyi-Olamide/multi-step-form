import SideBarBg from "../assets/images/bg-sidebar-desktop.svg";

function SideBar() {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${SideBarBg})` }}
    ></div>
  );
}

export default SideBar;
