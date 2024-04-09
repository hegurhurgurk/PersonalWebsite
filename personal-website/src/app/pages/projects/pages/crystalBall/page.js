import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/cb.png'}paragraph={'Crystal Ball is a project designed to assist businesses in understanding consumer behavior by utilizing the INRIX API. Through this platform, businesses can access valuable insights into consumer trip patterns, aiding in marketing strategy optimization and decision-making processes. The platform offers an intuitive interface for visualizing trip data on maps and comparing data between different time frames. Developed with user-friendliness in mind, Crystal Ball aims to provide practical solutions for businesses seeking to enhance their understanding of consumer trends and optimize their operations accordingly.'}  title={'Crystal Ball'}></Info>
    </div>
    );
}