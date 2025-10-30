'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar(){
    const pathname = usePathname()
    const [productOpen, setProductOpen]= useState(false)
    const [waOpen, setWaOpen] = useState(false)
    
    function handleProductOpen(){
        if(waOpen){
            setWaOpen(false)
        }
        setProductOpen(!productOpen)
    }
    
    function handleWaOpen(){
        if(productOpen){
            setProductOpen(false)
        }
        setWaOpen(!waOpen)
    }
    
    return(
        <aside className="fixed top-0 left-0 w-[270px] z-20 h-[1080px] bg-white text-white flex flex-col shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="w-full flex justify-center">
                <img className="w-[110px]" src="/img/loan-logo.png" alt="" />
            </div>
            <Link href="/dashboard" className={`text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-12 flex items-center p-3 mr-1 ml-1 ${pathname==="/dashboard" && "bg-[#17A9E2] text-white"}`}><img src="/img/home.png" className={`h-[35px] w-[35px] -mt-1 mr-2 hover:invert hover:brightness-0 ${pathname==="/dashboard" && "invert brightness-0"}`} alt=""/> Dashboard</Link>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/contact.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> Contact</Link>
            <Link href="/edit-application" className={`group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1 ${pathname==="/edit-application" && "bg-[#17A9E2] text-white"}`}><img src="/img/file.png" className={`h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2 ${pathname==="/edit-application" && "invert brightness-0"}`} alt=""/> Loan</Link>
            <div className="ml-1 mr-1 mt-[10px]">
                <button onClick={handleProductOpen} className="group flex items-center justify-between w-full p-3 hover:bg-[#17A9E2] rounded-md">
                    <div className="flex items-center">
                        <img src="/img/shop.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-1.5" alt="shop" />
                        <span className="text-[20px] text-black group-hover:cursor-pointer group-hover:text-white">Product</span>
                    </div>
                    <ChevronDown className={`text-black h-5 w-5 group-hover:invert group-hover:brightness-0 transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`}/>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${productOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col space-y-1">
                        <Link href="/product" className={`text-[20px] pl-13 p-3 rounded-md mt-[10px] ${pathname==="/product" && "bg-[#17A9E2] text-white"} text-black hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white transition-colors duration-300`}>Bank Product</Link>
                        <Link href="/#" className="text-[20px] pl-13 p-3 rounded-md mt-[10px] text-black hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white">Product</Link>
                        <Link href="/#" className="text-[20px] pl-13 p-3 rounded-md mt-[10px] text-black hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white">Category Product</Link>
                    </div>
                </div>
                
            </div>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/bank.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> Bank</Link>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/performance.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> Credit Scoring</Link>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/about.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> FAQ'S</Link>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/layer.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> Pipeline</Link>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/layer.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> Pipeline Developer</Link>
            <Link href="/#" className="group text-black text-[20px] w-[250px] h-[60px] hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white rounded-md mt-[10px] flex items-center p-3 mr-1 ml-1"><img src="/img/testing.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt=""/> Marketing Tools</Link>
            <div className="ml-1 mr-1 mt-[10px]">
                <button onClick={handleWaOpen} className="group flex items-center justify-between w-full p-3 hover:bg-[#17A9E2] rounded-md">
                    <div className="flex items-center">
                        <img src="/img/whatsapp.png" className="h-[35px] group-hover:invert group-hover:brightness-0 -mt-1 mr-2" alt="shop" />
                        <span className="text-[20px] group-hover:cursor-pointer group-hover:text-white text-black">Whatsapp</span>
                    </div>
                    <ChevronDown className={`text-black group-hover:cursor-pointer group-hover:text-white h-5 w-5 transition-transform duration-300 ${waOpen ? "rotate-180" : ""}`}/>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${waOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col space-y-1">
                        <Link href="/#" className="text-[20px] pl-13 p-3 mt-[10px] rounded-md text-black hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white">Products</Link>
                        <Link href="/#" className="text-[20px] pl-13 p-3 mt-[10px] rounded-md text-black hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white">Sales</Link>
                        <Link href="/#" className="text-[20px] pl-13 p-3 mt-[10px] rounded-md text-black hover:bg-[#17A9E2] hover:cursor-pointer hover:text-white">Refunds</Link>  
                    </div>
                </div>
            </div>
        </aside>
    )
}