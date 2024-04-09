import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Education" name2="Projects" route1="./education" route2="./projects"></Banner>
        <Info link={'/pages/professional'} links={'Skills Used:'} picture={'/img/higg.png'}paragraph={'Aided co workers with various IT challenges across multiple departments and programs increasing productivity \nAdvised on current Cyber Policy \n Worked closely with and reported directly to COO'}  title={'Higginbotham Internship'}></Info>
    </div>
    );
}