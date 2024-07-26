import Layout from "@/components/layout/Layout";

export default function ProjectDetails() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Project Details">
        <section className="Project-details-section fix section-padding">
          <div className="container">
            <div className="project-details-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-details-items">
                    <div className="details-image">
                      <img src="/assets/img/project/details.jpg" alt="img" />
                    </div>
                    <div className="row g-4 justify-content-between">
                      <div className="col-lg-7">
                        <div className="details-content pt-5">
                          <h3>Project Summary</h3>
                          <p>
                            Nulla faucibus malesuada. In placerat feugiat eros
                            ac tempor. Integer euismod massa sapien, et
                            consequat enim laoreet et. Nulla sit amet nisi
                            dapibus, gravida turpis sit amet, accumsan nisl.
                            Fusce vel semper risus. Morbi congue eros sagittis,
                            sodales turpis venenatis, iaculis dui. Proin ac
                            purus sed nibh dapibus neque. scelerisque sed quis
                            ante.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="project-catagory">
                          <h3>Project Info: </h3>
                          <ul>
                            <li>
                              Student:
                              <span>Ralph Edwards</span>
                            </li>
                            <li>
                              Topic:
                              <span>Water Policy</span>
                            </li>
                            <li>
                              School:
                              <span>CU Boulder</span>
                            </li>
                            <li>
                              Download Project:
                              <a
                                href="/path/to/your/file.pdf"
                                download="YourFileName.pdf"
                                style={{
                                  cursor: "pointer",
                                  textDecoration: "underline",
                                  color: "blue",
                                }}
                              >
                                PDF DOWNLOAD
                              </a>
                            </li>
                            <li>
                              Share:
                              <span>
                                <i className="fa-brands fa-facebook-f me-3" />
                                <i className="fa-brands fa-instagram me-3" />
                                <i className="fa-brands fa-linkedin-in" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
