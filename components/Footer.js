import PoldevImg from '../public/poldev-img.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="block py-6 bg-[#004AAB] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2 mx-[5%]">
        <div className="p-4">
          {/* <h3 className="font-bold text-lg">Poldev UGM</h3> */}
          <Image src={PoldevImg} alt="Poldev UGM"></Image>
          <ul className="mt-3 font-light text-sm">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              voluptas quaerat adipisci numquam unde. Nihil illo est asperiores
              esse totam soluta voluptatum dolor ut nesciunt, excepturi
              consequuntur repudiandae, perspiciatis dignissimos. Iure molestias
              amet sunt soluta odio modi placeat corporis mollitia incidunt
              suscipit. Vitae itaque omnis corrupti est harum eius, nam
              laudantium repellat dolor quos blanditiis ad porro, distinctio
              similique voluptate.
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg">Kontak Kami</h3>
          <ul className="mt-9 font-light text-sm">
            <li>email@ugm.ac.id</li>
            <li>
              Jl. Sisingamangaraja No.4, RT.2/RW.1, Selong, Kec. Kby. Baru, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110
            </li>
          </ul>
        </div>
        <div className="px-4 text-sm font-light">
          © 2022 Poldev UGM. All rights reserved
        </div>
      </div>
    </div>
  );
}
