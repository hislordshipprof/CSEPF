
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Brand1 from "@/components/sections/Brand1"
import Marque2 from "@/components/sections/Marque2"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
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
                                            <div className="about-author">
                                                <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                                    <Link href="/about" className="theme-btn">
                                                        Explore More
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </Link>
                                                </div>
                                                <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                                    <img src="/assets/img/about/author.png" alt="author-img" />
                                                    <div className="content">
                                                        <h6>Ronald Richards</h6>
                                                        <p>Co, Founder</p>
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
                                {/* <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="offer-items">
                                        <div className="shape-top">
                                            <img src="/assets/img/shape/offer-top.png" alt="shape-img" />
                                        </div>
                                        <div className="shape-bottom">
                                            <img src="/assets/img/shape/offer-bottom.png" alt="shape-img" />
                                        </div>
                                        <div className="icon">
                                            <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2517_1761)">
                                                    <path d="M28.5331 13.0604H33.0025C33.0733 13.0612 33.1434 13.0479 33.209 13.0214C33.2746 12.9949 33.3343 12.9557 33.3846 12.906C33.4348 12.8562 33.4748 12.797 33.502 12.7318C33.5293 12.6665 33.5433 12.5965 33.5433 12.5257C33.5433 12.455 33.5293 12.385 33.502 12.3197C33.4748 12.2545 33.4348 12.1952 33.3846 12.1455C33.3343 12.0958 33.2746 12.0565 33.209 12.03C33.1434 12.0035 33.0733 11.9903 33.0025 11.9911H28.5331C28.2377 11.9911 27.9985 12.2306 27.9985 12.5259C27.9985 12.8212 28.2377 13.0604 28.5331 13.0604ZM28.5331 14.9673H33.0025C33.0733 14.9681 33.1434 14.9549 33.209 14.9284C33.2746 14.9019 33.3343 14.8626 33.3846 14.8129C33.4348 14.7632 33.4748 14.704 33.502 14.6387C33.5293 14.5734 33.5433 14.5034 33.5433 14.4327C33.5433 14.362 33.5293 14.2919 33.502 14.2267C33.4748 14.1614 33.4348 14.1022 33.3846 14.0525C33.3343 14.0027 33.2746 13.9635 33.209 13.937C33.1434 13.9105 33.0733 13.8973 33.0025 13.8981H28.5331C28.4629 13.8981 28.3933 13.9119 28.3285 13.9387C28.2636 13.9656 28.2047 14.0049 28.155 14.0546C28.1054 14.1042 28.066 14.1632 28.0392 14.228C28.0123 14.2929 27.9985 14.3624 27.9985 14.4326C27.9985 14.5028 28.0123 14.5723 28.0391 14.6372C28.066 14.7021 28.1054 14.761 28.155 14.8107C28.2046 14.8604 28.2636 14.8998 28.3284 14.9266C28.3933 14.9535 28.4628 14.9673 28.5331 14.9673ZM28.5331 16.8743H33.0025C33.0733 16.8751 33.1434 16.8618 33.209 16.8353C33.2746 16.8088 33.3343 16.7696 33.3846 16.7199C33.4348 16.6701 33.4748 16.6109 33.502 16.5457C33.5293 16.4804 33.5433 16.4104 33.5433 16.3396C33.5433 16.2689 33.5293 16.1989 33.502 16.1336C33.4748 16.0684 33.4348 16.0091 33.3846 15.9594C33.3343 15.9097 33.2746 15.8704 33.209 15.8439C33.1434 15.8174 33.0733 15.8042 33.0025 15.805H28.5331C28.4629 15.805 28.3933 15.8188 28.3285 15.8457C28.2636 15.8725 28.2047 15.9119 28.155 15.9615C28.1054 16.0112 28.066 16.0701 28.0392 16.135C28.0123 16.1998 27.9985 16.2693 27.9985 16.3395C27.9985 16.6348 28.2377 16.8743 28.5331 16.8743ZM30.7677 24.2294C30.1758 24.2294 29.6193 24.4601 29.2007 24.8786C28.3364 25.7428 28.3364 27.1487 29.2007 28.013C29.6327 28.4451 30.2002 28.6612 30.7679 28.6612C31.3354 28.6612 31.9028 28.4451 32.3351 28.013C32.7537 27.5945 32.9841 27.0378 32.9841 26.4458C32.9841 25.8537 32.7537 25.2972 32.3351 24.8786C31.9166 24.4601 31.3598 24.2294 30.7677 24.2294ZM29.9569 25.6348C30.0631 25.5279 30.1895 25.4431 30.3287 25.3854C30.4679 25.3277 30.6172 25.2982 30.7679 25.2986C30.8849 25.2986 30.9989 25.3165 31.1077 25.3499L29.6729 26.7848C29.5517 26.3915 29.646 25.9454 29.9569 25.6348ZM31.579 27.2569C31.2681 27.5675 30.822 27.6617 30.429 27.5409L31.8635 26.1061C31.8976 26.2161 31.9149 26.3306 31.9149 26.4458C31.9149 26.7521 31.7957 27.0402 31.579 27.2569ZM32.3351 19.7853C31.9166 19.3668 31.3598 19.1364 30.7679 19.1364C30.1758 19.1364 29.6193 19.3668 29.2007 19.7853C28.3366 20.6498 28.3366 22.0557 29.2007 22.9198C29.6327 23.3518 30.2002 23.568 30.7679 23.568C31.3354 23.568 31.9031 23.3518 32.3351 22.9197C32.7537 22.5012 32.9841 21.9448 32.9841 21.3526C32.9841 20.7607 32.7537 20.204 32.3351 19.7853ZM31.579 20.5415C31.6858 20.6478 31.7705 20.7742 31.8282 20.9134C31.8858 21.0526 31.9153 21.2019 31.9149 21.3526C31.9149 21.4696 31.8973 21.5839 31.8635 21.6924L30.4279 20.2567C30.538 20.2228 30.6525 20.2056 30.7677 20.2056C30.9184 20.2052 31.0677 20.2346 31.207 20.2923C31.3462 20.35 31.4727 20.4347 31.579 20.5415ZM29.9569 22.1639C29.646 21.853 29.5517 21.407 29.6728 21.0136L31.1068 22.4476C30.7133 22.5688 30.2675 22.4746 29.9569 22.1639Z" fill="#384BFF" />
                                                    <path d="M31.3294 6.27265H21.8985C21.8109 5.64509 21.5645 5.05028 21.1827 4.54459L24.8145 0.912741C24.8642 0.863112 24.9035 0.804193 24.9304 0.739348C24.9573 0.674502 24.9711 0.605001 24.9711 0.534812C24.9711 0.464623 24.9573 0.395121 24.9304 0.330276C24.9035 0.265431 24.8642 0.206511 24.8145 0.156883C24.7649 0.10719 24.706 0.067768 24.6411 0.0408708C24.5762 0.0139735 24.5067 0.000128979 24.4365 0.000128979C24.3662 0.000128979 24.2967 0.0139735 24.2318 0.0408708C24.167 0.067768 24.108 0.10719 24.0584 0.156883L20.4261 3.78922C19.0907 2.78706 17.2373 2.78706 15.9022 3.78901L12.2698 0.156672C12.1695 0.0564322 12.0335 0.00012207 11.8918 0.00012207C11.75 0.00012207 11.614 0.0564322 11.5137 0.156672C11.464 0.206295 11.4246 0.265224 11.3977 0.33009C11.3708 0.394957 11.357 0.464487 11.357 0.534706C11.357 0.604926 11.3708 0.674456 11.3977 0.739322C11.4246 0.804188 11.464 0.863118 11.5137 0.912741L15.1455 4.54459C14.7637 5.05034 14.5173 5.64511 14.4295 6.27265H4.6706C2.09506 6.27265 3.5159e-05 8.36782 3.5159e-05 10.9433V22.0573C3.5159e-05 22.3526 0.239238 22.5918 0.534761 22.5918C0.604959 22.5918 0.674474 22.578 0.739332 22.5511C0.804191 22.5243 0.863123 22.4849 0.912761 22.4353C0.962399 22.3856 1.00177 22.3267 1.02863 22.2619C1.05548 22.197 1.06929 22.1275 1.06928 22.0573V10.9433C1.06928 8.95753 2.68484 7.34196 4.6706 7.34196H31.3297C33.3152 7.34196 34.9307 8.95753 34.9307 10.9433V14.5009C34.9307 14.7962 35.1699 15.0354 35.4654 15.0354C35.5356 15.0354 35.6052 15.0216 35.67 14.9948C35.7349 14.9679 35.7938 14.9285 35.8434 14.8789C35.8931 14.8292 35.9325 14.7703 35.9593 14.7055C35.9862 14.6406 36 14.5711 36 14.5009V10.9433C36 8.36775 33.9049 6.27265 31.3294 6.27265ZM16.2532 4.89594C17.3071 3.84238 19.0214 3.84238 20.0751 4.89622C20.4579 5.27822 20.7114 5.75473 20.8147 6.27279H15.5135C15.6166 5.7548 15.8702 5.27822 16.2532 4.89594ZM35.4652 16.1049C35.3234 16.105 35.1875 16.1613 35.0872 16.2616C34.987 16.3619 34.9307 16.4979 34.9307 16.6396V28.5873C34.9307 30.5727 33.3152 32.1883 31.3294 32.1883H4.6706C2.68484 32.1883 1.06928 30.5727 1.06928 28.5873V24.196C1.07009 24.1253 1.05686 24.0551 1.03035 23.9896C1.00385 23.924 0.9646 23.8643 0.914875 23.814C0.86515 23.7637 0.80594 23.7238 0.740674 23.6965C0.675408 23.6693 0.605383 23.6553 0.534655 23.6553C0.463927 23.6553 0.393902 23.6693 0.328636 23.6965C0.26337 23.7238 0.20416 23.7637 0.154435 23.814C0.104711 23.8643 0.0654601 23.924 0.0389567 23.9896C0.0124534 24.0551 -0.000775918 24.1253 3.5159e-05 24.196V28.5873C3.5159e-05 31.1625 2.09513 33.2575 4.6706 33.2575H6.24602L6.48192 34.1268C6.73188 35.0469 7.57233 35.6897 8.5259 35.6897C9.47948 35.6897 10.32 35.047 10.57 34.1268L10.8059 33.2575H25.1941L25.43 34.1268C25.68 35.0469 26.5207 35.6897 27.474 35.6897C28.4277 35.6897 29.2681 35.047 29.518 34.1268L29.754 33.2575H31.3297C33.9049 33.2575 36 31.1625 36 28.5873V16.6396C36 16.3444 35.7608 16.1049 35.4652 16.1049ZM9.53805 33.8463C9.41423 34.302 8.99805 34.6203 8.52597 34.6203C8.05382 34.6203 7.63772 34.302 7.51382 33.8463L7.354 33.2575H9.69794L9.53805 33.8463ZM28.4862 33.8463C28.3623 34.302 27.9462 34.6203 27.474 34.6203C27.0019 34.6203 26.5858 34.302 26.4622 33.8463L26.3023 33.2575H28.646L28.4862 33.8463Z" fill="#384BFF" />
                                                    <path d="M8.09745 30.1765C10.3635 30.4113 12.6402 30.5288 14.9183 30.5286C17.1972 30.5286 19.4765 30.4113 21.7395 30.1765C23.0386 30.0414 24.2685 29.4632 25.2024 28.5481C26.1365 27.6326 26.7391 26.4148 26.8997 25.1186C27.3392 21.5633 27.3392 17.9673 26.8997 14.4119C26.7391 13.1158 26.1365 11.898 25.2024 10.9825C24.2685 10.0674 23.0386 9.48922 21.7395 9.35408C17.2043 8.88441 12.6327 8.88441 8.09745 9.35408C6.79836 9.48894 5.56838 10.0674 4.63456 10.9825C3.70046 11.898 3.09753 13.1158 2.93722 14.4119C2.49749 17.9673 2.49749 21.5633 2.93722 25.1186C3.09753 26.4148 3.70046 27.6326 4.63456 28.5481C5.56838 29.4632 6.79808 30.0414 8.09745 30.1765ZM3.99844 14.5432C4.2709 12.3431 6.00179 10.6466 8.20784 10.4176C12.6697 9.9553 17.1673 9.9553 21.6291 10.4176C23.8351 10.6466 25.566 12.3432 25.8385 14.5432C26.2672 18.0113 26.2672 21.519 25.8385 24.9871C25.566 27.1872 23.8351 28.8837 21.629 29.1127C17.1672 29.575 12.6696 29.575 8.20784 29.1127C6.00179 28.8837 4.2709 27.1874 3.99844 24.9871C3.56943 21.519 3.56943 18.0113 3.99844 14.5432Z" fill="#384BFF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2517_1761">
                                                        <rect width={36} height={36} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h5>Tv</h5>
                                        </div>
                                    </div>
                                </div> */}
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
                                <Link href="/staff" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    All Member
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/team/04.jpg" alt="team-img" />
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
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/team/05.jpg" alt="team-img" />
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
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/team/06.jpg" alt="team-img" />
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
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img src="/assets/img/team/07.jpg" alt="team-img" />
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
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                <Brand1 />

                </div>

            </Layout>
        </>
    )
}