import arrowUp from '../public/arrow-up.svg';
import Image from 'next/image';

export default function DetailCard() {
  return (
    <div className="border-2 p-5 hover:cursor-pointer">
      <div className="text-center font-medium text-[1.8rem] text-white">
        Pariwisata
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[3.2rem] w-[3.2rem] relative mx-1">
          <Image src={arrowUp} alt="arrow up" layout="fill" />
        </div>
        <span className="mx-1 text-[3rem] font-bold text-[#07818F]">29%</span>
      </div>
    </div>
  );
}
