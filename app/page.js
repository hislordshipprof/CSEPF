import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Achievement1 from "@/components/sections/Achievement1";
import ParticipatingSchools from "@/components/sections/ParticipatingSchools";
import Cta1 from "@/components/sections/Cta1";
import HomeBanner from "@/components/sections/HomeBanner";
import FellowsProjects from "@/components/sections/FellowsProjects";
import StaffMembers from "@/components/sections/StaffMembers";
import Testimonial3 from "@/components/sections/Testimonial3";
import FeaturedPastSpeakers from "@/components/sections/FeaturedPastSpeakers";
import FeaturedTrips from "@/components/sections/FeaturedTrips";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={4}>
        <HomeBanner />
        <About />
        <ParticipatingSchools />
        <FeaturedPastSpeakers />
        <Achievement1 />
        <FellowsProjects />
        <Testimonial3 />
        <StaffMembers />

        <FeaturedTrips />
        <Cta1 />
      </Layout>
    </>
  );
}
