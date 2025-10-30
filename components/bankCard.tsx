"use client";

import { useGlobal } from "@/contex/globalContex";
import { Star, Clock, BarChart, Target, Building2, Percent } from "lucide-react";
import { useRouter } from "next/navigation";



const data = {
  logo: "/img/uob.png",
  name: "string",
  promo: "string",
  rating: 3,
  reviews: "number",
  users: "number",
  fixRate: "number",
  maxTenor: "number",
  loanToValue: "number",
  jaminan: "string",
  target: "string",
  komisi: "number",
}

export default function BankCard() {
    const {bankData} = useGlobal()
    console.log(bankData)
    const router = useRouter();

    const handleClick = (id:number) => {
    router.push(`/product/${id}`);
  };
  return (
    <div className="w-full mt-[45px] flex flex-col items-start justify-start gap-[30px]">
        {bankData.map((data)=>(
    <div key={data.id} className="flex items-center justify-start md:w-full h-[300px] bg-white border p-3 md:p-7 border-gray-200 rounded-lg shadow-sm  hover:shadow-md transition-all duration-300">
      <div className="flex flex-col items-start w-[400px] md:w-[544px] h-full mb-7">
        <div className="flex w-full justify-center">
            <img src={`/img/${data.icon}`} alt={data.bank} className="md:w-[258px] w-55 md:h-[150px] object-contain" />
        </div>
        <div className="flex w-full justify-start mt-1">
            <div className="flex flex-col md:w-[283px] h-full border-r-1 md:pr-10 items-center">
                <p className="text-[20px] font-medium text-[#707A83]">Rating:</p>
                <div className="flex mt-3 items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                        key={i}
                        height="40"
                        width="40"
                        viewBox="-2 -2 54 54" 
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <polygon
                            points="25,0 10,50 50,20 0,20 40,50"
                            fill={i < data.rating ? "#1CABE6" : "#C1C1C1"}
                            stroke={i < data.rating ? "#1CABE6" : "#C1C1C1"}
                            strokeWidth="1"
                        />
                        </svg>
                    ))}
              </div>
              <span className="text-[16px] mt-2 font-medium text-black ml-1">
                {data.review} Reviews
              </span>
            </div>
            <div className="flex flex-col md:w-full items-center">
              <p className="text-[20px] font-medium text-[#707A83]">User:</p>
              <span className="font-medium text-[20px] text-black mt-2">{data.user}</span> 
              <p className="font-medium text-[16px] text-black mt-3">Users yearly</p>
            </div>
        </div>
      </div>

       <div className="md:w-[850px] w-120 md:h-[230px] h-[300px]">
        <div className="flex">
          <h2 className="text-[35px] font-semibold text-black">
            {data.bank}{" "}
          </h2>      
          <span className="text-[#1CABE6] text-[35px] ml-2 font-semibold">{data.label}</span>
        </div>
          <div className="flex items-start mt-4">
            <div className="flex flex-col w-75">
                <div className="flex items-center h-15">
                <img src="/img/chart1.png" className="ml-1 h-[25px]" alt="" />
                    <p className="flex text-[20px] ml-5 font-medium text-[#707A83] items-center gap-2">
                    Fix Rate (Year): {data.fr}
                    </p>
                </div>
                <div className="flex items-center h-15">
                <img src="/img/clock1.png" className="mt-1 mb-1 h-[33px]" alt="" />
                    <p className="flex text-[20px] ml-4 font-medium text-[#707A83] items-center gap-2">
                    Max Tenor: {data.mt}
                    </p>
                </div>
                <div className="flex items-center h-15">
                    <img src="/img/fastClock1.png" className="-ml-1  h-[37px]" alt="" />
                    <p className="flex text-[20px] ml-4 font-medium text-[#707A83] items-center gap-2">
                    Loan to Value: {data.ltv}
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-100">
                <div className="flex items-center h-15">
                <img src="/img/sield1.png" className="ml-1 h-[32px]" alt="" />
                    <p className="flex text-[20px] ml-5 font-medium text-[#707A83] items-center leading-5">
                    Jaminan:{data.jaminan}
                    </p>
                </div>
                
                <div className="flex items-center h-15">
                <img src="/img/human1.png" className="h-[40px] ml-[2px]" alt="" />
                    <p className="flex text-[20px] ml-4 font-medium text-[#707A83] items-center leading-5">
                    Target: {data.target}
                    </p>
                </div>
                
                <div className="flex items-center h-15">
                    <img src="/img/komision1.png" className="h-[34px] ml-1 mt-1" alt="" />
                    <p className="flex text-[20px] ml-4 font-medium text-[#707A83] items-center gap-2">
                    Komisi: {data.komisi}
                    </p>
                </div>
            </div>      
          </div>
        </div>

      <button className="w-[180px] h-[60px] rounded-md hover:cursor-pointer hover:translate-1 transition duration-300 shadow-md border border-[#CCCCCC]" onClick={()=>handleClick(data.id)}>
        <p className="text-[26px] font-semibold text-[#37B5E7]">Detail</p>
      </button>
    </div>
        ))}
    </div>
    
   
  );
}
