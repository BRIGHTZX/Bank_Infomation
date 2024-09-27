import { FaBars } from "react-icons/fa";

function Navbar({ sidebarToggle, setSidebarToggle }) {
  const ToggleHandle = () => {
    setSidebarToggle((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className="bg-black px-4 py-3 flex justify-between">
      {/* Left */}
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white me-4 cursor-pointer"
          onClick={ToggleHandle}
        />
        <span className="text-white font-semibold">Dashboard</span>
      </div>
      {/* Right */}
      <div className=" text-white relative">
        {/* Dropdown */}
        <button className="group">
          <p>Akkaracha</p>
          <div
            id="profile-dropdown"
            className="z-10 absolute top-full right-0 text-black group-focus:block hidden"
          >
            <ul className="py-2 text-sm bg-gray-200 rounded-xl shadow w-32">
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Log Out</a>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
