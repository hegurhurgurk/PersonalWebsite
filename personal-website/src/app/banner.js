import NavButton from "@/app/navButton"
export default function Banner({name1, name2, route1, route2}){
    return(
        <div className="w-full bg-stone-600 flex-row flex justify-between h-1/6 absolute top-0 left-0 content-center items-center">
            <div className="text-green-500 text-5xl ml-10">Grant Goldman</div>
            
            <div className=" flex-row flex space-x-10 mr-10"> 
                <NavButton name="Home" link="../"></NavButton>
                <NavButton name={name1} link={route1} ></NavButton>
                <NavButton name={name2} link={route2} ></NavButton>
            </div>
        </div>
    );
}