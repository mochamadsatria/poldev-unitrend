import PoldevImg from '../public/poldev-img.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="block py-6 bg-[#004AAB] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2 mx-[5%]">
        <div className="p-4">
          {/* <h3 className="font-bold text-lg">Poldev UGM</h3> */}
          <Image src={PoldevImg} alt="Poldev UGM"></Image>
          <ul className="mt-3 font-light text-sm text-gray-300">
            <li>
              PolDev (<i>Institute for Policy Development</i>) merupakan <i>Research Center</i> di Universitas Gadjah Mada. PolDev turut berperan dalam mendukung perumusan kebijakan berbasis data. Melalui UNITREND, PolDev berusaha menyajikan data terkait isu-isu aktual yang sedang diperbincangkan oleh masyarakat Indonesia.
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg">Kontak Kami</h3>
          <div className="mt-9 font-light text-sm">
            <div className="flex items-center mb-4">
              <span className="material-icons mr-5">email</span>
              <a className="underline" href="mailto:poldev.fisipol@ugm.ac.id">
                poldev.fisipol@ugm.ac.id
              </a>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-5">location_on</span>
              Jl. Sosio Yustisia No.1, Bulaksumur, Yogyakarta 55281, Indonesia
            </div>
          </div>
        </div>
        <div className="px-4 text-sm font-light">
          © 2022 Poldev UGM. All rights reserved
        </div>
      </div>
    </div>
  );
}
