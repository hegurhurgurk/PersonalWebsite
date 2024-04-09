import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
        <Banner name1="Professional" name2="Projects" route1="./professional" route2="./projects"></Banner>
        <Info link={'/pages/education'} links={'High School Diploma'} picture={'/img/fwcd.png'}paragraph={'K-12 school'}  title={'Fort Worth Country Day'}></Info>
    </div>
    );
}