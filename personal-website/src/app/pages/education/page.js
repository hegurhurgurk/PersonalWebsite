import Topic from "@/app/topic";
import NavButton from "@/app/navButton"
import Banner from "@/app/banner";
export default function Home() {
    return (
    <div>
        
        <Banner name1="Professional" name2="Projects" route1="./professional" route2="./projects"></Banner>
        <div className="overflow-auto overscroll-none">
        <Topic image={'/img/scu.png'} title={'Santa Clara University'} location={'Santa Clara, California'} start={'Sep 2021'} end={'Jun 2025'} description={'Bachelors of Engineering. Computer Science and Engineering Major, Electrical and Computer Engineering Minor'} link={'./education/pages/SCU'}></Topic>
        <Topic image={'/img/fwcd.png'} title={'Fort Worth Country Day'} location={'Fort Worth, Texas'} start={'Sep 2021'} end={'Jun 2025'} description={'Bachelors of Engineering. Computer Science and Engineering Major, Electrical and Computer Engineering Minor'} link={'./education/pages/FWCD'}></Topic>
       </div>
    </div>
    
    );
}