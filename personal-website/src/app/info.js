import Link from "next/link";
import Image from "next/image";

export default function Info({link, picture, title, paragraph, links}){
    return(
        <div className="h-full">
            <div className="w-full bg-stone-500 h-12 flex">
                <Link href={link} className="bg-stone-400 text-green-500 text-4xl w-12 align-middle px-2">&#8592;</Link>
                <div className="ml-4 text-4xl self-center text-green-500">{title}</div>
            </div>
            <div className="h-full">
                <div className="h-2/4 flex m-5 space-x-8 items-center">
                    <div className="">
                    <Image src={picture}  width={400} height={300} />
                    </div>
                    <div className="w-full text-green-500 flex justify-center"><div>{paragraph}</div></div>
                </div>
                <div className="text-green-500 ml-5">
                    {links}
                </div>
            </div>
        </div>
    );

}