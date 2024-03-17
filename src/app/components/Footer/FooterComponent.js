import Link from 'next/link';

export default function FooterComponent(){
    return(
        <footer className="footer p-10 bg-dark-blue text-white">
  <aside>
    <img className="w-20" src="https://istad.co/resources/img/logo_md.png"></img>
    <p>Start your IT career with <br/>CSTAD</p>
  </aside> 
  <nav>
    <h5 className="font-extrabold">LEARN MORE</h5>
    <ul className="px-1">
          <Link href="/src/app/course/page.js"><li><a className="link link-hover">Course</a></li></Link>
          <Link href="/src/app/itNews/page.js"><li><a className="link link-hover">IT News</a></li></Link>
          <Link href="/src/app/jobOpportunity/page.js"><li><a className="link link-hover">Job Opportunity</a></li></Link>
          <Link href="#"><li><a className="link link-hover">Privacy Policy</a></li></Link>
          <Link href="#"><li><a className="link link-hover">FAQ</a></li></Link>
        </ul>
  </nav> 
  <nav>
    <h5 className="font-extrabold">CONTACT US</h5> 
    <a className="link link-hover">(+855) 95-990-910</a>
    <a className="link link-hover">(+855) 93-990-910</a>
  </nav> 
  <nav>
  <h5 className="font-extrabold">FOLLOW US</h5> 
  <iframe src="https://web.facebook.com/istad.co/?ref=embed_page" width="255" height="130" ></iframe>
  </nav>
</footer>
    )
}