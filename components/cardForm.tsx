
const datas =[
    {icon:"mandiri.png", label:"Bunga Special Tengah Imlek 2023", content:"Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."},
    {icon:"panin.png", label:"Panin KPR & KPR XTRA", content:"KPR Panin adalah fasilitas kredit yang dipergunakan untuk pembelian rumah, villa, ruko, rukan, apartemen, kavling dari perorangan, developer hingga agen properti dengan mudah dan aman. Minimal Tenor 8 Tahun"},
    {icon:"mnc.png", label:"MNC KPR Secondary", content:"null"},
    {icon:"uob.png", label:"KPR Primary", content:"null"},
    {icon:"uob.png", label:"KPR Secondary", content:"null"},
    {icon:"ocbc.png", label:"KPR Kendali", content:"null"},
    {icon:"cimbniaga.png", label:"KPR Primary", content:"null"},
    {icon:"cimbniaga.png", label:"KPR Secondary", content:"null"},
    {icon:"cimbniaga.png", label:"KPR Extra", content:""},
    {icon:"hana.png", label:"KPR Primary", content:""},
    {icon:"hana.png", label:"KPR Secondary", content:""},
    {icon:"hana.png", label:"KPR Reguler", content:""},
    {icon:"mandiri.png", label:"KPR & KPR Take Over", content:"null"},
    {icon:"mandiri.png", label:"KPR & KPR Take Over Reguler", content:""},
    {icon:"btn.png", label:"KPR / KPA Umum ( Fixed Income )", content:"null"},
    {icon:"shinhan.png", label:"KPR", content:""},
    {icon:"maybank.png", label:"KPR Primary/ Payroll/ Secondary/ Take Over + Top Up", content:"null"},
    {icon:"proline.png", label:"KPR Secondary", content:""},
    {icon:"dbs.png", label:"KPR Secondary", content:""},
    {icon:"bri.png", label:"KPR Sejahtera FLPP", content:"Dp 1%, Tenor s.d 20 Thn, Bebas Premi Asuransi, Bebas Appraisal, Bebas PPN, syarat mudah proses cepat"},
    {icon:"bri.png", label:"KPR Tapera", content:"Dp 1%, Tenor s.d 30 Thn, Provisi 0.5 %, Administrasi Rp. 350k, Bebas Appraisal, Kuota 50 k"},
    {icon:"bri.png", label:"KPR BP2BT", content:"Bebas Appraisal, Kuota 50 k"},
    {icon:"bri.png", label:"KPR Komersial", content:"Biaya Provisi : 0.5% dari plafond kredit"},
    {icon:"bri.png", label:"KPP Kawan BriMuda Reguler", content:"Dp 0%, Bebas biaya adminstrasi, Provisi 0%, Tenor s/d 20 Thn, Tanpa minimum masa kerja"},
    {icon:"btn.png", label:"KPR / KPA Umum ( Non Fixed Income )", content:""},
    {icon:"bri.png", label:"KPP Kilat", content:"Dp 0%, Biaya adminstrasi 0,1% atau 500k, Provisi 0.5%, Tenor s/d 5 Thn, No Pinalty Lunas Maju, Syarat mudah proses cepat"},
    {icon:"nobu.png", label:"Kredit Pemilikan Rumah", content:"Kredit yang diberikan kepada karyawan, pengusaha dan profesional yang mempunyai penghasilan tetap untuk tujuan kepemilikan rumah tinggal, rumah toko (ruko), rumah kantor (rukan) dan apartemen, yang memenuhi kriteria Bank."},
    {icon:"bsi.png", label:"BSI Griya Hasanah", content:"Layanan pembiayaaan kepemilikan rumah untuk ragam kebutuhan, sebagai berikut: - Pembelian Rumah baru/ Rumah second /Ruko/Rukan/Apartemen - Pembelian Kavling Siap Bangun - Pembangunan/Renovasi Rumah - Ambil alih Pembiayaan dari bank lain (Take Over)"},
    {icon:"mandiri.png", label:"KPR & KPR Take Over Angsuran Tetap 10 Thn", content:""},
    {icon:"bsi.png", label:"BSI Griya Hasanah", content:"Layanan pembiayaaan kepemilikan rumah untuk ragam kebutuhan, sebagai berikut: - Pembelian Rumah baru/ Rumah second /Ruko/Rukan/Apartemen - Pembelian Kavling Siap Bangun - Pembangunan/Renovasi Rumah - Ambil alih Pembiayaan dari bank lain (Take Over)"},
    {icon:"permata.png", label:"KPR", content:""},
    {icon:"mayapada.png", label:"Mayapada KPR", content:""},
    {icon:"bri.png", label:"KPP PNPP", content:"Dp mulai 0%, Tenor s/d 25 Thn, Bebas Biaya Provisi, Bebas Biaya Administrasi, Joint Income"},
    {icon:"bri.png", label:"KPP ASTRI", content:"Dp mulai 0%, Tenor s/d 25 Thn, Bebas Biaya Provisi, Bebas Biaya Administrasi, Joint Income"},
    {icon:"bri.png", label:"KPP Payroll / Prioritas", content:"Dp mulai 0%, Tenor s/d 20 Thn, Provisi Fee, Administrasi Fee, Syarat mudah proses cepat"},
    {icon:"danamon.png", label:"KPR Indent / Primary", content:""},
    
]

import Image from "next/image";
import { Save } from 'lucide-react';
import { useEffect } from "react";

export default function PromoCard() {
  useEffect(() => {
      if (window.innerWidth < 473) {
        document.body.style.zoom = "35%";
      } else if (window.innerWidth < 768) {
        document.body.style.zoom = "60%";
      } else {
        document.body.style.zoom = "80%";
      }
      }, []);
  return (
    <div className="w-full">
    <div className="w-full mx-auto">
      <div className="flex justify-between gap-2">
        <div className="flex items-center md:w-[1200px] h-[80px] bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Cari Nama Bank"
            className="flex-1 w-[1200px] h-[80px] text-[25px] font-medium outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
          <img src="/img/search.png" alt="" className="scale-x-[-1] h-10 w-10"/>
        </div>

        <button className="flex w-[200px] h-[80px] justify-between pr-10 items-center gap-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-gray-700 text-sm shadow-sm hover:bg-gray-50">
          <img src="/img/sort.png" alt="" className="h-[45px] w-[45px]"/>
          <p className="text-[25px] font-semibold">Sort</p>
        </button>
      </div>

      <div className="flex items-start mt-[35px] gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          id="sendToPool"
          className="mt-1 appearance-none rounded-md mr-[20px] w-[32px] h-[32px] border-2 border-[#C1C1C1] accent-blue-600 cursor-pointer"
        />
        <label htmlFor="sendToPool" className="leading-snug flex mr-[16px] items-center">
          <span className="text-black text-[22px] mt-1 font-semibold">
             Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan Market)
          </span>
        </label>
        <div className=" bg-[#17A9E2] rounded-full h-[40px] w-[40px] flex justify-center items-center"><p className="text-white text-[30px]">?</p></div>
      </div>
    </div>
        <div className="flex gap-x-9 gap-y-14 mt-[37px] flex-wrap flex justify-between">
            {datas.map((data, index)=>(
                <div key={index} className=" w-[340px] py-[50px] px-[25px] h-[480px] bg-white shadow-xl flex flex-col justify-start rounded-lg border border-gray-100">
                    <div className="flex z-2 items-start justify-between">
                        <input type="checkbox" className="-mt-8 h-[25px] w-[25px] accent-blue-500"/>
                    </div>

                    <div className="flex justify-center">
                        <Image
                        src={`/img/bankIcon/${data.icon}`} 
                        alt={data.icon}
                        width={245}
                        height={140}
                        className="object-contain -mt-5"
                        />
                    </div>
                        

                    <div className="flex gap-1 w-full -mt-4 justify-center text-[40px]">
                        {[...Array(5)].map((_, i) => {
                            const rating = 3.5;
                            const full = i + 1 <= Math.floor(rating);
                            const half = !full && i < rating;

                            return (
                            <span key={i} className="relative inline-block">
                                <span className="text-white" style={{ WebkitTextStroke: "1px #FFD700" }}>
                                ★
                                </span>

                                {(full || half) && (
                                <span
                                    className="absolute left-0 top-0 text-[#FFD700] overflow-hidden"
                                    style={{
                                    width: full ? "100%" : "50%", 
                                    WebkitTextStroke: "1px #FFD700",
                                    }}
                                >
                                    ★
                                </span>
                                )}
                            </span>
                            );
                        })}
                    </div>
                    <div className="w-full flex -mt-1 justify-center">
                        <p className="text-[16px] font-medium text-black">1.456 Reviews</p>
                    </div>
                    
                    <h3 className="text-[#1CABE6] font-semibold mt-2 text-[20px]">
                        {data.label}
                    </h3>

                    <p className="text-black text-[13px] mt-2 font-medium leading-relaxed">
                        {data.content}
                    </p>
                </div>
            ))}
        </div>
        <div className="flex w-full justify-end mt-[66px] mb-[44px]">
            <button className="w-[225px] h-[60px] hover:cursor-pointer hover:translate-1 transition duration-300 flex py-2 px-5 items-center gap-5 bg-[#005274] border rounded-md border-[#C1C1C1]">
            <Save className="h-[40px] w-[40px] text-white"/>
            <p className="text-white text-[25px]">UPDATE</p>
        </button>
      </div>
    </div>
  );
}
