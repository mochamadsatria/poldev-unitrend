import Link from 'next/link';
import arrowUp from '../public/arrow-up.svg';
import arrowDown from '../public/arrow-down.svg';
import Image from 'next/image';

export default function DetailCard(props) {
  return (
    <Link href={props.href}>
      <div className="border-black border-2 p-5 hover:cursor-pointer">
        <div className="text-center text-black text-[1.1rem]">
          {props.sector ? props.sector : 'Pariwisata'}
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[3.2rem] w-[3.2rem] relative mx-1">
            {props.trendsChange > 0.0 ? (
              <Image src={arrowUp} alt="arrow up" layout="fill" />
            ) : (
              <Image src={arrowDown} alt="arrow up" layout="fill" />
            )}
          </div>
          {props.trendsChange > 0.0 ? (
            <span className="mx-1 text-[3rem] font-bold text-[#07818F]">
              {props.trendsChange ? props.trendsChange.toFixed(1) : '0.0%'}%
            </span>
          ) : (
            <span className="mx-1 text-[3rem] font-bold text-[#DA127D]">
              {props.trendsChange ? -1 * props.trendsChange.toFixed(1) : '0.0%'}
              %
            </span>
          )}
          {/* <span className="mx-1 text-[3rem] font-bold text-[#07818F]">{props.trendsChange ? props.trendsChange.toFixed(1) : "0.0%"}</span> */}
        </div>
      </div>
    </Link>
  );
}
