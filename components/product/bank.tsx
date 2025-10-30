import { Dropdown, DropdownItem } from "flowbite-react";
import { ChevronDown } from "lucide-react";
import { Plus } from 'lucide-react';
import BankCard from "../bankCard";

export default function Bank(){
    const mainBars =[
        {icon:"kpr.png", label:"KPR dan Multiguna", style:""},
        {icon:"refinancing.png", label:"Refinancing", style:""},
        {icon:"kredit.png", label:"Kredit Modal Usaha dan Investasi", style:""},
        {icon:"deposito.png", label:"Deposito", style:""},
        {icon:"takeOver.png", label:"Take Over dan Bridging Loan", style:""},
    ]
    return(
        <div className="mt-10 ml-12">
            <div className="flex gap-10">
                {mainBars.map((main, index)=>(
                    <div key={index} className="w-[275px] h-[180px] rounded-xl border-[1px] border-[#C1C1C1] gap-3 bg-white flex flex-col justify-center items-center pb-[15px] pt-[15px] pl-[33px] pr-[33px]">
                        <img src={`/img/${main.icon}`} className={`${main.style}`} alt="" />
                        <p className="text-center text-[22px] text-[#999999] font-medium">{main.label}</p>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex gap-[55px] mt-10">
                    <div className="relative w-[500px] h-[80px]">
                        <span className="absolute inset-y-0 right-12 flex items-center">
                            <img src="/img/search.png" alt="Search" className="w-[40px] scale-x-[-1] h-[40px] opacity-70" />
                        </span>
                        <input
                            type="text"
                            placeholder="Cari Berdasarkan Nama"
                            className=" w-full h-full text-[25px] font-medium pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17A9E2]"
                        />
                    </div>
                    <Dropdown
                        dismissOnClick={false}
                        renderTrigger={() => (
                            <button className="flex items-center justify-between w-[350px] h-20 bg-white text-black border border-[#C1C1C1] rounded-xl text-[25px] px-[34px] py-[25px]">
                            <span className="font-medium">Kredit Pemilikan...</span>
                            <ChevronDown className="w-10 h-10 text-[#000000]" />
                            </button>
                        )}
                        className="rounded-xl"
                        >
                        <DropdownItem>.....</DropdownItem>
                        <DropdownItem>.....</DropdownItem>
                        <DropdownItem>.....</DropdownItem>
                        <DropdownItem>.....</DropdownItem>
                    </Dropdown>
                    <div className="bg-white rounded-xl h-20 w-[200px] flex items-center justify-between p-[25px] border border-[#C1C1C1]">
                        <img src="/img/sort.png" alt="" className="h-[45px] w-[45px]"/>
                        <p className="text-[25px] font-semibold">Sort</p>
                    </div>
                    <button className="bg-[#17A9E2] w-[320px] h-20 rounded-xl flex items-center py-[19px] px-[17px] border border-[#C1C1C1]">
                        <Plus className="w-[40px] h-[40px] text-white mr-7"/>
                        <span className="text-white text-[25px] font-semibold ">Tambah Product</span>
                    </button>
                </div>
            </div>
            <div className="w-[1535px]">
                <BankCard/>
            </div>    
        </div>
    )
}