'use client';
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { useGetProject } from "@/utils/apiRequestHooks";

export default function ProjectDetails({ searchParams }) {

  const { project, isLoading, isError } = useGetProject({ project_id: searchParams._id });
  if (isLoading) return <div><Preloader /></div>;

  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Project Details">
        <section className="Project-details-section fix section-padding">
          <div className="container">
            <div className="project-details-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-details-items">
                    <div className="row g-4 justify-content-between">
                      <div className="col-lg-7">
                        <div className="details-content">
                          <h3>{project?.title}</h3>
                          <p style={{textAlign:'justify'}}>
                            {project?.summary}
                          </p>
                          <div className="mt-10">
                            {project?.topics?.map((tag, index) => (
                              <span key={index} className="badge bg-info me-1">
                                {tag?.title}
                              </span>
                            ))}
                          
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="project-catagory">
                          {/* <h3>Project Info: </h3> */}
                          <ul>
                            <li>
                              Student: {"\t"}{project?.fellow?.full_name}
                            </li>
                            <li>
                              Program:{"\t"}{project?.fellow?.program}
                            </li>
                            <li>
                              Download:
                              <a
                                href={project?.document}
                                download={`${project?.title}.pdf`}
                                style={{
                                  cursor: "pointer",
                                  textDecoration: "underline",
                                  color: "blue",
                                }}
                              >
                                Project Document
                              </a>
                            </li>
                            {/* <li>
                              Share:
                              <span>
                                <i className="fa-brands fa-facebook-f me-3" />
                                <i className="fa-brands fa-instagram me-3" />
                                <i className="fa-brands fa-linkedin-in" />
                              </span>
                            </li> */}
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
