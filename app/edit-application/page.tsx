'use client'
import ProgressBar from "@/components/pageComponents/progress-bar";
import { useState } from "react";
import { ArrowLeft } from 'lucide-react';
import PromoCard from "@/components/cardForm";
import Uploaddocs from "@/components/upload";
import AddressForm from "@/components/addressForm";

export default function EditApplication(){
    const [page, setPage] = useState(2)
    function handleBackClick(){
        if (page===2){

        } else if (page===4){
            setPage(2)
        } else {
            setPage(4)
        }
    }
    function handleMoveClick(){
        if (page===7){

        } else if (page===4){
            setPage(7)
        } else {
            setPage(4)
        }
    }
    return(
        <div className="mt-25">
            <div className="h-[150px] pl-80 bg-white w-full flex justify-center items-center">
                <ProgressBar currentStep={page}/>
            </div>
            <div className="ml-68 pl-12 mr-20">
                <div className="flex w-full justify-between items-center h-[145px]">
                    <button onClick={handleBackClick} className='h-[60px] w-[60px] hover:cursor-pointer hover:translate-1 transition duration-300 flex justify-center items-center rounded-full bg-[#37B5E7]'>
                        <ArrowLeft className='text-white' size={42}/>
                    </button>
                    {page===7 ? <div className="flex flex-col items-center"><h1 className="text-[40px] font-semibold">Pilihan Produk & Bank</h1> <p className="text-[25px] font-semibold text-[#646567]">Silahkan pilih produk bank yang sesuai</p></div>
                    : page===4 ? <div className="flex flex-col items-center"><h1 className="text-[40px] font-semibold">Upload Dokumen</h1> <p className="text-[25px] font-semibold text-[#646567]">Silahkan upload dokumen yang dibutuhkan</p></div>:<div><h1 className="text-[40px] font-semibold">Alamat</h1></div>}
                    <button onClick={handleMoveClick} className='h-[60px] w-[60px] hover:cursor-pointer hover:translate-1 transition duration-300 rotate-180 flex justify-center items-center rounded-full bg-[#37B5E7]'>
                        <ArrowLeft className='text-white' size={42}/>
                    </button>
                </div>
                <div className="w-[1537px] p-[30px] flex flex-col justify-center items-center bg-white rounded-xl mb-20">
                    {page===7 ? <PromoCard/> : page===4 ? <Uploaddocs setPage={setPage}/> : <AddressForm setPage={setPage} />}
                </div>
                
            </div>
             
            
        </div>
    )
}