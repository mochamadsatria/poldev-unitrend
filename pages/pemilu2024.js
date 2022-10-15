import Link from 'next/link';
import Image from 'next/future/image';

export default function Pemilu2024() {
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
              Pemilu 2024
            </h1>
            <p className="text-black text-base indent-10">
              Pemilihan Umum Presiden Indonesia 2024 adalah sebuah proses
              demokrasi untuk memilih Presiden dan Wakil Presiden Republik
              Indonesia untuk masa bakti 2024–2029 yang akan dilaksanakan pada
              Rabu, 14 Februari 2024. Pemilihan ini akan menjadi pemilihan
              presiden langsung kelima di Indonesia. Menjelang momentum
              tersebut, banyak isu politik yang kemudian menjadi hal yang
              diperbincangkan oleh masyarakat Indonesia.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
