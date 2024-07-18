import { participation_schools } from "@/utils/data";
import SchoolsSlider from "../slider/SchoolsSlider";

export default function ParticipatingSchools() {
  return (
    <>
      <div className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              Participation Schools
            </h6>
            <SchoolsSlider data={participation_schools} />
          </div>
        </div>
      </div>
    </>
  );
}
