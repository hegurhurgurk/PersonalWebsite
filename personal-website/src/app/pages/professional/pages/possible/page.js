import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Education" name2="Projects" route1="./education" route2="./projects"></Banner>
        <Info link={'/pages/professional'} links={'Skills Used:'} picture={'/img/possible.png'}paragraph={'Was 1 of just 50 students to be nominated by faculty and accepted into the Santa Clara and Seattle U (SCU/SU) Career Accelerator powered by Possible, a career development program for tech industry \nSpent over 40 hours networking and learning best practices from industry professionals in Product Management, Marketing, Sales, Engineering, Data Analytics, HR, and Operations \nDeveloped actionable insights into the frameworks of thinking used across various functions of tech'}  title={'Possible Fellowship'}></Info>
    </div>
    );
}