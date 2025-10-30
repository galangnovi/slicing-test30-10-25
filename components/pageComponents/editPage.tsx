"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import DateRangeInput from "../date-form";
import { useGlobal } from "@/contex/globalContex";
import { Save } from "lucide-react";

export default function EditPage({id}:{id:number}) {
  const {bankData} = useGlobal()
  const data = bankData.find((item) => item.id === id)
  const [form, setForm] = useState({
    bank: data!.bank,
    product: data?.label,
    promo: false,
    startDate: "",
    endDate: "",
    jaminan: data!.jaminan,
    target: data!.target,
    komisi: data?.komisi,
    appraisal: 1,
    floating: 1,
    loanToValue: data?.ltv,
    penaltyFee: 0,
    interestRate: 3.65,
    fixRate: data?.fr,
    fixYear: 3,
    maxTenor: 12,
    keterangan:
      `${data?.bank} adalah kredit pemilikan rumah (KPR) bank ${data?.bank} yang diberikan secara perseorangan untuk membeli rumah tinggal/ apartemen/ruko/rukan, baik melalui developer atau tidak.`,
    url: "null",
  });

  const handleCounter = (key: keyof typeof form, increase: boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: Math.max(0, parseFloat(prev[key] as any) + (increase ? 0.1 : -0.1)),
    }));
  };

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-md">
      <div className="space-y-4">
        <div>
          <label className="block text-[22px] font-semibold text-black mb-1">Bank</label>
          <select
            value={form.bank}
            onChange={(e) => setForm({ ...form, bank: e.target.value })}
            className="md:w-[686px] w-full h-[50px] text-[400] border border-[#C1C1C1] rounded-md p-2"
          >
            <option value="Mandiri">Mandiri</option>
            <option value="Panin">Panin</option>
            <option value="MNC">MNC</option>
            <option value="Commonwealth">Commonwealth</option>
            <option value="UOB">UOB</option>
            <option value="OCBC NISP">OCBC NISP</option>
            <option value="CIMB Niaga">CIMB Niaga</option>
          </select>
        </div>

        <div>
          <label className="block text-[22px] font-semibold text-black mb-1">Jenis Product</label>
          <select
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            className="md:w-[686px] w-full h-[50px] text-[400] border border-[#C1C1C1] rounded-md p-2"
          >
            <option value="Bunga Special Tengah Imlek 2023">Bunga Special Tengah Imlek 2023</option>
            <option value="Panin KPR & KPR XTRA">Panin KPR & KPR XTRA</option>
            <option value="MNC KPR Secondary">MNC KPR Secondary</option>
            <option value="KPR Primary">KPR Primary</option>
            <option value="KPR Secondary">KPR Secondary</option>
            <option value="KPR Primary">KPR Primary</option>
            <option value="KPR Secondary">KPR Secondary</option>
            <option value="KPR Kendali">KPR Kendali</option>
            <option value="KPR Primary">KPR Primary</option>
            <option value="KPR Secondary">KPR Secondary</option>
            <option value="KPR Extra">KPR Extra</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.promo}
            onChange={() => setForm({ ...form, promo: !form.promo })}
            className="w-[27px] h-[27px]"
          />
          <label className="text-[22px] font-semibold text-black">Promotional Product</label>
        </div>
        <DateRangeInput/>

        <div>
          <label className="block text-[22px] font-semibold text-black mb-3 mt-6">Jaminan</label>
          <div className="grid grid-cols-2 gap-2">
            {["Ruko", "Rumah", "Rukan", "Apartemen", "Kendaraan Pribadi", "Sertifikat Perusahaan", "Slip Gaji"].map(
              (item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={form.jaminan.includes(item)}
                    className="w-[27px] h-[27px]"
                  />
                  <span className="text-[22px]">{item}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div>
          <label className="block text-[22px] font-semibold text-black mb-3 mt-6">Target Market</label>
          <div className="grid grid-cols-2 gap-2">
            {["Pengusaha", "Karyawan", "Profesional", "Milenial", "ASN", "POLRI", "TNI", "Lainnya"].map(
              (item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={form.target.includes(item)}
                    className="w-[27px] h-[27px]"
                  />
                  <span className="text-[22px]">{item}</span>
                </label>
              )
            )}
          </div>
        </div>

        {["komisi", "appraisal", "floating"].map((key) => (
          <div key={key} className="md:w-[686px] w-full mt-6">
            <label className="block text-[22px] font-semibold text-black mb-1 capitalize">
              {key}
            </label>
            <div className="flex items-center">
              <button
                onClick={() => handleCounter(key as any, false)}
                className="p-2 h-[50px] w-[50px] flex justify-center border border-[#C1C1C1] -mr-1 z-1 items-center bg-[#1CA4E9] text-white"
              >
                <FaMinus />
              </button>
              <div className="flex-1 text-center h-[50px] border-[#C1C1C1] border py-2">
                {form[key as keyof typeof form]}%
              </div>
              <button
                onClick={() => handleCounter(key as any, true)}
                className="p-2 h-[50px] w-[50px] flex justify-center border border-[#C1C1C1] -ml-1 items-center bg-[#1CA4E9] text-white"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Kanan */}
      <div className="space-y-4">
        {[
          { key: "loanToValue", label: "Loan to Value" },
          { key: "penaltyFee", label: "Penalty Fee" },
          { key: "interestRate", label: "Interest Rate" },
          { key: "fixRate", label: "Fix Rate" },
          { key: "fixYear", label: "Fix Rate (Year)" },
          { key: "maxTenor", label: "Max Tenor (Year)" },
        ].map(({ key, label }) => (
          <div key={key}>
            <label className="block text-[22px] font-semibold text-black mb-1">{label}</label>
            <div className="flex items-center">
              <button
                onClick={() => handleCounter(key as any, false)}
                className="p-2 h-[50px] w-[50px] flex justify-center border border-[#C1C1C1] -mr-1 z-1 items-center bg-[#1CA4E9] text-white"
              >
                <FaMinus />
              </button>
              <div className="flex-1 text-center h-[50px] border border-[#C1C1C1] py-2">
                {form[key as keyof typeof form]}%
              </div>
              <button
                onClick={() => handleCounter(key as any, true)}
                className="p-2 h-[50px] w-[50px] flex justify-center border border-[#C1C1C1]  -ml-1 z-1 items-center bg-[#1CA4E9] text-white"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        ))}

        {/* Keterangan */}
        <div>
          <label className="block text-[22px] font-semibold text-black mb-1">Keterangan</label>
          <textarea
            value={form.keterangan}
            onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
            className="w-full border rounded-md p-2 h-[150] w-[686px] text-[20px] border-[#C1C1C1]"
            rows={3}
          />
        </div>

        {/* URL */}
        <div>
          <label className="block text-[22px] font-semibold text-black mb-1">URL</label>
          <input
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            className="w-full border rounded-md p-2 w-[680px] h-[50px] text-[20px] border-[#C1C1C1]"
          />
        </div>

        {/* Tombol Update */}
        <div className="flex w-full h-[230px] justify-end items-end">
          <button className="w-[225px] h-[60px] flex py-2 px-5 items-center gap-5 bg-[#005274] border rounded-md border-[#C1C1C1]">
            <Save className="h-[40px] w-[40px] text-white"/>
            <p className="text-white text-[25px]">UPDATE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

