"use client";

import React from "react";

interface Step {
  name: string;
}

interface ProgressBarProps {
  currentStep: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { name: "Pinjaman" },
    { name: "Pekerjaan" },
    { name: "Alamat" },
    { name: "Informasi Asset" },
    { name: "Informasi Tambahan" },
    { name: "Upload Dokumen" },
    { name: "Review" },
    { name: "Pilihan Produk & Bank" },
    { name: "Bank Officer" },
    { name: "Surat Keterangan" },
    { name: "PDF CPA" },
    { name: "Summary" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full mr-20 mt-2">
      {/* Garis dan Titik */}
      <div className="relative flex items-center justify-center w-full">
        
        <div className="absolute top-1/9 left-12 w-[94%] h-2 bg-gray-300 -translate-y-1/2"></div>

        <div
          className="absolute top-1/9 left-12 h-2 bg-[#014B67] -translate-y-1/2 transition-all duration-500"
          style={{
            width: `${(currentStep / (steps.length - 0.4)) * 100}%`,
          }}
        ></div>

        <div className="flex justify-between w-full relative">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    isCompleted
                      ? "bg-[#014B67] border-[#014B67]"
                      : isActive
                      ? "bg-[#17A9E2] border-[#17A9E2]"
                      : "bg-gray-200 border-gray-300"
                  }`}
                ></div>
                <span
                  className={`text-[20px] font-semibold w-20 mt-1 text-center justify-center flex leading-tight flex-wrap ${
                    isCompleted
                      ? "text-[#005274]"
                      : isActive ? "text-[#17A9E2]"
                      : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
