'use client';
import Image from "next/image";
import {Metrophobic} from "next/font/google"
import Link from "next/link";
import { Suspense } from "react";
import React from "react";

const metro =Metrophobic({
  weight:'400',
  display:'auto',
  subsets:['latin'],
  variable:'--font-metrophobic'

})


export default function Home() {
  const [EEC, setEEC]=React.useState(0);
 const [dis, setDisplay]=React.useState("hidden")
function handleClick(){
  setEEC(EEC+1);
  if(EEC==4){
    setDisplay('inline');
    setEEC(0);
  }
}
function handleDisplay(){
  setDisplay("hidden");
}
  return (

    <Suspense fallback={<div>loading...</div>}>
   <div className="overflow-hidden overscroll-contain $metro.variable">
    <button className={"w-screen h-screen absolute left-0 top-0 z-50 "+dis}  onClick={handleDisplay}> <Image src={'/img/Choco_chip_cookie.png'} width={800} height={800} alt="Eat Me" className="absolute inset-x-1/4 bottom-1/4 "/><div className="absolute bottom-10 inset-x-0 text-5xl bg-yellow-900 py-11">Enjoy Your Cookie</div></button>
    <div className="absolute flex flex-column justify-center items-center inset-x-0 top-0 w-full h-32 text-green-500 overflow-hidden z-10 rounded-xl   bg-stone-800">
      <div className={'margin flex-column'}>
        <button className="text-5xl" onClick={handleClick}>Grant Goldman</button>
        <div className=" margin text-xl">
        Software Engineer
      </div>
      </div>
      
    </div>
    <div className="absolute top-0 left-0 w-full h-full text-center bg-stone-900 blur-xxs lg:blur-xs space-x-5 overflow-hidden overscroll-contain ">
      <div className=" flex flex-row ">
        <div className="leading-none flex flex-column animate-waterfall  w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden ">
          <div>01001001 01100110 00100000 01111001 01101111</div>
          <div>01001001 01100110 00100000 01111001 01101111</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall3    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01110101 00100000 01100001 01110010 01100101</div>
          <div>01110101 00100000 01100001 01110010 01100101</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>00100000 01110010 01100101 01100001 01100100</div>
          <div>00100000 01110010 01100101 01100001 01100100</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall4    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden" >
          <div>01101001 01101110 01100111 00100000 01110100</div>
          <div>01101001 01101110 01100111 00100000 01110100</div>
        </div>
        <div  className="leading-none flex flex-column animate-waterfall5    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01101000 01101001 01110011 00101100 00100000</div>
          <div>01101000 01101001 01110011 00101100 00100000</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall2   w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01111001 01101111 01110101 00100000 01100001</div>
          <div>01111001 01101111 01110101 00100000 01100001</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01110010 01100101 00100000 01100001 00100000</div>
          <div>01110010 01100101 00100000 01100001 00100000</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall4    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>00100000 01000010 01110101 01110100 00100000</div>
          <div>00100000 01000010 01110101 01110100 00100000</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall3    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01001001 00100000 01100001 01101101 00100000</div>
          <div>01001001 00100000 01100001 01101101 00100000</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall2    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01101000 01100101 01110010 01100101 00100000</div>
          <div>01101000 01100101 01110010 01100101 00100000</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall5    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01100110 01101111 01110010 00100000 01101001</div>
          <div>01100110 01101111 01110010 00100000 01101001</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall3    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01110100 00101110 00100000 01000011 01101100</div>
          <div>01110100 00101110 00100000 01000011 01101100</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01101001 01100011 01101011 00100000 01101101</div>
          <div>01101001 01100011 01101011 00100000 01101101</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall2    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01111001 00100000 01101110 01100001 01101101</div>
          <div>01111001 00100000 01101110 01100001 01101101</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall4    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01100101 00100000 00110101 00100000 01110100</div>
          <div>01100101 00100000 00110101 00100000 01110100</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01101001 01101101 01100101 01110011 00100000</div>
          <div>01101001 01101101 01100101 01110011 00100000</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall2   w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01100110 01101111 01110010 00100000 01100001</div>
          <div>01100110 01101111 01110010 00100000 01100001</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall5    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>00100000 01100011 01101111 01101111 01101011</div>
          <div>00100000 01100011 01101111 01101111 01101011</div>
        </div>
        <div className="leading-none flex flex-column animate-waterfall6    w-1/19 text-wrap h-full flex-wrap text-1/19 break-all  text-green-500 overflow-hidden">
          <div>01101001 01100101 00100000</div>
          <div>01101001 01100101 00100000</div>
        </div>
      </div>
    </div>
    <Image src={'/img/headshot.jpg'} width={500} height={500} alt="me" className="z-20 absolute  mx-[33vw] bottom-1/4 rounded-full"/>
    <div className="absolute z-10 bottom-0 inset-x-0 flex-row w-full flex space-x-4 h-28">
      <Link href={'./pages/professional'} className="  bg-stone-800 text-green-500 text-5xl w-b my-1 text-center align-middle place-self-center p-5 rounded-full hover:bg-stone-700">Professional</Link>
      <Link href={'./pages/projects'} className="  bg-stone-800 text-green-500 text-5xl w-b my-1 text-center align-middle place-self-center p-5 rounded-full hover:bg-stone-700">Projects</Link>
      <Link href={'./pages/education'} className="  bg-stone-800 text-green-500 text-5xl w-b my-1 text-center align-middle place-self-center p-5 rounded-full hover:bg-stone-700">Education</Link>
    </div>
   </div>
   </Suspense>
  );
}
