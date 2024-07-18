
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Brand1 from "@/components/sections/Brand1"
import Marque2 from "@/components/sections/Marque2"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import { featured_class_of_2024, staff_members } from "@/utils/data"
import Link from "next/link"
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="About Us">
                <div>
                    <section className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-2.jpg")' }}>
                        <div className="container">
                            <div className="about-wrapper style-2">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-image-items">
                                            <div className="circle-shape">
                                                <img src="/assets/img/about/circle.png" alt="shape-img" />
                                            </div>
                                            <div className="counter-shape float-bob-y">
                                                <div className="icon">
                                                    <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                                </div>
                                                <div className="content">
                                                    <h3><CounterUp count={25} />Years</h3>
                                                    <p>Of Experience</p>
                                                </div>
                                            </div>
                                            <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/03.png")' }}>
                                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                                    <img src="/assets/img/about/04.jpg" alt="about-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4 mt-lg-0">
                                        <div className="about-content">
                                            <div className="section-title">
                                                <span className="wow fadeInUp">ABOUT CSEPF</span>
                                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                    We Are Increasing Policy  <span>Making As Engineers</span>
                                                </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                            The Colorado Science and Engineering Policy Fellowship is a first of its kind program in Colorado. The program was co-founded by State Senator Chris Hansen (D-Denver) and State Senator Bob Rankin (R-Carbondale) in 2018, when the two legislators found common ground in being policy-makers with backgrounds in engineering. With Senator Rankin’s retirement in 2022, State Senator Cleave Simpson (R-Alamosa) has stepped up to co-lead the fellowship with Senator Hansen.

Overall, the fellowship is designed to give policy-making experience to undergraduate and graduate students with backgrounds in science, technology, engineering, and mathematics (STEM), with the goal of increasing the presence of individuals in public policy that come from a science and engineering background.
                                            </p>
                                            <div className="about-icon-items">
                                                <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                                    <div className="icon">
                                                        <img src="/assets/img/about/icon-4.svg" alt="icon-img" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Problem Solving</h4>
                                                        <p>
                                                        Give Engineers the ability to solve <br/> problems using policy making 

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                                    <div className="icon">
                                                        <img src="/assets/img/about/icon-5.svg" alt="icon-img" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Mission &amp; Vision</h4>
                                                        <p>
                                                        Give policy-making experience to undergraduate and <br/>graduate students with backgrounds in (STEM)

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Offer Section Start */}
                    <section className="offer-section fix section-bg-2 section-padding">
                        <div className="line-shape">
                            <img src="/assets/img/team/line-shape.png" alt="shape-img" />
                        </div>
                        <div className="mask-shape">
                            <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
                        </div>
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">Our Focus</span>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    Enhancing Policy Ideas <br /> for the <span>Next Generation</span>
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="offer-items">
                                        <div className="shape-top">
                                            <img src="/assets/img/shape/offer-top.png" alt="shape-img" />
                                        </div>
                                        <div className="shape-bottom">
                                            <img src="/assets/img/shape/offer-bottom.png" alt="shape-img" />
                                        </div>
                                        <div className="icon">
                                           <svg width="160" height="150" viewBox="8 35 400 330" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" fill="url(#earthGradient)" />
  <circle cx="100" cy="100" r="55" fill="none" stroke="#76c043" stroke-width="5" stroke-opacity="0.5" />
  {/* <text x="50%" y="180" text-anchor="middle" fill="black" font-family="Arial" font-size="14">Greenhouse Effect</text> */}
  <defs>
    <radialGradient id="earthGradient">
      <stop offset="10%" stop-color="#0a4f30" />
      <stop offset="40%" stop-color="#3e8e41" />
      <stop offset="70%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#87ceeb" />
    </radialGradient>
  </defs>
</svg>
                                        </div>
                                        <div className="content">
                                            <h5>Greenhouse</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="offer-items">
                                        <div className="shape-top">
                                            <img src="/assets/img/shape/offer-top.png" alt="shape-img" />
                                        </div>
                                        <div className="shape-bottom">
                                            <img src="/assets/img/shape/offer-bottom.png" alt="shape-img" />
                                        </div>
                                        <div className="icon">
 <svg width="80" height="60" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,0 Q75,50 50,150 Q25,50 50,0Z" fill="url(#waterGradient)" />
  <defs>
    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4facfe" />
      <stop offset="100%" stop-color="#00f2fe" />
    </linearGradient>
  </defs>
</svg>
                                        </div>
                                        <div className="content">
                                            <h5>Clean Water</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="offer-items active">
                                        <div className="shape-top">
                                            <img src="/assets/img/shape/offer-top.png" alt="shape-img" />
                                        </div>
                                        <div className="shape-bottom">
                                            <img src="/assets/img/shape/offer-bottom.png" alt="shape-img" />
                                        </div>
                                        <div className="icon">
       <svg width="60" height="90" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,0 45,37.5 30,37.5 45,90 15,52.5 30,52.5 15,0" fill="yellow" />
</svg>
                                        </div>
                                        <div className="content">
                                            <h5>Energy</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="offer-items">
                                        <div className="shape-top">
                                            <img src="/assets/img/shape/offer-top.png" alt="shape-img" />
                                        </div>
                                        <div className="shape-bottom">
                                            <img src="/assets/img/shape/offer-bottom.png" alt="shape-img" />
                                        </div>
                                        <div className="icon">
<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="35" stroke="black" stroke-width="2" fill="white" />
  <rect x="32" y="16" width="16" height="48" fill="green" />
  <rect x="16" y="32" width="48" height="16" fill="green" />
</svg>
                                        </div>
                                        <div className="content">
                                            <h5>Health</h5>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="offer-items">
                                        <div className="shape-top">
                                            <img src="/assets/img/shape/offer-top.png" alt="shape-img" />
                                        </div>
                                        <div className="shape-bottom">
                                            <img src="/assets/img/shape/offer-bottom.png" alt="shape-img" />
                                        </div>
                                        <div className="icon">
                                            <svg width={24} height={36} viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9999 10.2061C9.68286 10.2061 7.79785 12.0901 7.79785 14.406C7.79785 16.722 9.68279 18.606 11.9999 18.606C14.317 18.606 16.202 16.7219 16.202 14.406C16.202 12.0901 14.317 10.2061 11.9999 10.2061ZM11.9999 17.4061C10.3446 17.4061 8.99788 16.0601 8.99788 14.406C8.99788 12.7519 10.3446 11.406 11.9999 11.406C13.6552 11.406 15.002 12.7519 15.002 14.406C15.002 16.0601 13.6552 17.4061 11.9999 17.4061Z" fill="#384BFF" />
                                                <path d="M19.1903 18.0102C19.192 17.882 19.2001 17.7544 19.2001 17.626C19.2001 10.7685 16.7292 4.40667 12.4208 0.171803C12.3084 0.0616816 12.1574 0 12 0C11.8427 0 11.6917 0.0616816 11.5793 0.171803C7.2709 4.40667 4.79997 10.7685 4.79997 17.626C4.79997 17.7544 4.80806 17.882 4.80982 18.0102C1.91877 19.5144 0 23.5346 0 28.1996C0 28.3587 0.063212 28.5113 0.17573 28.6238C0.288248 28.7364 0.440854 28.7996 0.599979 28.7996H7.59406C7.59476 28.7996 7.5954 28.7999 7.5961 28.7999H7.92966L6.67592 30.8884C6.62123 30.9795 6.59171 31.0834 6.59038 31.1896C6.58905 31.2958 6.61594 31.4005 6.66832 31.4928C6.72061 31.5852 6.7965 31.6621 6.88822 31.7156C6.97995 31.7691 7.08422 31.7972 7.1904 31.7972H16.7925C16.8986 31.7972 17.0029 31.7691 17.0946 31.7156C17.1863 31.6621 17.2622 31.5852 17.3145 31.4928C17.3669 31.4005 17.3938 31.2958 17.3925 31.1896C17.3911 31.0834 17.3616 30.9795 17.3069 30.8884L16.053 28.7999H16.404C16.4047 28.7999 16.4053 28.7996 16.406 28.7996H23.4001C23.5592 28.7996 23.7118 28.7364 23.8243 28.6238C23.9369 28.5113 24.0001 28.3587 24.0001 28.1996C24.0001 23.5347 22.0814 19.5144 19.1903 18.0102ZM12.0001 1.45473C13.2677 2.78406 14.3501 4.32033 15.2367 6.00572H8.76336C9.65008 4.32026 10.7325 2.78399 12.0001 1.45473ZM1.21177 27.5996C1.35472 23.9749 2.78488 20.794 4.86143 19.374C5.04227 22.2454 5.66728 25.0445 6.69771 27.5996H1.21177ZM8.25036 30.5973L9.32931 28.7999H14.6533L15.7325 30.5973H8.25036ZM16.0117 27.5999H7.98845C6.68682 24.5589 6.00007 21.1194 6.00007 17.626C6.00007 13.8965 6.76697 10.3296 8.17857 7.20568H15.8216C17.2332 10.3296 18.0001 13.8965 18.0001 17.626C18.0001 21.1195 17.3134 24.5589 16.0117 27.5999ZM17.3024 27.5996C18.3329 25.0445 18.9579 22.2454 19.1387 19.374C21.2153 20.794 22.6454 23.9749 22.7884 27.5996H17.3024ZM12.0001 32.4005C11.9213 32.4005 11.8433 32.416 11.7705 32.4462C11.6977 32.4763 11.6315 32.5205 11.5758 32.5762C11.5201 32.632 11.4759 32.6981 11.4458 32.7709C11.4156 32.8437 11.4001 32.9217 11.4001 33.0005V35.3999C11.4001 35.559 11.4633 35.7116 11.5758 35.8242C11.6883 35.9367 11.8409 35.9999 12.0001 35.9999C12.1592 35.9999 12.3118 35.9367 12.4243 35.8242C12.5368 35.7116 12.6001 35.559 12.6001 35.3999V33.0006C12.6001 32.9218 12.5845 32.8437 12.5544 32.7709C12.5243 32.6981 12.4801 32.632 12.4243 32.5763C12.3686 32.5205 12.3025 32.4763 12.2297 32.4462C12.1569 32.416 12.0789 32.4005 12.0001 32.4005ZM8.99687 32.4005C8.91808 32.4005 8.84006 32.416 8.76727 32.4462C8.69448 32.4763 8.62834 32.5205 8.57262 32.5762C8.51691 32.632 8.47272 32.6981 8.44256 32.7709C8.41241 32.8437 8.39689 32.9217 8.39689 33.0005V34.1993C8.39689 34.3584 8.46011 34.5111 8.57262 34.6236C8.68514 34.7361 8.83775 34.7993 8.99687 34.7993C9.156 34.7993 9.3086 34.7361 9.42112 34.6236C9.53364 34.5111 9.59685 34.3584 9.59685 34.1993V33.0005C9.59683 32.8414 9.53361 32.6888 9.4211 32.5763C9.30859 32.4637 9.15599 32.4005 8.99687 32.4005ZM15.0033 32.4005C14.9246 32.4005 14.8465 32.416 14.7737 32.4462C14.7009 32.4763 14.6348 32.5205 14.5791 32.5762C14.5234 32.632 14.4792 32.6981 14.449 32.7709C14.4189 32.8437 14.4034 32.9217 14.4034 33.0005V34.1993C14.4034 34.3584 14.4666 34.5111 14.5791 34.6236C14.6916 34.7361 14.8442 34.7993 15.0033 34.7993C15.1625 34.7993 15.3151 34.7361 15.4276 34.6236C15.5401 34.5111 15.6033 34.3584 15.6033 34.1993V33.0005C15.6033 32.8414 15.5401 32.6888 15.4276 32.5763C15.3151 32.4637 15.1625 32.4005 15.0033 32.4005Z" fill="#384BFF" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h5>AI</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Project Section Start */}
                    <section className="project-section-2 section-padding fix">
                        <div className="left-shape">
                            <img src="/assets/img/project/left-shape.png" alt="shape-img" />
                        </div>
                        <div className="right-shape">
                            <img src="/assets/img/project/right-shape.png" alt="shape-img" />
                        </div>
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title">
                                    <span className="wow fadeInUp">PROJECTS</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Our Latest Incredible <br /> Policy Research Proposal
                                    </h2>
                                </div>
                                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                    <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                                    <button className="array-next"><i className="fal fa-arrow-left" /></button>
                                </div>
                            </div>
                            <div className="project-wrapper1">
                                <ProjectSlider2 showDots />
                            </div>
                        </div>
                    </section>
                    {/*<< Marque Section Start >>*/}
                    <div className="marque-section-3 section-padding">
                    <Marque2 />

                    </div>
                    {/*<< Team Section Start >>*/}
                    <section className="team-section-3 fix pt-0 section-padding">
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title">
                                    <span className="wow fadeInUp">Official Members</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Our Dedicated Supporting Official <br /> Members
                                    </h2>
                                </div>
                                <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    All Member
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                            <div className="row">
                            {staff_members?.splice(0,4).map((data)=>( 
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                  <div className="single-team-items">
                                        <div className="team-image">
                                            <img src={data?.img} alt="team-img" />
                                            <div className="social-profile">
                                                <ul>
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h3>
                                                <Link href="/team-details">{data?.name}</Link>
                                            </h3>
                                            <p>{data?.project}</p>
                                        </div>
                                    </div>

                                </div>
                             ))}
                            </div>
                        </div>
                    </section>
                   
                <Brand1 />

                </div>

            </Layout>
        </>
    )
}