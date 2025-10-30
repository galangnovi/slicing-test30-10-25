"use client";
import { useState } from "react";
import { Save, Upload } from 'lucide-react';
import { Triangle } from 'lucide-react';

export default function Uploaddocs({setPage}:{setPage:(value:number)=>void}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);

  const fileItems = [
    { label: "Fotokopi KTP Pemohon", name: "ktpPemohon", content:"--Upload Fotokopi KTP Pemohon--" },
    { label: "Fotokopi KTP Suami / Istri", name: "ktpPasangan", content:"--Upload Fotokopi KTP Suami / Istri--" },
    { label: "Fotokopi Kartu Keluarga", name: "kartuKeluarga", content:"--Upload Fotokopi Kartu Keluarga--" },
    { label: "Fotokopi Akte Nikah/Cerai", name: "akteNikah", content:"--Upload Fotokopi Akte Nikah/Cerai--" },
    { label: "Fotokopi NPWP Pemohon", name: "npwp", content:"--Upload Fotokopi NPWP Pemohon--" },
    {label:"Akta Pisah Harta Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)",name: "aktaPisah", content:"--Upload Akta Pisah Harga Notaril--"},
  ];

  const fileItems2 = [
    { label: "Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir", name: "dokumenpemohon", content:"--Upload Fotokopi Dokumen Jaminan--" },
    { label: "Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan", name: "spb", content:"--Upload PDF Surat Pengajuan Bank--" },
    { label: "Fotokopi Perjanjian Kredit (Jika Over Kredit)", name: "fpk", content:"--Upload Fotokopi Perjanjian Kredit--" },
    { label: "Dokumen PPJB (Jika Developer)", name: "ppjb", content:"--Upload Dokumen PPJB--" },
  ];

  const fileItems3 = [
    { label: "Fotokopi SPT / PPh21", name: "spt", content:"--Upload Fotokopi SPT / PPh21--" },
    { label: "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir", name: "slipgaji", content:"--Upload Asli Slip Gaji 1 Bulan Terakhir--" },
    { label: "Fotokopi R/K atau tabungan 6 bulan terakhir", name: "tabungan", content:"--Upload Fotokopi R/K 6 Bulan Terakhir--" },
    { label: "Surat Keterangan / Rekomendasi Perusahaan", name: "rekomendasiperusahaan", content:"--Upload Surat Keterangan Perusahaan--" },
  ];

  const fileItems4 = [
    { label: "File Kekurangan 1", name: "file1", content:"--Upload File Kekurangan 1--" },
    { label: "File Kekurangan 2", name: "file2", content:"--Upload File Kekurangan 2--" },
  ];

  return (
    <div>
        <div className="border py-[20px] px-[30px] border-[#C1C1C1] shadow-sm bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#005274] text-white mx-[-30px] my-[-20px] font-semibold flex items-center justify-between w-[1450px] h-[80px]"
            >
                <div className="flex items-center space-x-2 py-[20px] px-[30px]">
                {isOpen ? <Triangle className="rotate-180 h-[18px] w-[18px]"  fill="#ffffff"/> : <Triangle className="h-[20px] w-[20px]"  fill="#ffffff"/>}
                <span className="text-[30px] ml-[20px] text-white font-semibold">Data Pribadi</span>
                </div>
            </button>

            {isOpen && (
                <div className=" mt-11 space-y-3">
                {fileItems.map((item) => (
                    <div
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between pb-2 last:border-b-0"
                    >
                    <label className="text-[22px] font-semibold text-[22px] text-[#2D3B57] w-full">
                        {item.label}
                    </label>

                    <div className="relative mt-2 md:mt-0 w-[500px] pl-[24px] pr-[34px] flex-shrink-0 h-[50px] flex items-center">
                        <input
                        type="file"
                        id={item.name}
                        className="hidden"
                        placeholder={item.content}
                        />
                        <label
                        htmlFor={item.name}
                        className="flex items-center justify-between border rounded-md px-3 py-2 w-full text-sm cursor-pointer hover:bg-gray-50"
                        >             
                            <p className="text-[20px] text-[#646567]">{item.content}</p>
                            <Upload className="text-gray-500 absolute left-104" />
                        </label>
                    </div>
                    </div>
                ))}
                </div>
            )}
        </div>
        <div className="border mt-[32px] py-[20px] px-[30px] border-[#C1C1C1] shadow-sm bg-white">
            <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="bg-[#005274] text-white mx-[-30px] my-[-20px] font-semibold flex items-center justify-between w-[1450px] h-[80px]"
            >
                <div className="flex items-center space-x-2 py-[20px] px-[30px]">
                {isOpen2 ? <Triangle className="rotate-180 h-[18px] w-[18px]"  fill="#ffffff"/> : <Triangle className="h-[20px] w-[20px]"  fill="#ffffff"/>}
                <span className="text-[30px] ml-[20px] text-white font-semibold">Data Jaminan</span>
                </div>
            </button>

            {isOpen2 && (
                <div className=" mt-11 space-y-3">
                {fileItems2.map((item) => (
                    <div
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between pb-2 last:border-b-0"
                    >
                    <label className="text-[22px] font-semibold text-[22px] text-[#2D3B57] w-full">
                        {item.label}
                    </label>

                    <div className="relative mt-2 md:mt-0 w-[500px] pl-[24px] pr-[34px] flex-shrink-0 h-[50px] flex items-center">
                        <input
                        type="file"
                        id={item.name}
                        className="hidden"
                        placeholder={item.content}
                        />
                        <label
                        htmlFor={item.name}
                        className="flex items-center justify-between border rounded-md px-3 py-2 w-full text-sm cursor-pointer hover:bg-gray-50"
                        >             
                            <p className="text-[20px] text-[#646567]">{item.content}</p>
                            <Upload className="text-gray-500 absolute left-104" />
                        </label>
                    </div>
                    </div>
                ))}
                </div>
            )}
        </div>
        <div className="border mt-[32px] py-[20px] px-[30px] border-[#C1C1C1] shadow-sm bg-white">
            <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="bg-[#005274] text-white mx-[-30px] my-[-20px] font-semibold flex items-center justify-between w-[1450px] h-[80px]"
            >
                <div className="flex items-center space-x-2 py-[20px] px-[30px]">
                {isOpen3 ? <Triangle className="rotate-180 h-[18px] w-[18px]"  fill="#ffffff"/> : <Triangle className="h-[20px] w-[20px]"  fill="#ffffff"/>}
                <span className="text-[30px] ml-[20px] text-white font-semibold">Data Tambahan</span>
                </div>
            </button>

            {isOpen3 && (
                <div className=" mt-11 space-y-3">
                {fileItems3.map((item) => (
                    <div
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between pb-2 last:border-b-0"
                    >
                    <label className="text-[22px] font-semibold text-[22px] text-[#2D3B57] w-full">
                        {item.label}
                    </label>

                    <div className="relative mt-2 md:mt-0 w-[500px] pl-[24px] pr-[34px] flex-shrink-0 h-[50px] flex items-center">
                        <input
                        type="file"
                        id={item.name}
                        className="hidden"
                        placeholder={item.content}
                        />
                        <label
                        htmlFor={item.name}
                        className="flex items-center justify-between border rounded-md px-3 py-2 w-full text-sm cursor-pointer hover:bg-gray-50"
                        >             
                            <p className="text-[20px] text-[#646567]">{item.content}</p>
                            <Upload className="text-gray-500 absolute left-104" />
                        </label>
                    </div>
                    </div>
                ))}
                </div>
            )}
        </div>
        <div className="border mt-[32px] py-[20px] px-[30px] border-[#C1C1C1] shadow-sm bg-white">
            <button
                onClick={() => setIsOpen4(!isOpen4)}
                className="bg-[#005274] text-white mx-[-30px] my-[-20px] font-semibold flex items-center justify-between w-[1450px] h-[80px]"
            >
                <div className="flex items-center space-x-2 py-[20px] px-[30px]">
                {isOpen4 ? <Triangle className="rotate-180 h-[18px] w-[18px]"  fill="#ffffff"/> : <Triangle className="h-[20px] w-[20px]"  fill="#ffffff"/>}
                <span className="text-[30px] ml-[20px] text-white font-semibold">Data Pribadi</span>
                </div>
            </button>

            {isOpen4 && (
                <div className=" mt-11 space-y-3">
                {fileItems4.map((item) => (
                    <div
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between pb-2 last:border-b-0"
                    >
                    <label className="text-[22px] font-semibold text-[22px] text-[#2D3B57] w-full">
                        {item.label}
                    </label>

                    <div className="relative mt-2 md:mt-0 w-[500px] pl-[24px] pr-[34px] flex-shrink-0 h-[50px] flex items-center">
                        <input
                        type="file"
                        id={item.name}
                        className="hidden"
                        placeholder={item.content}
                        />
                        <label
                        htmlFor={item.name}
                        className="flex items-center justify-between border rounded-md px-3 py-2 w-full text-sm cursor-pointer hover:bg-gray-50"
                        >             
                            <p className="text-[20px] text-[#646567]">{item.content}</p>
                            <Upload className="text-gray-500 absolute left-104" />
                        </label>
                    </div>
                    </div>
                ))}
                </div>
            )}
        </div>
        <div className="mt-[35px] mb-[29px] flex justify-end">
            <button onClick={()=>setPage(7)} className="w-[225px] h-[60px] flex py-2 px-5 items-center gap-5 bg-[#005274] border rounded-md border-[#C1C1C1]">
                <Save className="h-[40px] w-[40px] text-white"/>
            <p className="text-white text-[25px]">UPDATE</p>
            </button>
        </div>
    </div>
    
  );
}
