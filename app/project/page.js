"use client";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useProjects } from "@/utils/apiRequestHooks";
import Preloader from "@/components/elements/Preloader";
import { YEARS } from "@/utils/utils";
export default function Project() {
  const [selectedClass, setSelectedClass] = useState("");
  
  useEffect(() => {}, [selectedClass]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const { projects, isLoading, isError } = useProjects({
    project: selectedClass,
  });

  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );


  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="All Fellows Projects"
      >
        <section className="project-section section-padding fix">
          <div className="container">
          <div
                style={{
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <select
                  style={{ maxWidth: 200 }}
                  class="form-select"
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">Select Project</option>
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year} Projects
                    </option>
                  ))}
                </select>
              </div>
            <div className="section-title mb-5 pb-2" style={{ left: 18 }}>
              <h3>
                {selectedClass
                  ? `Class of ${selectedClass} Projects`
                  : "All Projects"}{" "}
              </h3>
            </div>
            <div className="row g-4">
              {projects?.map((data) => (
                <div
                  key={data.id}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-items">
                    <div className="project-image">
                      <img
                        src={data?.fellow?.picture || DEFAULT_AVATAR}
                        alt="project-img"
                        style={{
                          
                          objectFit: "contain",
                        }}
                      />
                      <div className="project-content">
                        <p>{data?.fellow?.full_name}</p>
                        <h4>
                          <Link
                            href={{
                              pathname: "/project-details",
                              query: { _id: data?.id },
                            }}
                          >
                            {data?.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
