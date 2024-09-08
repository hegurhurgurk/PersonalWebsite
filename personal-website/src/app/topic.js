import Image from "next/image";
import Link from "next/link";
export default function Topic({image, title, location, start, end, description, link }){
    return(
        <div className="w-full flex flex-row h-32 justify-between bg-stone-800 items-center border-stone-900 border-y-2 text-green-500">
            {/* add backup image type to choose what type of backup will be displayed and check if no image given */}
            <Image src={image} width={100} height={75} className="ml-6"></Image>
            <div className="flex flex-col content-center w-48">
                <div className="text-green-500 text-wrap">{title}</div>
                <div className="text-green-500">{location}</div>
                <div className="flex flex-row">
                    <div className="text-green-500">{start} </div>
                    <div className="text-green-500"> &#8594; </div>
                    <div className="text-green-500"> {end}</div>
                </div>
                </div>
                <div className="w-1/2  text-ellipsis  text-xl line-clamp-3 text-green-500" >
                    {description}
                </div>
            <div className="flex flex-col h-full justify-center items-center bg-stone-700 w-16 text-green-500 text-5xl">
                <Link href={link} className="">&#8594; </Link>
            </div>
        </div>
    );
}