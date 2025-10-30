'use client'
import { Dropdown, DropdownItem } from "flowbite-react";
import { usePathname } from "next/navigation";


export default function Navbar({text}:{text:string}){
    const pathname = usePathname()
    const firstSegment = pathname.split("/")[1] || "";
    const pageTitle = firstSegment
        .split("-") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
        .join(" "); 
    const name = "YOHANNES AFFANDY"
return(
    <div className="flex justify-center z-20 w-full top-0 fixed border-b-1 border-gray-300 h-[99px] bg-[#FFFFFF]">
        <div className="gap-4 flex justify-between items-center  mr-8  w-full">
            <p className="flex items-center ml-[319px] text-[45px]">{pageTitle}</p>
            <div className="flex items-center">
                <div className="border-l-1 border-r-1 border-gray-300 p-3">
                    <Dropdown label={<img className="h-[40px] z-80 w-[40px] hover:cursor-pointer hover:translate-1 transition duration-300" src="/img/bel.png" alt="" />} inline>
                        <DropdownItem className="text-[20px]">Notication info</DropdownItem>
                        <DropdownItem className="text-[20px]">Support</DropdownItem>
                    </Dropdown>
                    
                </div>
                <div className="border-r-1 border-gray-300 p-3 m-5">
                    <Dropdown className="text-[22px] z-800 hover:cursor-pointer hover:translate-1 transition duration-300" label={<p className="text-[22px] hover:cursor-pointer hover:translate-1 transition duration-300">{name}</p>} inline>
                        <DropdownItem className="text-[20px]">Dashboard</DropdownItem>
                        <DropdownItem className="text-[20px]">Settings</DropdownItem>
                        <DropdownItem className="text-[20px]">Earnings</DropdownItem>
                        <DropdownItem className="text-[20px]">Sign out</DropdownItem>
                    </Dropdown>
                </div>
            </div> 
        </div>
        
    </div>
)
}