import Link from "next/link";

export default function NavButton({name, link}) {
    return (
    <Link href={link} className="w-xl bg-stone-800 h-16 w-48 rounded-full text-center text-xl text-green-500 justify-center items-center flex flex-col"><div className="m-auto " >{name}</div></Link>
    
    );

}