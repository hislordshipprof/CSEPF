import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <Link href="/">
                        Home
                        {/* <i className="fas fa-angle-down ps-1" /> */}
                    </Link>
                   
                </li>
                <li>
                    <Link href="/curriculum">Curriculum</Link>
                </li>
                <li>
                    <Link href="/cohorts">
                        Cohorts
                        {/* <i className="fas fa-angle-down ps-1" /> */}
                    </Link>
                    {/* <ul className="submenu">
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="/service-carousel">Service Carousel</Link></li>
                        <li><Link href="/service-details">Service Details</Link></li>
                    </ul> */}
                </li>
                <li className="has-dropdown">
                    <Link href="/news">
                        Resources
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li className="has-dropdown">
                            <Link href="/project">
                                Projects
                                {/* <i className="fas fa-angle-down ps-1" /> */}
                            </Link>
                          
                        </li>
                        <li className="has-dropdown">
                            <Link href="/testimonial">
                                Testimonials
                            </Link>
                           
                        </li>
                        <li className="has-dropdown">
                            <Link href="/events">
                                Events
                            </Link>
                          
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Staff
                            </Link>
                          
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
    )
}
