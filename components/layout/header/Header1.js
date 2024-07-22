import Link from "next/link";
import Menu from "../Menu";

export default function Header1({
  scroll,
  isSearch,
  handleSearch,
}) {
  return (
    <>
      <header>
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <Link href="/mailto:info@example.com" className="link">
                    info@example.com
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link href="/tel:2086660112">+208-666-011200</Link>
                </li>
              </ul>
              {/* <div className="top-right">
                                <div className="social-icon d-flex align-items-center">
                                    <span>Follow Us:</span>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-1 ${scroll ? "sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <Link
                      href="/"
                      className="header-logo"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <p
                        style={{
                          fontSize: 21,
                          fontWeight: "bold",
                          marginRight: 10,
                        }}
                      >
                        CSEPF
                      </p>

                      <img
                        src="/assets/img/logonew1-1.jpg"
                        style={{ width: 120, height: 50 }}
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
