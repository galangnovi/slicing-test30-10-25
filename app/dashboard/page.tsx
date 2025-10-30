'use client'
import CircleChart from '@/components/circleChart';
import ApprovalChart from '@/components/dounutCart';
import NotificationTimeline from '@/components/notificationBar';
import { SquarePen } from 'lucide-react';

export default function Dashboard(){
    const startcard =[
        {icon:"contactBlue.png", label:"CONTACT", value:51},
        {icon:"fileBlue.png", label:"LOAN", value:56},
        {icon:"shopBlue.png", label:"PRODUCT", value:80},
        {icon:"bankBlue.png", label:"BANK", value:30}
    ];

    const notificationsData = [
  { timeAgo: '2 hrs', status: 'updated', mainText: 'admin_branch has updated', subText: 'Harry Handoko - Contact | MYCRM', hidden: true },
  { timeAgo: '2 hrs', status: 'application', mainText: 'admin_branch has updated', subText: 'Harry Handoko - Application | MYCRM', hidden: true },
  { timeAgo: '4 hrs', status: 'updated', mainText: 'admin_branch has updated', subText: 'Harry Handoko - Application | MYCRM', hidden: true },
  { timeAgo: '4 hrs', status: 'application', mainText: 'admin_branch has updated', subText: 'Harry Handoko - Contact | MYCRM', hidden: false },
];
    return(
        <div className="mt-[99px] ml-[310px]">
            <div className="bg-[#ffff] h-[230px] z-10 w-full shadow-2xs flex items-center p-3 right-0 top-24.8 fixed">
                <div className='rounded-full h-[150px] w-[150px] ml-80 flex justify-center items-center overflow-hidden'>
                    <img src="/img/user.png" className="h-[150px]" alt="" />
                </div>
                
                <div className="flex-col ml-[39px] h-full pt-5">
                    <h1 className="text-[#17A9E2] font-semibold text-[35px]">YOHANNES AFFANDY (JOJO)</h1>
                    <div className="flex">
                        <div className="flex-col w-[368px] border-r-1 border-[#C1C1C1]">
                            <div className="flex items-center mt-3">
                                <div className="bg-[#E2F0FF] rounded-full h-[45px] w-[45px] flex justify-center items-center">
                                    <img src="/img/dashMarket.png" className="h-[35px]" alt="" />
                                </div>
                                <p className="text-[22px] font-medium ml-[15px]">Loan Market Office Dev</p>
                            </div>
                            <div className="flex items-center mt-5">
                                <div className="bg-[#E2F0FF] rounded-full h-[45px] w-[45px] flex justify-center items-center">
                                    <p className="font-semibold text-[22px] text-[#17A9E2]">ID:</p>
                                </div>
                                <p className="text-[22px] font-medium ml-[15px]">LM9990001</p>
                            </div>
                        </div>
                        <div className="flex-col ml-15">
                            <div className="flex items-center mt-3">
                                <div className="bg-[#E2F0FF] rounded-full h-[45px] w-[45px] flex justify-center items-center">
                                    <img src="/img/dashMail.png" className="h-[35px]" alt="" />
                                </div>
                                <p className="text-[22px] font-medium ml-[15px]">it@loanmarket.co.id</p>
                            </div>
                            <div className="flex items-center mt-5">
                                <div className="bg-[#E2F0FF] rounded-full h-[45px] w-[45px] flex justify-center items-center">
                                    <img src="/img/dashPhone.png" className="h-[35px]" alt="" />
                                </div>
                                <p className="text-[22px] font-medium ml-[15px]">6281234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
            <div>
            <div>
                <div className=" h-[142px] w-[1104px] justify-between flex absolut mt-71">
                    {startcard.map((card, index)=>(
                        <div key={index} className="flex h-full pt-8 pb-8 pl-6 pr-6 bg-[#ffff] rounded-md flex gap-9 items-center justify-center hover:cursor-pointer transition-transform duration-500 hover:translate-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="h-[70px] w-[70px] bg-[#E2F0FF] rounded-full flex items-center justify-center">
                                <img src={`/img/${card.icon}`} className="h-[45px]" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-[25px] font-semibold">{card.label}</p>
                                <p className="text-[35px] font-bold text-[#17A9E2]">{card.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative w-[1103px] h-[390px] mt-13 flex items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md'>
                <div className='w-full h-full pt-10 pb-10 flex'>
                    <div className='border-r-1 border-[#C1C1C1] w-full flex flex-col justify-center items-center'>
                        <p className='text-[30px] font-semibold mb-5'>PINJAMAN DISETUJUI</p>
                        <CircleChart percentage={40} size={180} strokeWidth={20}/>
                        <p className='text-[22px] font-medium mt-5'>2/5 Pinjaman telah disetujui</p>
                    </div>
                    <div className=' w-full p-10 flex flex-col justify-center items-center'>
                        <p className='text-[30px] font-semibold mb-5'>TARGET</p>
                        <CircleChart percentage={280} size={180} strokeWidth={20}/>
                        <p className='text-[22px] font-medium mt-5'>Rp14.000.000.000,00 / Rp5.000.000.000</p>
                    </div>
                </div>
                <div className='absolute border-3 border-[#37B5E7] left-[1020px] top-[25px] rounded-md h-[50px] w-[50px] flex items-center justify-center hover:cursor-pointer'>
                    <SquarePen className='text-[#37B5E7] h-[36px] w-[36px]'/>
                </div>
            </div>
            <div className='w-[1103px]'>
                <ApprovalChart/>
            </div>
            </div>
            <div className='ml-[34px] mt-[285px]'>
                <NotificationTimeline notifications={notificationsData}/>
            </div>
        </div>
        </div>
        
    )
}