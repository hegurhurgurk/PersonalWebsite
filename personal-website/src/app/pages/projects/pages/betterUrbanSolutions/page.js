import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/bus.png'}paragraph={'Better Urban Solutions (B.U.S.) is a project aimed at addressing climate concerns by improving public transportation systems. Through data analysis, B.U.S. identifies gaps between public transport supply and demand in urban and suburban areas. By integrating data from sources like the Open Trip Map API and INRIX, the project evaluates bus stop utilization and population density around key locations such as San Francisco. This information helps optimize transit routes and identifies potential areas for new bus stops, with the goal of enhancing accessibility and promoting sustainable urban development. Developed with angular.js for the frontend and JavaScript/node.js for the backend, B.U.S. represents collaborative efforts to tackle important societal challenges.'}  title={'Better Urban Solutions (B.U.S)'}></Info>
    </div>
    );
}