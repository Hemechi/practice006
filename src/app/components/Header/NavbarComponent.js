export default function NavbarComponent() {
  return (
    <div className="navbar sticky top-0 z-10 bg-dark-blue text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <img className="w-10" src="https://istad.co/resources/img/logo_md.png"></img>
        <p className="ml-3 text-xl font-bold">CSTAD</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li><a>Home</a></li>
          <li><a>Enroll</a></li>
          <li><a>Course</a></li>
          <li><a>IT News</a></li>
          <li><a>Job Opportunity</a></li>
          <li><a>About Us</a></li>
        </ul>
      </div>
    </div>
  )
}