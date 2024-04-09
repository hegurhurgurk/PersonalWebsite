import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Education" name2="Projects" route1="./education" route2="./projects"></Banner>
        <Info link={'/pages/professional'} links={'Skills Used:'} picture={'/img/placeholder.png'}paragraph={'Upcoming Software Engineering Internship'}  title={'Eosera Internship'}></Info>
    </div>
    );
}