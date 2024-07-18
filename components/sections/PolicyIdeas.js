import { POLICY_TOPICS } from "@/utils/data";
import Accordion from "../elements/Accordion";

export default function PolicyIdeas() {
  return (
    <>
      <section className="faq-section-2 fix section-padding pt-8">
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="faq-image">
                  <img src="/assets/img/faq/faq-2.png" alt="faq-img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content style-2">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      See Our Various Policy Topics
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Policy Ideas Our Fellows Are Researching Into
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <Accordion topics={POLICY_TOPICS} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
