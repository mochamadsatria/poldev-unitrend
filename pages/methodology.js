import Link from 'next/link';
import Image from 'next/future/image';
import LogoPoldev from '../public/logo-poldev.png';

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
                Methodology
            </h1>
            <p className="text-black text-base my-2">
                Google Trends dapat mendorong terciptanya evidence-based policy dalam perumusan kebijakan publik. Google Trends menyediakan data real time untuk mengetahui topik-topik yang sedang hangat diperbincangkan dan dapat dimanfaatkan untuk mengukur popularitas pencarian kata kunci dalam kurun waktu tertentu. Bagi peneliti, data di Google Trends dapat menjadi lensa informatif dalam menjawab berbagai pertanyaan terkait perkembangan sosial, ekonomi maupun politik.
            </p>
            <p className="text-black text-base my-2">
                Tidak hanya itu, pemanfaatan big data melalui Google Trends turut membantu pelaku usaha, dan pengambil kebijakan dalam menentukan langkah yang diambil di masa depan. Pengguna data dapat memanfaatkan data google trends sesuai dengan kebutuhan mereka, seperti untuk untuk melihat variasi harga komoditas global, preferensi konsumen, tren pasar, dan sentimen terhadap kebijakan. Pada sektor bisnis, Google Trends berperan dalam menciptakan nilai tambah melalui fitur berbasis AI untuk membantu membangun platform business-to-business (B2B) yang efektif. Hal ini dilakukan lewat proses otomatisasi sebagian besar riset pasar yang digunakan untuk memilih produk dan menentukan strategi. Data tren yang disediakan oleh Google trends mampu digunakan untuk mengukur permintaan sehingga bisa dijadikan acuan untuk mengembangkan model usaha. Para investor dapat menentukan diversifikasi portofolio mereka dengan memanfaatkan berbagai informasi Google Trends. Diversifikasi didasarkan pada gagasan bahwa popularitas saham yang diukur dengan permintaan dan  penawaran berkorelasi dengan risiko saham. 
            </p>
            <p className="text-black text-base my-2">
                Google Trends bahkan dapat digunakan untuk mempelajari perkembangan ekonomi, pendapatan dan tren inflasi serta pengangguran di suatu negara. Data alternatif ini akan memudahkan pengambil kebijakan dalam menentukan langkah yang akan diambil. Persoalannya selama ini, pengambil kebijakan bergantung pada data sosial ekonomi yang dikumpulkan sekali atau dua kali dalam setahun dan tidak bersifat real time. Disisi lain, dinamika ekonomi global berlangsung dengan cepat. Data dari Google Trends dapat dijadikan alternatif data dalam menentukan kebijakan. Data dan informasi tentang karakteristik sosial ekonomi penduduk, aktivitas konsumsi, maupun mobilitas masyarakat yang ada di Google Trends dapat dijadikan proxy untuk melihat kesejahteraan masyarakat. Insight yang didapatkan dari data Google Trends dapat menjadi alternatif peringatan dini suatu wilayah atau negara untuk menentukan langkah yang akan diambil untuk meningkatkan kesejahteraan penduduk.
            </p>
            <p className="text-black text-base my-2">
                Pada dunia politik, penggunaan Google Trends sudah mulai banyak digunakan sebagai data alternatif untuk melihat tren popularitas calon pemimpin. Sjovill (2020) menghubungkan data Google Trends untuk memprediksi Pemilu 2016 Swedia dan menemukan bahwa model statistik dari data Google Trends dapat memprediksi hasil pemilu secara akurat. Prado-Roman et al. (2020) juga menemukan korelasi antara peningkatan pencarian dalam Google Trends dan hasil Pemilu yang mengindikasikan bahwa pencarian Google dapat dijadikan acuan niat memilih atau voting intention. Namun demikian, berbagai bias tetap harus diperhatikan dalam menerjemahkan data Google Trends berkaitan dengan pemilu, terutama berkaitan dengan berbagai variasi dalam hal demografi pemilih, perilaku penggunaan internet, dan isu eksternal lainnya yang tidak tertangkap oleh data.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
