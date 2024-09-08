import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Were you able to find the message in the binary?'} picture={'/img/homepage.png'}paragraph={'Built this website from scratch using Next.js alongside Tailwind.css and hosted using Vercel.'}  title={'Personal Website'}></Info>
    </div>
    );
}