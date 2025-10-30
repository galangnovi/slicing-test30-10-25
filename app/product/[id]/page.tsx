'use client'
import { ArrowLeft } from 'lucide-react';
import { useGlobal } from "@/contex/globalContex";
import { useParams, useRouter } from "next/navigation";
import { useState } from 'react';
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import DetailPage from '@/components/pageComponents/detailPage';
import EditPage from '@/components/pageComponents/editPage';



export default function ProductId(){
    const router = useRouter()
    const params = useParams()
    const id= Number(params.id)
    const [detailPage, setDetailPage] = useState(true)

    const handleBackClick = () => {
    if (detailPage) {
        router.push('/product')
    } else {
        setDetailPage(true);
    }
  };
return(
    <div className="mt-24 mb-10">
        <div className="fixed z-4 pl-80 h-[100px] bg-white w-full flex items-center justify-between">
            <div className='flex h-full gap-[42px] items-center'>
                <button onClick={handleBackClick} className='h-[60px] w-[60px] hover:cursor-pointer hover:translate-1 transition duration-300 flex justify-center items-center rounded-full bg-[#37B5E7]'>
                    <ArrowLeft className='text-white' size={42}/>
                </button>
                <p className='text-[35px] text-[#4F5051]'>{detailPage ? "Bank Product Detail" : "Edit Product"}</p>
            </div>
            {detailPage ? 
            <div className='flex gap-[43px] mr-[78px]'>
                <button className='bg-[#005274] border border-[#C1C1C1] flex items-center py-2 px-5 w-[250px] gap-8 h-[50px] rounded-md' onClick={()=>setDetailPage(false)}>
                    <SquarePen className='text-white'/>
                    <p className='text-[20px] hover:cursor-pointer hover:translate-1 transition duration-300 font-semibold text-white'>Edit Product</p>
                </button>
                <button className='bg-[#FF0000] border hover:cursor-pointer hover:translate-1 transition duration-300 border-[#C1C1C1] flex items-center py-2 px-5 w-[250px] gap-8 h-[50px] rounded-md'>
                    <Trash2 className='text-white'/>
                    <p className='text-[20px] font-semibold text-white'>Delete Product</p>
                </button>
            </div>
            : <div></div>}
        </div>
        <div className=' ml-80 w-[1537px] pt-[160px]'>
            {detailPage ? <DetailPage id={id}/> : <EditPage id={id}/> }
        </div>
        
    </div>
)
}