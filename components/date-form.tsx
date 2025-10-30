import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

interface DateRangeInputProps {
  onRangeChange?: (startDate: string, endDate: string) => void;
}

const DateRangeInput: React.FC<DateRangeInputProps> = ({ onRangeChange }) => {
  const [startDate, setStartDate] = useState("2010-01-22");
  const [endDate, setEndDate] = useState("2010-02-22");

  const handleDateChange = (value: string, type: "start" | "end") => {
    if (type === "start") {
      setStartDate(value);
      onRangeChange?.(value, endDate);
    } else {
      setEndDate(value);
      onRangeChange?.(startDate, value);
    }
  };

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 mx-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between bg-[#DEDEDE] border border-[#C1C1C1] rounded-md px-5 py-2 shadow-inner w-[686] h-[50px] relative">
        {/* Input Start */}
        <div className="flex gap-10">
            <input
            type="date"
            value={startDate}
            onChange={(e) => handleDateChange(e.target.value, "start")}
            className="absolute opacity-0 w-[100px] h-full left-3 cursor-pointer"
          />
          <span className="text-[#646567] text-[20px] font-medium select-none">
            {format(parseISO(startDate), "dd/MM/yyyy", { locale: id })}
          </span>

          <ArrowIcon />

          {/* Input End */}
          <input
            type="date"
            value={endDate}
            onChange={(e) => handleDateChange(e.target.value, "end")}
            className="absolute opacity-0 w-[100px] h-full left-[130px] cursor-pointer"
          />
          <span className="text-[#646567] text-[20px] font-medium select-none">
            {format(parseISO(endDate), "dd/MM/yyyy", { locale: id })}
          </span>
        </div>
        <div className="flex-grow" />

        {/* Calendar icon */}
        <Calendar className="text-[#646567] w-6 h-6 mr-1" />
      </div>
    </div>
  );
};

export default DateRangeInput;
