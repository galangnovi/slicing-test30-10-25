'use client'
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Save } from 'lucide-react';

export default function AddressForm({setPage}:{setPage:(value:number)=>void}){
    const [formData, setFormData] = useState({
    alamat: "",
    kodePos: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    domisiliSesuaiKTP: false,
  });

  const [formData2, setFormData2] = useState({
    alamat: "",
    kodePos: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    domisiliSesuaiKTP: false,
  });

  const [formData3, setFormData3] = useState({
    alamat: "",
    kodePos: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    domisiliSesuaiKTP: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked =
    e.target instanceof HTMLInputElement && e.target.type === "checkbox"
      ? e.target.checked
      : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked =
    e.target instanceof HTMLInputElement && e.target.type === "checkbox"
      ? e.target.checked
      : undefined;

    setFormData2((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked =
    e.target instanceof HTMLInputElement && e.target.type === "checkbox"
      ? e.target.checked
      : undefined;

    setFormData3((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClear = () => {
    setFormData({
      alamat: "",
      kodePos: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      domisiliSesuaiKTP: false,
    });
  };

  const handleClear2 = () => {
    setFormData2({
      alamat: "",
      kodePos: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      domisiliSesuaiKTP: false,
    });
  };
  useEffect(() => {
      if (window.innerWidth < 473) {
        document.body.style.zoom = "35%";
      } else if (window.innerWidth < 768) {
        document.body.style.zoom = "60%";
      } else {
        document.body.style.zoom = "80%";
      }
      }, []);

    return(
        <div>
            <div className="border w-[1450px] border-[#C1C1C1] h-[455px] shadow-sm bg-white">
                <div className="bg-[#005274] w-full h-[80px] flex items-center px-[37px] py-2 ">
                    <p className="text-white text-[30px] font-semibold">Data KTP</p>
                </div>
                <div className=" py-[32px] grid grid-cols-1 px-[37px] md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[22px] font-semibold text-black">
                            Alamat Lengkap (Jalan, Komplek, RT/RW)
                        </label>
                        <input
                            type="text"
                            name="alamat"
                            value={formData.alamat}
                            onChange={handleChange}
                            placeholder="--Isi Alamat Lengkap--"
                            className="mt-1 py-2 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md px-3 py-2 "
                        />
                    </div>

                    <div>
                        <label className="block text-[22px] font-semibold text-black">
                            Kode POS
                        </label>
                        <input
                            type="text"
                            name="kodePos"
                            value={formData.kodePos}
                            onChange={handleChange}
                            placeholder="--Isi Kode POS--"
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md px-3 py-2 "
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Provinsi
                        </label>
                            <select
                            name="provinsi"
                            value={formData.provinsi}
                            onChange={handleChange}
                            className= "mt-1 pl-3 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md appearance-none"
                        >
                            <option>--Pilih Provinsi--</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            <option value="DKI Jakarta">DKI Jakarta</option>
                            <option value="Jawa Timur">Jawa Timur</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kabupaten / Kota
                        </label>
                        <select
                            name="kota"
                            value={formData.kota}
                            onChange={handleChange}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kota--</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta Selatan">Jakarta Selatan</option>
                            <option value="Surabaya">Surabaya</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kecamatan
                        </label>
                        <select
                            name="kecamatan"
                            value={formData.kecamatan}
                            onChange={handleChange}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kecamatan--</option>
                            <option value="Cidadap">Cidadap</option>
                            <option value="Tebet">Tebet</option>
                            <option value="Wonokromo">Wonokromo</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kelurahan
                        </label>
                        <select
                            name="kelurahan"
                            value={formData.kelurahan}
                            onChange={handleChange}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kelurahan--</option>
                            <option value="Hegarmanah">Hegarmanah</option>
                            <option value="Manggarai">Manggarai</option>
                            <option value="Darmo">Darmo</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>
                </div>     
            </div>
            <div className="flex items-center mt-[29px] justify-between">
                <label className="flex   gap-[23px]">
                <input
                    type="checkbox"
                    name="domisiliSesuaiKTP"
                    checked={formData.domisiliSesuaiKTP}
                    onChange={handleChange}
                    className="h-[32px] w-[32px] border-2 border-[#C1C1C1] appearance-none rounded-md"
                />
                <span className="text-[22px] font-semibold text-black">Domisili Sesuai KTP</span>
                </label>
                <button
                onClick={handleClear}
                className="bg-[#FF0000] hover:cursor-pointer hover:translate-1 transition duration-300 px-4 py-2 w-[120px] h-[50px] rounded border border-[#CCCCCC]"
                >
                <p className="text-[22px] font-semibold text-white">CLEAR</p>
                </button>
        </div>
        <div className="border mt-[31px] w-[1450px] border-[#C1C1C1] h-[455px] shadow-sm bg-white">
                <div className="bg-[#005274] w-full h-[80px] flex items-center px-[37px] py-2 ">
                    <p className="text-white text-[30px] font-semibold">Data Domisili</p>
                </div>
                <div className=" py-[32px] grid grid-cols-1 px-[37px] md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[22px] font-semibold text-black">
                            Alamat Lengkap (Jalan, Komplek, RT/RW)
                        </label>
                        <input
                            type="text"
                            name="alamat"
                            value={formData2.alamat}
                            onChange={handleChange2}
                            placeholder="--Isi Alamat Lengkap--"
                            className="mt-1 py-2 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md px-3 py-2 "
                        />
                    </div>

                    <div>
                        <label className="block text-[22px] font-semibold text-black">
                            Kode POS
                        </label>
                        <input
                            type="text"
                            name="kodePos"
                            value={formData2.kodePos}
                            onChange={handleChange2}
                            placeholder="--Isi Kode POS--"
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md px-3 py-2 "
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Provinsi
                        </label>
                            <select
                            name="provinsi"
                            value={formData2.provinsi}
                            onChange={handleChange2}
                            className= "mt-1 pl-3 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md appearance-none"
                        >
                            <option>--Pilih Provinsi--</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            <option value="DKI Jakarta">DKI Jakarta</option>
                            <option value="Jawa Timur">Jawa Timur</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kabupaten / Kota
                        </label>
                        <select
                            name="kota"
                            value={formData2.kota}
                            onChange={handleChange2}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kota--</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta Selatan">Jakarta Selatan</option>
                            <option value="Surabaya">Surabaya</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kecamatan
                        </label>
                        <select
                            name="kecamatan"
                            value={formData2.kecamatan}
                            onChange={handleChange2}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kecamatan--</option>
                            <option value="Cidadap">Cidadap</option>
                            <option value="Tebet">Tebet</option>
                            <option value="Wonokromo">Wonokromo</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kelurahan
                        </label>
                        <select
                            name="kelurahan"
                            value={formData2.kelurahan}
                            onChange={handleChange2}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kelurahan--</option>
                            <option value="Hegarmanah">Hegarmanah</option>
                            <option value="Manggarai">Manggarai</option>
                            <option value="Darmo">Darmo</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>
                </div>     
            </div>
            <div className="flex items-center mt-[29px] justify-between">
                <label className="flex   gap-[23px]">
                <input
                    type="checkbox"
                    name="domisiliSesuaiKTP"
                    checked={formData2.domisiliSesuaiKTP}
                    onChange={handleChange2}
                    className="h-[32px] w-[32px] border-2 border-[#C1C1C1] appearance-none rounded-md"
                />
                <span className="text-[22px] font-semibold text-black">Alamat tempat Bekerja / perusahaan Sesuai KTP</span>
                </label>
                <button
                onClick={handleClear2}
                className="bg-[#FF0000] hover:cursor-pointer hover:translate-1 transition duration-300 px-4 py-2 w-[120px] h-[50px] rounded border border-[#CCCCCC]"
                >
                <p className="text-[22px] font-semibold text-white">CLEAR</p>
                </button>
        </div>
        <div className="border mt-[31px] w-[1450px] border-[#C1C1C1] h-[455px] shadow-sm bg-white">
                <div className="bg-[#005274] w-full h-[80px] flex items-center px-[37px] py-2 ">
                    <p className="text-white text-[30px] font-semibold">Data Alamat Tempat Bekerja</p>
                </div>
                <div className=" py-[32px] grid grid-cols-1 px-[37px] md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[22px] font-semibold text-black">
                            Alamat Lengkap (Jalan, Komplek, RT/RW)
                        </label>
                        <input
                            type="text"
                            name="alamat"
                            value={formData3.alamat}
                            onChange={handleChange3}
                            placeholder="--Isi Alamat Lengkap--"
                            className="mt-1 py-2 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md px-3 py-2 "
                        />
                    </div>

                    <div>
                        <label className="block text-[22px] font-semibold text-black">
                            Kode POS
                        </label>
                        <input
                            type="text"
                            name="kodePos"
                            value={formData3.kodePos}
                            onChange={handleChange3}
                            placeholder="--Isi Kode POS--"
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md px-3 py-2 "
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Provinsi
                        </label>
                            <select
                            name="provinsi"
                            value={formData3.provinsi}
                            onChange={handleChange3}
                            className= "mt-1 pl-3 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md appearance-none"
                        >
                            <option>--Pilih Provinsi--</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            <option value="DKI Jakarta">DKI Jakarta</option>
                            <option value="Jawa Timur">Jawa Timur</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kabupaten / Kota
                        </label>
                        <select
                            name="kota"
                            value={formData3.kota}
                            onChange={handleChange3}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kota--</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta Selatan">Jakarta Selatan</option>
                            <option value="Surabaya">Surabaya</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kecamatan
                        </label>
                        <select
                            name="kecamatan"
                            value={formData3.kecamatan}
                            onChange={handleChange3}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kecamatan--</option>
                            <option value="Cidadap">Cidadap</option>
                            <option value="Tebet">Tebet</option>
                            <option value="Wonokromo">Wonokromo</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="block text-[22px] font-semibold text-black">
                            Kelurahan
                        </label>
                        <select
                            name="kelurahan"
                            value={formData3.kelurahan}
                            onChange={handleChange3}
                            className="mt-1 w-[650px] h-[50px] text-[20px] text-[#646567] border-[#C1C1C1] border rounded-md pl-3 appearance-none"
                        >
                            <option>--Pilih Kelurahan--</option>
                            <option value="Hegarmanah">Hegarmanah</option>
                            <option value="Manggarai">Manggarai</option>
                            <option value="Darmo">Darmo</option>
                        </select>
                        <ChevronDown
                            size={30}
                            className="absolute right-20 top-1/5 translate-y-7 text-gray-500 pointer-events-none"
                        />
                    </div>
                </div>     
            </div>
            <div className="flex items-center mt-[29px] justify-end">
                
                <button onClick={()=>setPage(4)} className="w-[225px] h-[60px] hover:cursor-pointer hover:translate-1 transition duration-300 flex py-2 px-5 items-center gap-5 bg-[#005274] border rounded-md border-[#C1C1C1]">
                    <Save className="h-[40px] w-[40px] text-white"/>
                    <p className="text-white text-[25px]">UPDATE</p>
                </button>
            </div>
    </div>
    )
}