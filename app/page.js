import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Achievement1 from "@/components/sections/Achievement1";
import ParticipatingSchools from "@/components/sections/ParticipatingSchools";
import Cta1 from "@/components/sections/Cta1";
import HomeBanner from "@/components/sections/HomeBanner";
import Marque1 from "@/components/sections/Marque1";
import Marque2 from "@/components/sections/Marque2";
import News1 from "@/components/sections/News1";
import FellowsProjects from "@/components/sections/FellowsProjects";
import Service1 from "@/components/sections/Service1";
import StaffMembers from "@/components/sections/StaffMembers";
import Testimonial3 from "@/components/sections/Testimonial3";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={4}>
        <HomeBanner />
        {/* <Marque1 /> */}
        <About />
        <ParticipatingSchools />
        <Service1 />
        <Achievement1 />
        <FellowsProjects />
        {/* <Marque2 /> */}
        <Testimonial3 />
        <StaffMembers />

        <News1 />
        <Cta1 />
      </Layout>
    </>
  );
}
