import Link from 'next/link';

export default function about() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="flex-1 max-w-7xl mx-auto p-10">
          <section className="my-16">
            <Link href="/">
              <p className="text-black text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
          </section>
          <section>
            <h1 className="text-black text-[3em] md:text-[4em] font-bold">
              About Us
            </h1>
            <p className="text-black text-[1.1rem] indent-16">
              PolDev adalah singkatan dari Institute for Policy Development.
              educational Research Center Fisipol UGM. Segala bentuk kegiatan
              yang dilakukan oleh PolDevmemiliki nilai strategis untuk membuat
              kebijakan lebih baik.
            </p>
            <p className="text-black text-[1.1rem] indent-16">
              PolDev Data Center hadir dengan tujuan untuk menyajikan data
              terhadap isu yang sedang banyak diperbincangkan oleh masyarakat
              Indonesia. Poldev Data Center berusaha untuk mengintegrasikan data
              pencarian kueri pada google trends secara otomatis menjadi grafik
              yang mudah untuk dipahami. Melalui penyajian data tersebut, kami
              berkomitmen untuk mendukung basis data dalam keperluan terhadap
              tahapan agenda setting dalam perumusan kebijakan publik maupun
              problematisasi pada penelitian akademik.
            </p>
            <p className="text-black text-[1.1rem] indent-16">
              Mekanisme kerja website atau pengambilan data adalah sebagai
              berikut ...
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
