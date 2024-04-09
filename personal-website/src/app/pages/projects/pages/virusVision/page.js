import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/vv.png'}paragraph={'Virus Vision is a technology-driven project focused on disease surveillance and public health awareness, particularly targeting global health threats like Covid and Influenza. Utilizing statistics from the UK\'s public health organization, the project offers a detailed overview of disease spread and density relative to population, simplifying complex data for the public. It features a spatial bar-graph covering the United Kingdom, highlighting disease spread across England\'s nine regions. Challenges faced include API downtimes and difficulties in gathering relevant news articles. Despite setbacks, the team learned valuable skills in data parsing, frontend development, and API integration. Moving forward, the project aims to incorporate real-time data, expand disease coverage, support more countries, and include vaccination rates and nearby medical facilities, envisioning Virus Vision as a valuable tool for disease monitoring and public health education.\n\nSkills: Tailwind CSS · Node.js · React.js · Front-End Development'}  title={'Virus Vision'}></Info>
    </div>
    );
}