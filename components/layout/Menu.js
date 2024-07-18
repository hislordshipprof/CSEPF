import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul>
        <li className="has-dropdown active menu-thumb">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/curriculum">Curriculum</Link>
        </li>
        <li>
          <Link href="/testimonial">Testimonials</Link>
        </li>
        <li className="has-dropdown">
          <Link href="#">
            Resources
            <i className="fas fa-angle-down ps-1" />
          </Link>
          <ul className="submenu">
            <li className="has-dropdown">
              <Link href="/project">Projects</Link>
            </li>
            <li className="has-dropdown">
              <Link href="/cohorts">Cohorts</Link>
            </li>
            <li className="has-dropdown">
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/apply">Apply</Link>
        </li>
      </ul>
    </>
  );
}
