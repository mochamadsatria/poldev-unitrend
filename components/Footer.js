import LogoPoldev from '../public/logo-poldev.png';
import Image from 'next/future/image';

export default function Footer() {
  return (
    <div className="block py-6 bg-[#004AAB] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2 mx-[5%]">
        <div className="p-4">
          {/* <h3 className="font-bold text-lg">Poldev UGM</h3> */}
          <Image src={LogoPoldev} alt="Poldev UGM" className="h-[60px] w-auto"></Image>
          <ul className="mt-3 font-light text-sm text-gray-300">
            <li key="0">
              PolDev (<i>Institute for Policy Development</i>) merupakan{' '}
              <i>Research Center</i> di Universitas Gadjah Mada. PolDev turut
              berperan dalam mendukung perumusan kebijakan berbasis data.
              Melalui UniTrend, PolDev berusaha menyajikan data terkait isu-isu
              aktual yang sedang diperbincangkan oleh masyarakat Indonesia.
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-sm">
            Untuk data yang lebih detail silakan hubungi kami
          </h3>
          <div className="mt-9 font-light text-sm">
            <div className="flex items-center mb-4">
              <span className="material-icons mr-5">email</span>
              <a className="underline" href="mailto:poldev.fisipol@ugm.ac.id">
                poldev.fisipol@ugm.ac.id
              </a>
            </div>
            <div className="flex items-center mb-4">
              <span className="material-icons mr-5">location_on</span>
              Jl. Sosio Yustisia No.1, Bulaksumur, Yogyakarta 55281, Indonesia
            </div>
            <div className="flex items-center mb-4">
              <span className="material-icons mr-5">language</span>
              <a href="https://www.poldevinstitute.org/">
                www.poldevinstitute.org
              </a>
            </div>
            <div className="flex items-center mb-4">
              <span className="material-icons mr-5">call</span>
              <div>
                <div className="text-justify">
                  Contact Person : <a href="https://wa.me/6289634661590">089634661590</a> / <a href="https://wa.me/6285869347062">085869347062</a>
                </div>
              </div>
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
