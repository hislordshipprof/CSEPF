import Layout from "@/components/layout/Layout";
import StaffMembers from "@/components/sections/StaffMembers";
import Link from "next/link";
export default function Team() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
        <section className="team-section-4 section-padding">
          <StaffMembers />
        </section>
      </Layout>
    </>
  );
}
