import Link from 'next/link';
import Image from 'next/future/image';
import PoldevImg from '../public/logo-poldev.png';

export default function about() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="flex-1 max-w-5xl mx-auto p-10">
          <section className="my-16">
            <Link href="/">
              <p className="text-black text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
          </section>
          <section className="text-justify flex flex-col">
            <h1 className="text-black text-[3em] md:text-[4em] font-bold">
              About Us
            </h1>
            <Image src={PoldevImg} alt="Poldev UGM" className="my-6 self-center"></Image>
            <p className="text-black text-[1.1rem] indent-16">
            PolDev (<i>Institute for Policy Development</i>) merupakan <i>Research Center</i> di Universitas Gadjah Mada. PolDev turut berperan dalam mendukung perumusan kebijakan berbasis data. Melalui UNITREND, PolDev berusaha menyajikan data terkait isu-isu aktual yang sedang diperbincangkan oleh masyarakat Indonesia. Data berperan signifikan tidak hanya dalam proses perumusan kebijakan tetapi juga untuk menganalisa kondisi di masa kini serta memprediksi tren di masa depan.
            </p>
            <p className="text-black text-[1.1rem] indent-16">
              Namun demikian, disaat proses pengambilan kebijakan harus dilakukan dengan cepat dan akurat, seringkali terdapat <i>lag</i>, dimana data-data resmi yang tersedia diambil di masa lalu, atau beberapa bulan dan beberapa tahun sebelumnya. 
            </p>
            <p className="text-black text-[1.1rem] indent-16">
              UNITREND berusaha untuk mengintegrasikan data berbasis survey secara <i>real time</i>. Data-data tersebut diharapkan dapat menjadi alternatif data selain data-data resmi yang dirilis oleh pemerintah dan instansi publik lainnya
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
