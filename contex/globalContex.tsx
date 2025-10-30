"use client";

import { createContext, useContext, useState, ReactNode } from "react";


interface GlobalContextType {
  bankData: BankData[];
  setBankData: React.Dispatch<React.SetStateAction<BankData[]>>;
}
interface BankData {
    id: number;
    bank: string;
    label: string;
    icon: string;
    rating: number;
    review: number;
    user: number;
    fr: string;
    mt: number;
    ltv: string;
    jaminan: string;
    target: string;
    komisi: number;
};

const data = [
    {id:1, bank:"Mandiri", label:"Bunga Special Tengah Imlek 2023", icon:"mandiri.png", rating:3 , review:14 , user:220, fr:"3.88" ,mt:12 , ltv:"1", jaminan:" Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan, Pengusaha" , komisi:1},
    {id:2, bank:"Panin", label:"Panin KPR & KPR XTRA", icon:"panin.png", rating:2 , review:9 , user:220, fr:"9.90" ,mt:10 , ltv:"85%", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan" , komisi:1},
    {id:3, bank:"MNC", label:"MNC KPR Secondary", icon:"mnc.png", rating:4 , review:10 , user:220, fr:"12.0" ,mt:1 , ltv:"50-60%", jaminan:"Rumah, Apartemen" , target:"Karyawan" , komisi:1},
    {id:4, bank:"Commonwealth", label:"KPR Primary", icon:"common.png", rating:3 , review:14 , user:220, fr:"0" ,mt:0 , ltv:"", jaminan:"Rumah, Apartemen, Ruko, Rukan" , target:"Karyawan, Pengusaha & Profesional" , komisi:2.4},
    {id:5, bank:"Commonwealth", label:"KPR Secondary", icon:"common.png", rating:3 , review:9 , user:220, fr:"2" ,mt:0 , ltv:"", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan, Pengusaha & Profesional" , komisi:1},
    {id:6, bank:"UOB", label:"KPR Primary", icon:"uob.png", rating:0 , review:0 , user:220, fr:"3.99%" ,mt:0 , ltv:"", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan, Pengusaha & Profesional" , komisi:1},
    {id:7, bank:"UOB", label:"KPR Secondary", icon:"uob.png", rating:0 , review:0 , user:220, fr:"1" ,mt:1 , ltv:"", jaminan:"Rumah, Apartemen" , target:"Karyawan & Profesional, Pengusaha" , komisi:1},
    {id:8, bank:"OCBC NISP", label:"KPR Kendali", icon:"ocbc.png", rating:0 , review:0 , user:220, fr:"6.75" ,mt:10 , ltv:"", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan & Profesional, Pengusaha" , komisi:1},
    {id:9, bank:"CIMB Niaga", label:"KPR Primary", icon:"cimbniaga.png", rating:0 , review:0 , user:220, fr:"" ,mt:0 , ltv:"80%", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan & Profesional, Pengusaha" , komisi:1},
    {id:10, bank:"CIMB Niaga", label:"KPR Secondary", icon:"cimbniaga.png", rating:0 , review:0 , user:220, fr:"" ,mt:0 , ltv:"80%", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan & Profesional, Pengusaha" , komisi:1},
    {id:11, bank:"CIMB Niaga", label:"KPR Extra", icon:"cimbniaga.png", rating:0 , review:0 , user:220, fr:"" ,mt:0 , ltv:"80%", jaminan:"Ruko, Rukan, Rumah, Apartemen" , target:"Karyawan & Profesional, Pengusaha" , komisi:1},
]

const GlobalContext = createContext<GlobalContextType| undefined>(undefined);


export function GlobalProvider({ children }: { children: ReactNode }) {
  const [bankData, setBankData] = useState(data);

  return (
    <GlobalContext.Provider value={{ bankData, setBankData }}>
      {children}
    </GlobalContext.Provider>
  );
}


export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used inside GlobalProvider");
  return context;
}
