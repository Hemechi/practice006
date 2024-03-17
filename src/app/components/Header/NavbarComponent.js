import Link from 'next/link';

export default function NavbarComponent() {
  return (
    <div className="navbar bg-dark-blue text-white sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-dark-blue rounded-box w-52">
            <Link href="/src/app/page.js"><li><a>Home</a></li></Link>
            <Link href="/src/app/enroll/page.js"><li><a>Enroll</a></li></Link>
            <Link href="/src/app/course/page.js"><li><a>Course</a></li></Link>
            <Link href="/src/app/itNews/page.js"><li><a>IT News</a></li></Link>
            <Link href="/src/app/jobOpportunity/page.js"><li><a>Job Opportunity</a></li></Link>
            <Link href="/src/app/aboutUs/page.js"><li><a>About Us</a></li></Link>
          </ul>
        </div>
        <img className='w-10' src='https://istad.co/resources/img/logo_md.png'></img>
        <a className="btn btn-ghost text-xl font-bold">CSTAD</a>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <Link href="/"><li><a>Home</a></li></Link>
          <Link href="/enroll"><li><a>Enroll</a></li></Link>
          <Link href="/course"><li><a>Course</a></li></Link>
          <Link href="/itNews"><li><a>IT News</a></li></Link>
          <Link href="/jobOpportunity"><li><a>Job Opportunity</a></li></Link>
          <Link href="/aboutUs"><li><a>About Us</a></li></Link>
        </ul>
      </div>
    </div>
  )
}