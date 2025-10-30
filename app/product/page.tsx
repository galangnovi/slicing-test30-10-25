'use client'
import Bank from "@/components/product/bank"
import Developer from "@/components/product/developer"
import { useEffect, useState } from "react"

export default function Product(){
    const [tabActive, setTabActive] = useState("Bank")
    useEffect(() => {
        if (window.innerWidth < 473) {
          document.body.style.zoom = "35%";
        } else if (window.innerWidth < 768) {
          document.body.style.zoom = "60%";
        } else {
          document.body.style.zoom = "80%";
        }
        }, []);
    return(
        <div className="mt-[100px] md:pl-[270px] w-full mb-10">
            <div className="h-[100px] bg-white flex justify-center gap-[66px]">
                <div onClick={()=>setTabActive("Bank")} className={`flex justify-center hover:cursor-pointer w-[250px] items-center ${tabActive==="Bank" ? "border-b-6 border-[#17A9E2]" : ""}`}>
                    <p  className={` text-[30px] font-bold ${tabActive === "Bank" ? "text-[#17A9E2]" : "text-black"}`}>Bank</p>
                </div>
                <div onClick={()=>setTabActive("Developer")} className={`flex justify-center hover:cursor-pointer w-[250px] items-center ${tabActive==="Developer" ? "border-b-6 border-[#17A9E2]" : ""}`}>
                    <p  className={` text-[30px] font-bold ${tabActive === "Developer" ? "text-[#17A9E2]" : "text-black"}`}>Developer</p>
                </div>
            </div>
            {tabActive === "follow" && <Developer />}
            {tabActive === "Bank" && <Bank />}
        </div>
    )
}