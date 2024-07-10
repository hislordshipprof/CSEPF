
import Layout from "@/components/layout/Layout"
import Team4 from "@/components/sections/Team4"
import Link from "next/link"
export default function Team() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">

                <section className="team-section-4 section-padding">
                    <Team4 />
                    </section>
            </Layout>


        </>
    )
}