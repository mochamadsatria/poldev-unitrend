import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/future/image';
import DetailCard from '../components/DetailCard';
// import BarCharts from '../components/BarCharts';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import trendsData from '../assets/data/Data_GT.json';
import trendsDataSDGs from '../assets/data/Data_SDGs.json';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import SectorDropDown from '../components/SectorDropDown';
import SectorButton from '../components/SectorButton';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const BarCharts = dynamic(() => import('../components/BarCharts'), {
  ssr: false,
});

export default function Home() {
  const positiveSectorTrendSorted = Object.keys(trendsData)
    .filter((sector) => trendsData[sector]['combined_trends_mean_change'] > 0.0)
    .sort(
      (a, b) =>
        -(
          trendsData[a]['combined_trends_mean_change'] -
          trendsData[b]['combined_trends_mean_change']
        )
    );

  const positiveSectorTrendSortedData = positiveSectorTrendSorted.map(
    (sector) => trendsData[sector]['combined_trends_mean_change']
  );

  const negativeSectorTrendSorted = Object.keys(trendsData)
    .filter((sector) => trendsData[sector]['combined_trends_mean_change'] < 0.0)
    .sort(
      (a, b) =>
        -(
          trendsData[a]['combined_trends_mean_change'] -
          trendsData[b]['combined_trends_mean_change']
        )
    );

  const negativeSectorTrendSortedData = negativeSectorTrendSorted.map(
    (sector) => trendsData[sector]['combined_trends_mean_change']
  );

  const trendsDataSorted = Object.keys(trendsData).sort(
    (a, b) =>
      -(
        trendsData[a]['combined_trends_mean_change'] -
        trendsData[b]['combined_trends_mean_change']
      )
  );
  const trendsDataSDGsSorted = Object.keys(trendsDataSDGs).sort(
    (a, b) =>
      -(
        trendsDataSDGs[a]['combined_trends_mean_change'] -
        trendsDataSDGs[b]['combined_trends_mean_change']
      )
  );

  const getDateOfWeek = (w, y) => {
    var sunday = new Date(y, 0, 1 + w * 7);
    while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
    }
    return sunday;
  };
  const _selectedTrendsData = trendsData[Object.keys(trendsData)[0]];
  const getNextWeekDate = (dt) =>
    new Date(dt.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  const getNextDayDate = (dt) =>
    new Date(dt.getTime() + 1 * 24 * 60 * 60 * 1000);

  const _latestDate = getDateOfWeek(
    Object.keys(_selectedTrendsData['biannually_combined_trends_mean']['2022'])
      .length,
    2022
  );
  const latestDate = _latestDate.toISOString();
  const latestDateNextDay = getNextDayDate(_latestDate).toISOString();
  const latestDateNextWeek = getNextWeekDate(_latestDate).toISOString();
  const latestDate2NextWeek = getNextWeekDate(getNextWeekDate(_latestDate)).toISOString();
  const _lastYearDate = getDateOfWeek(
    Object.keys(_selectedTrendsData['biannually_combined_trends_mean']['2022'])
      .length,
    2021
  );
  const lastYearDate = _lastYearDate.toISOString();
  const lastYearDateNextWeek = getNextWeekDate(_lastYearDate).toISOString();
  const lastYearDate2NextWeek = getNextWeekDate(getNextWeekDate(_lastYearDate)).toISOString();

  return (
    // <div>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <h1>Hello World</h1>
    // </div>
    <div className="min-h-screen bg-white">
      <Head>
        <title>Economic Development | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <SectorDropDown /> */}
      {/* <Navbar /> */}
      <div className="flex-1">
        <section className="flex flex-col justify-center items-center h-screen max-w-screen bg-[url('/assets/images/hero/hero-google-trends.png')] bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]">
          <Link href="/">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
          </Link>
          <div>
            <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
              Economic Development
            </h1>
          </div>
          {/* <Image
            src={heroImg}
            alt="Futuristic city"
            className="w-screen absolute h-[auto] contrast-[110%] brightness-[70%] saturate-0 hidden xl:block"
          ></Image> */}
        </section>
      </div>
      <div className="flex-1 max-w-7xl mx-auto p-10">
        {/* <section className="my-16">
          <h1 className="text-black text-[1.5rem] font-bold text-center max-w-2xl m-auto">
            Ingin mengetahui topik apa yang banyak ditelusuri masyarakat pada
            google pada setiap sektor? Yuk cari!
          </h1>
          <SearchBar />
        </section>
        <section className="my-16">
          <h1 className="text-black text-[1.5rem] font-bold text-center max-w-2xl m-auto">
            Topik Trending
          </h1>
          <div className="flex flex-wrap justify-center">
            {Object.keys(trendsData).map((sector, index) => {
                return (
                  <>
                    <SectorButton
                      href={`/sector/${sector}`}
                      name={`${trendsData[sector]["name"]}`}
                    />
                  </>
                );
              })}
          </div>
        </section> */}
        <section className="my-16">

        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Wow, Google Trends?
          </h1>
          <p className="text-black text-base my-2">
            Penggunaan <i>big data</i> seperti Google Trends dapat membantu
            pengambil kebijakan dalam memahami kondisi sosial dan ekonomi
            masyarakat secara cepat, akurat dan <i>real-time</i>. Para investor,
            misalnya, memanfaatkan Google Trends untuk melihat variasi harga
            aset global. Seorang investor bisa menentukan diversifikasi
            portofolio mereka menggunakan informasi <i>item</i> yang ditelusuri
            melalui Google Trends. Para pekerja komersial atau pengusaha
            memanfaatkan Google Trends untuk menganalisis pasar, terutama untuk
            mengukur tren permintaan untuk dijadikan acuan dalam menyusun
            strategi bisnis. Google Trends juga berperan dalam menciptakan nilai
            tambah melalui fitur berbasis <i>artificial intelligence</i> untuk
            membantu membangun platform <i>business to business</i> (B2B) yang
            efektif.
          </p>
          <p className="text-black text-base my-2">
            Bagi pengambil kebijakan, data Google Trends dapat memberikan lensa
            informatif dalam melihat pergeseran minat pencarian Google yang
            berkaitan dengan isu-isu sosial, ekonomi dan politik saat ini.
            Google Trends juga dapat digunakan untuk memprediksi pertumbuhan PDB
            suatu negara bersamaan dengan indikator ekonomi makro lainnya
            seperti pertumbuhan ekonomi, pengangguran dan inflasi sebagai dasar
            pengambilan kebijakan. Data tersebut dapat menjadi alternatif 
            peringatan dini bagi pemangku kebijakan untuk menentukan langkah 
            yang akan dicapai dalam  mencapai <i>Sustainable Development Goals</i> (SDGs).
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Sektor yang mengalami peningkatan
          </h1>
          {/* <p className="text-black text-base my-2">
            Data berikut ini menunjukkan sektor-sektor yang mengalami
            peningkatan persentase pencarian, dibandingkan dengan periode yang
            sama pada tahun sebelumnya. Hal ini menunjukkan adanya traksi yang
            tinggi terhadap topik sektor berikut di Google.
          </p> */}
          <BarCharts
            sector={positiveSectorTrendSorted.map(
              (sector) => trendsData[sector]['name']
            )}
            series={positiveSectorTrendSortedData}
            fillColor="#07B0F8"
          />
          <p className="text-gray-400 text-[0.75rem]">
            Membandingkan :{' '}
            {`${lastYearDateNextWeek.slice(0, 10)} hingga ${lastYearDate2NextWeek.slice(0, 10)}`}{' '}
            dengan{' '}
            {`${latestDateNextWeek.slice(0, 10)} hingga ${latestDate2NextWeek.slice(
              0,
              10
            )}`}
          </p>
          <p className="text-gray-400 text-[0.75rem]">
            Data terakhir diambil: {latestDateNextDay.slice(0, 10)}
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Sektor yang mengalami penurunan
          </h1>
          {/* <p className="text-black text-base my-2">
            Data berikut ini menunjukkan sektor-sektor yang mengalami penurunan
            persentase, dibandingkan periode yang sama pada tahun sebelumnya.
            Diketahui bahwa terjadi penurunan yang signifikan terhadap pencarian
            topik yang berhubungan dengan sektor berikut di Google.
          </p> */}
          <BarCharts
            sector={negativeSectorTrendSorted.map(
              (sector) => trendsData[sector]['name']
            )}
            series={negativeSectorTrendSortedData}
            fillColor="#F84F07"
          />
          <p className="text-gray-400 text-[0.75rem]">
            Membandingkan :{' '}
            {`${lastYearDateNextWeek.slice(0, 10)} hingga ${lastYearDate2NextWeek.slice(0, 10)}`}{' '}
            dengan{' '}
            {`${latestDateNextWeek.slice(0, 10)} hingga ${latestDate2NextWeek.slice(
              0,
              10
            )}`}
          </p>
          <p className="text-gray-400 text-[0.75rem]">
            Data terakhir diambil: {latestDateNextDay.slice(0, 10)}
          </p>
        </section>
        <h1 className="text-black text-xl font-semibold">
          Silakan klik untuk mengetahui rincian data per sektor
        </h1>
        <ul className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendsDataSorted.map((k, index) => {
            return (
              <>
                <li key={index}>
                  <DetailCard
                    type="Sector"
                    href={`/sector/${encodeURIComponent(k)}`}
                    sector={trendsData[k]['name']}
                    slug={trendsData[k]['slug']}
                    trendsChange={trendsData[k]['combined_trends_mean_change']}
                  />
                </li>
              </>
            );
          })}
          {/* <li>
            <DetailCard sector = "India"/>
          </li>
          <li>
            <DetailCard />
          </li>
          <li>
            <DetailCard />
          </li>
          <li>
            <DetailCard />
          </li>
          <li>
            <DetailCard />
          </li>
          <li>
            <DetailCard />
          </li>
          <li>
            <DetailCard />
          </li>
          <li>
            <DetailCard />
          </li> */}
        </ul>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            <i>Sustainable Development Goals</i>
          </h1>
          <p className="text-black text-base my-2">
            <i>Sustainable Development Goals</i> (SDGs) adalah agenda tahun 2030
            yang merupakan kesepakatan pembangunan berkelanjutan berdasarkan hak
            asasi manusia dan kesetaraan. Poin umum dari pembangunan
            berkelanjutan, digunakan sebagai pedoman untuk melaksanakan
            pembangunan yang menjaga peningkatan kesejahteraan ekonomi
            masyarakat secara berkesinambungan, pembangunan yang menjaga
            keberlanjutan kehidupan sosial masyarakat, pembangunan yang menjaga
            kualitas lingkungan hidup serta pembangunan yang menjamin keadilan
            dan terlaksananya tata kelola yang mampu menjaga peningkatan
            kualitas hidup dari satu generasi ke generasi berikutnya. UniTrend
            menyajikan <i>keyword-keyword</i> yang berelevansi tinggi terhadap
            topik mengenai poin SDGs yang populer di Indonesia.
          </p>
          <ul className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trendsDataSDGsSorted.map((k, index) => {
              return (
                <>
                  <li key={index}>
                    <DetailCard
                      type="SDG"
                      href={`/sdgs/${encodeURIComponent(k)}`}
                      sector={trendsDataSDGs[k]['name']}
                      slug={trendsDataSDGs[k]['slug']}
                      trendsChange={
                        trendsDataSDGs[k]['combined_trends_mean_change']
                      }
                    />
                  </li>
                </>
              );
            })}
          </ul>
        </section>
        {/* <hr className="mt-10 border-[#555]" /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
