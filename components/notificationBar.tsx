
interface Notification {
  timeAgo: string; 
  status: string; 
  mainText: string; 
  subText: string; 
  hidden:boolean;
}

interface NotifDatas{
    notifications : Notification[]
}


export default function NotificationTimeline({notifications}:NotifDatas) {
  const getDotColor = (status: string) => {
    if (status === 'updated') {
      return 'bg-[#17A9E2]'; }
    return 'bg-[#646567]'; 
  };

  return (
    <div className='w-[400px] h-[589px] p-5 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg border border-gray-100'>
      
      <h3 className='text-[25px] font-bold mb-4 ml-3 tracking-widest'>
        NOTIFICATION
      </h3>

      <div className='relative ml-4 mt-10'>
        {notifications.map((notif, index) => (
          <div key={index} className='relative flex items-start'>
            <div className='w-1/4 text-[18px] font-medium text-[#646567] mr-6 mt-[-20px] z-5'>
              {notif.timeAgo}
            </div>
            <div className='absolute left-[102px] top-[-20px] transform -translate-x-1/2 flex flex-col items-center pt-2 z-5'>
              <div 
                className={`w-4 h-4 rounded-full ${getDotColor(notif.status)}`}
              ></div>
            </div>
            <div className={`w-[273px] pl-5 ${notif.hidden && "border-l-8"} border-[#6465674D]  text-left h-30`}>
              <p className='text-[18px] font-semibold mt-[-20px] text-gray-800 mb-0.5'>
                {notif.mainText}
              </p>
              <p className='text-[14px] font-medium text-gray-500'>
                {notif.subText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
