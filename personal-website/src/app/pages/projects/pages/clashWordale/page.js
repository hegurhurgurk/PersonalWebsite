import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/clash.png'}paragraph={'It is a web-based trivia game about the mobile game Clash Royale.\n\n Skills: JavaScript · HTML · Cascading Style Sheets (CSS) · Game Development · Web Development'}  title={' Clash Wordale'}></Info>
    </div>
    );
}