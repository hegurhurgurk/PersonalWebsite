import Banner from "@/app/banner";
import Info from "@/app/info";
import Link from "next/link";
export default function Home() {
    return(
    <div className="h-screen">
         <Banner name1="Professional" name2="Education" route1="./professional" route2="./education"></Banner>
        <Info link={'/pages/projects'} links={'Links:'} picture={'/img/perspective.png'}paragraph={'A Different Perspective is a game designed to provide insight into the daily challenges faced by individuals dealing with different mental disorders and issues. With a focus on authenticity and empathy, the game comprises three levels, each immersing players in the experiences of individuals living with OCD, dyslexia, and body dysmorphia. Through gameplay, players navigate through scenarios that mirror real-life struggles, such as managing repetitive behaviors, overcoming reading difficulties, and coping with body image issues during social interactions. Developed using the Unity game engine and C# scripts, the project aims to foster greater awareness and understanding of mental health issues by offering players a firsthand perspective of these conditions.'}  title={'A Different Perspective'}></Info>
    </div>
    );
}