import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/f1.png'}paragraph={'Developed a Chrome extension that scrapes the F1 website to gather information about driver standings, constructor standings, race results, and schedule information. It then displays this information in a lightweight UI that allows for easy use and stores the information locally to allow for use even without an internet connection. Currently supports an international user base of nearly 200 users. Built using HTML, CSS, and JavaScript. \n Skills: Chrome Extensions · Chrome DevTools · JavaScript · HTML · Cascading Style Sheets (CSS)'}  title={'F1 Standings Extension'}></Info>
    </div>
    );
}