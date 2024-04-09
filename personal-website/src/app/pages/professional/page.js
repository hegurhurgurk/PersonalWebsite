import Topic from "@/app/topic";
import NavButton from "@/app/navButton"
import Banner from "@/app/banner";
export default function Home() {
    return (<div>
        <Banner name1="Education" name2="Projects" route1="./education" route2="./projects"></Banner>
        <div className="overflow-auto overscroll-none">
        <Topic image={'/img/placeholder.png'} title={'Eosera'} location={'Fort Worth, Texas'} start={'Jun 2024'} end={'Present'} description={'Upcoming Software Engineering Internship'} link={'./professional/pages/eocera'}></Topic>
        <Topic image={'/img/possible.png'} title={'Possible Fellowship'} location={'Remote'} start={'Feb 2024'} end={'Mar 2024'} description={'Was 1 of just 50 students to be nominated by faculty and accepted into the Santa Clara and Seattle U (SCU/SU) Career Accelerator powered by Possible, a career development program for tech industry \nSpent over 40 hours networking and learning best practices from industry professionals in Product Management, Marketing, Sales, Engineering, Data Analytics, HR, and Operations \nDeveloped actionable insights into the frameworks of thinking used across various functions of tech'} link={'./professional/pages/possible'}></Topic>
        <Topic image={'/img/fwmsh.png'} title={'Fort Worth Museum of Science and History'} location={'Fort Worth, Texas'} start={'Aug 2023'} end={'Aug 2023'} description={'I volunteered at the Fort Worth Museum of Science and History during my time interning at Higginbotham. During my time at the museum, I worked to renovate an old webapp they had from back during the pandemic. My task was initially to go through the code and understand it so that the current staff who did not have any coding experience would be able to update and maintain the webapp. I then asked if I could work to update the layout and visuals of the webapp to make it more visually appealing. I did this while keeping the maintenance difficulty as low as possible.'} link={'./professional/pages/fwmsh'}></Topic>
        <Topic image={'/img/higg.png'} title={'Higginbotham'} location={'Fort Worth, Texas'} start={'Jul 2023'} end={'Sep 2023'} description={'Aided co workers with various IT challenges across multiple departments and programs increasing productivity \nAdvised on current Cyber Policy \n Worked closely with and reported directly to COO'} link={'./professional/pages/higginbotham'}></Topic>
        
        </div>
    </div>);
}