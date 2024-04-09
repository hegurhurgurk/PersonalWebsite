import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Education" name2="Projects" route1="./education" route2="./projects"></Banner>
        <Info link={'/pages/professional'} links={'Skills Used:'} picture={'/img/fwmsh.png'}paragraph={'I volunteered at the Fort Worth Museum of Science and History during my time interning at Higginbotham. During my time at the museum, I worked to renovate an old webapp they had from back during the pandemic. My task was initially to go through the code and understand it so that the current staff who did not have any coding experience would be able to update and maintain the webapp. I then asked if I could work to update the layout and visuals of the webapp to make it more visually appealing. I did this while keeping the maintenance difficulty as low as possible.'}  title={'Fort Worth Museum of Science and History Volunteering'}></Info>
    </div>
    );
}