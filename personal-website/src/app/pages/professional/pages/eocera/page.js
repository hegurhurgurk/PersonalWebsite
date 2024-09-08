import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Education" name2="Projects" route1="./education" route2="./projects"></Banner>
        <Info link={'/pages/professional'} links={'Skills Used:'} picture={'/img/eos.png'}paragraph={'I was one of a 2 man team responsible for all IT tasks for a small ear care manufacturing company. I used the Oracle NetSuite ERP software and built multiple solutions for the company in that software working with all departments. I worked to transition us to a new ERP software going so far as to sit in on multiple software demonstrations. I also singlehandedly oversaw the introduction of 3D printing in the manufacturing process. '}  title={'Eosera IT Internship'}></Info>
    </div>
    );
}