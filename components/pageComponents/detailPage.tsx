import { useGlobal } from "@/contex/globalContex"


export default function DetailPage({id}:{id:number}){
    const {bankData} = useGlobal()
    const data = bankData.find((item) => item.id === id)
    return(
        <div className="w-full flex flex-col gap-y-[22px] py-[29px] px-[59px] bg-white rounded-xl ">
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Bank</label>
                <input type="text" defaultValue={data?.bank} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Nama Product</label>
                <input type="text" defaultValue={data?.label} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Jaminan</label>
                <input type="text" defaultValue={data?.jaminan} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Target Market</label>
                <input type="text" defaultValue={data?.target} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Komisi</label>
                <input type="text" defaultValue={data?.komisi} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Appraisal</label>
                <input type="text" defaultValue="1 %" disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Floating</label>
                <input type="text" defaultValue="1 %" disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Loan to Value</label>
                <input type="text" defaultValue={data?.ltv} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Penalty Fee</label>
                <input type="text" defaultValue="-" disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Interest Rate</label>
                <input type="text" defaultValue="3.65%" disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Fix Rate %</label>
                <input type="text" defaultValue={data?.fr} disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Fix Rate (year)</label>
                <input type="text" defaultValue="3" disabled className="w-[1200px] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">Keterangan</label>
                <textarea rows={2} defaultValue={`${data?.bank} KPR adalah kredit pemilikan rumah (KPR) bank ${data?.bank} yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak`} disabled className="w-[1200px] h-[100px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
            <div className="w-full flex justify-between items-center">
                <label htmlFor="" className="text-[22px] font-semibold text-black">URL</label>
                <input type="text" defaultValue="null" disabled className="w-[1200px] text-[#00AAE5] h-[50px] text-[20px] bg-[#EBEBEB] px-4 py-2 text-base rounded-md border border-[#C1C1C1] transition duration-150 ease-in-out" />
            </div>
        </div>
    )
}