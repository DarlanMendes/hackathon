import React from 'react';

interface RoomProps {
  photoUrl: string;
  roomName: string;
  roomDescription: string;
  capacity: number
}

const RoomCard: React.FC<RoomProps> = ({ photoUrl, roomName, roomDescription,capacity }) => {
  return (
    <div className="flex items-center p-4 bg-white">
      <img src={photoUrl} alt="Room" className="w-[25rem] rounded-[15px]" />
      <div className="ml-4 h-[225px] flex flex-col flex-wrap justify-between">
        <div>
          <h2 className="text-[28px] whitespace-nowrap font-[400]">{roomName}</h2>
        </div>
        <div className="">
          <h2 className="text-[25px] font-[400]">{capacity} Pessoas</h2>
          <p className="text-gray-500">Capacidade</p>
        </div>
        <div>
          <p className="text-gray-500 w-[500px]">{roomDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
