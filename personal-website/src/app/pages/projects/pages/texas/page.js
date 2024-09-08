import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/texas.png'}paragraph={'Built a website for Texas Taco Week put on by The National Leadership Foundation. I built this on the side while working full time. I built it using node.js with tailwind.css. I took many meetings with the client to understand and build their vision.'}  title={'Texas Taco Week Website'}></Info>
    </div>
    );
}