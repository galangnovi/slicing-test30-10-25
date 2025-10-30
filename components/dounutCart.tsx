import React from 'react';
import { Pie, PieChart, Cell } from 'recharts';


interface BankData {
  name: string;
  value: number;
  fill: string; 
}


const data = [
  { name: 'BRI', value: 30, fill: '#4A3764' },
  { name: 'KEB Hana Bank', value: 10, fill: '#6150C1' },
  { name: 'Mandiri', value: 15, fill: '#146C94' },
  { name: 'BTN', value: 20, fill: '#51C4E9' },
  { name: 'Artha Graha', value: 25, fill: '#1FFFE1' },
];

function PieChartWithPaddingAngle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart style={{ width: '100%', maxWidth: '470px', maxHeight: '80vh', aspectRatio: 1 }} responsive className='relative top-3 left-3'>
      <Pie
        data={data}
        innerRadius="58%"
        outerRadius="100%"
        cornerRadius="0%"
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <span className='p-2 bg-black text-amber-500 relative top-0 right-0'></span>
    </PieChart>
  );
}


export default function ApprovalChart(){
  
  const getLabelPosition = (index: number) => {
    switch (index) {
      case 0: return 'top-1/4 right-0 transform translate-x-1/2 -translate-y-full text-left'; // BRI 
      case 1: return 'top-1/4 left-full transform -translate-x-full -translate-y-1/2 text-right'; // KEB Hana Bank 
      case 2: return 'top-1/2 left-0 transform -translate-x-full -translate-y-1/2 text-right'; // Mandiri 
      case 3: return 'bottom-1/4 left-0 transform -translate-x-full translate-y-1/2 text-right'; // BTN 
      case 4: return 'bottom-0 right-0 transform translate-x-1/2 translate-y-full text-left'; // Artha Graha 
      default: return '';
    }
  };

  return (
    <div className='w-full h-[700px] p-8 mt-[53px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md'>
        <div className='w-full flex justify-center'>
            <h1 className='text-[30px] font-semibold'>Top 5 Bank Approval Tertinggi</h1>
        </div>
     
      <div className='relative w-[450px] h-[450px] mx-auto top-20'>
        <div className='bg-[#FFFFFF] shadow-[0_4px_50px_rgba(0,0,0,0.08)] h-[500px] w-[500px] rounded-full -mb-10'>
            <PieChartWithPaddingAngle />
        </div>
        
        {data.map((item, index) => (
          <div 
            key={item.name} 
            className={`absolute z-10 ${getLabelPosition(index)}`}
            style={{ 
              width: '150px', 
              transition: 'all 0.3s ease',
              top: `${(index + 1) * 20}%`, 
              ...(index === 0 && { top: '40px', right: '-150px' }),
              ...(index === 1 && { top: '50px', left: '-100px' }),
              ...(index === 2 && { top: '200px', left: '-100px' }),
              ...(index === 3 && { top: '400px', left: '-100px' }),
              ...(index === 4 && { bottom: '0', right: '-150px', top: 'unset' }),
            }}
          >
            <p className='text-2xl font-bold mb-1' style={{ color: item.fill }}>
              {item.value}%
            </p>
            <p className='text-[20px] mt-2 text-gray-700'>{item.name}</p>
          </div>
        ))}
        
      </div>
      
    </div>
  );
};

