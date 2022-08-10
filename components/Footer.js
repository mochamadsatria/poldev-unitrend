import Image from 'next/image';
import PoldevImg from '../public/poldev-img.png';
import UgmImg from '../public/ugm-img.png';

export default function Footer() {
  return (
    <div className="flex h-24">
      <div className="w-auto relative mx-1">
        <Image src={UgmImg} alt="logo UGM" layout="fill" />
      </div>
    </div>
  );
}
