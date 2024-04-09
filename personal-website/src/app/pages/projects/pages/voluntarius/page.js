import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/volun.png'}paragraph={'Voluntarius is an app born out of the need to connect volunteers with those seeking help in their community. Its core feature revolves around "Job Postings," where users can create tasks specifying details like time, description, and required volunteers. These postings are displayed on the home page of nearby volunteers, who can then assess and apply for tasks through an interactive map interface. Once a volunteer completes a task, their hours are verified by the host and can be exported in a PDF format, serving as motivation and a record of volunteer work. The app, developed using Flutter for the frontend and Firebase with node.js for the backend, emphasizes user experience and real-time communication, enhancing community engagement and collaboration. Looking ahead, Voluntarius aims to foster a supportive community by introducing additional features such as a local leaderboard and Single Sign-On integration with platforms like Google and Apple.'}  title={'Voluntarius'}></Info>
    </div>
    );
}