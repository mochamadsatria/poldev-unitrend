import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import pemiluData from '../assets/data/Data_Pemilu.json'
import { embedDashboard } from "@superset-ui/embedded-sdk";
import axios from "axios";
import getConfig from "next/config";


const { publicRuntimeConfig } = getConfig();

const LineChartsPemilu = dynamic(() => import('../components/LineChartsPemilu'), {
  ssr: false,
});

export default function Pemilu2024() {
  const average = array => array.reduce((a, b) => a + b) / array.length;

  const calculatedCapresData = Object.entries(pemiluData["capres"]["trends"]["3m"]).map(([k, v], _i) => (
    {
      name: k,
      value: average(Object.values(v)),
      // value: average(Object.values(v).slice(-7)),
      // value: 100.0 * ((average(Object.values(v).slice(-7)) - average(Object.values(v).slice(-14,-7))) / (average(Object.values(v).slice(-14,-7)))),
    }
  ));

  const calculatedCapresDataSorted = calculatedCapresData.sort(
    (a, b) => -(a.value - b.value)
  )

  const calculatedCapresDataSum = calculatedCapresDataSorted.reduce((a, b) => a+b.value, 0)

  const calculatedCapresDataSortedNormalized = calculatedCapresData.map((element, index) => ({
    name: element.name,
    value: Number(100 * (element.value / calculatedCapresDataSum)).toFixed(2),
  }));

  const calculatedPartaiData = Object.entries(pemiluData["partai"]["trends"]["3m"]).map(([k, v], _i) => (
    {
      name: k,
      value: average(Object.values(v)),
      // value: average(Object.values(v).slice(-7)),
      // value: 100.0 * ((average(Object.values(v).slice(-7)) - average(Object.values(v).slice(-14,-7))) / (average(Object.values(v).slice(-14,-7)))),
    }
  ));

  const calculatedPartaiDataSorted = calculatedPartaiData.sort(
    (a, b) => -(a.value - b.value)
  )

  const calculatedPartaiDataSum = calculatedPartaiDataSorted.reduce((a, b) => a+b.value, 0)

  const calculatedPartaiDataSortedNormalized = calculatedPartaiData.map((element, index) => ({
    name: element.name,
    value: Number(100 * (element.value / calculatedPartaiDataSum)).toFixed(2),
  }));


  const getDate = (s) => {
    var date = new Date(s);
    date.setDate(date.getDate() + 4);
    return date;
  };

  const capresLatestUpdateDate = getDate(Object.entries(pemiluData["capres"]["trends"]["3m"][Object.keys(pemiluData["capres"]["trends"]["3m"])[0]]).pop()[0]);

  const partaiLatestUpdateDate = getDate(Object.entries(pemiluData["partai"]["trends"]["3m"][Object.keys(pemiluData["partai"]["trends"]["3m"])[0]]).pop()[0]);

  const fetchGuestTokenFromBackend = async () => {
    const { data } = await axios.get(
      `/api/guest_token`
    );

    return data.token;
  }

  useEffect(() => {

    embedDashboard({
      id: publicRuntimeConfig.SUPERSET_DASHBOARD_ID, // given by the Superset embedding UI
      supersetDomain: publicRuntimeConfig.SUPERSET_HOST,
      mountPoint: document.getElementById("superset-pemilu"), // any html element that can contain an iframe
      fetchGuestToken: () => fetchGuestTokenFromBackend(),
      dashboardUiConfig: { hideTitle: true, hideChartControls: true,}, // dashboard UI config: hideTitle, hideTab, hideChartControls (optional)
    });

    var iframePemilu = document.getElementById('superset-pemilu').getElementsByTagName('iframe')[0];

    iframePemilu.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw;
          min-height: calc(100vh - 100px);
    `;
}, []);

return (
  <>
    <Head>
      <title>Indonesian Election | UniTrend by PolDev UGM</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="min-h-screen bg-white">
      
      <div className="flex-1">
        <section className="flex flex-col justify-center items-center h-screen max-w-screen bg-[url('/assets/images/hero/hero-indonesian-election.png')] bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]">
          <Link href="/">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
          </Link>
          <div>
            <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
              Indonesian Election
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
        <section className="text-justify flex flex-col">
          <h1 className="text-black text-[3em] md:text-[4em] font-bold">
            Pemilu 2024
          </h1>
          <p className="text-black text-base my-2">
            Memasuki awal tahun politik, berbagai lembaga survei telah mengeluarkan hasil survei elektabilitas yang semakin mengerucutkan nama-nama kandidat calon presiden. Fenomena politik menjelang pemilu selalu menarik untuk diikuti perkembangannya, khususnya dari sudut pandang perilaku politik masyarakat. Oleh karena itu, data mengenai perilaku politik masyarakat merupakan “emas” yang akan senantiasa dicari dan dipahami. Dengan memahami perilaku politik masyarakat, aktor politik dapat menyusun kampanye, komunikasi publik, branding partai dan calon presiden, bahkan mencari kriteria calon presiden yang diinginkan masyarakat. UniTrend mencoba untuk berkontribusi menyediakan informasi alternatif mengenai perilaku politik masyarakat melalui data Google Trends. Data Google Trends sebelumnya pernah dipakai untuk memprediksi hasil pemilu di Amerika Serikat dan Kanada. Melalui website ini, secara khusus UniTrend ingin mengawal dan memprediksi Pemilu 2024 di Indonesia.
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Tren Bakal Calon Presiden 2024
          </h1>
          <div className='my-4'>
            <h2 className="text-black text-xl font-semibold">
              Tren penelusuran dan atensi publik pada kandidat presiden 3 bulan terakhir
            </h2>
            <ul className='list-none my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
              {calculatedCapresDataSortedNormalized.map((element, index) => {
                return (
                  <>
                    <li key={index} className='rounded-xl h-[14rem] border flex flex-col justify-center items-center drop-shadow-lg p-2'>
                      <Image src={`/assets/images/pemilu/capres/${encodeURIComponent(element.name)}.jpg`}
                        className="h-[6.5rem] w-[6.5rem] rounded-full mb-2 object-cover"
                        alt={element.name}
                        width="100"
                        height="100"
                        layout="fill"/>
                      <p className="text-center text-black text-lg font-semibold">
                        {element.name}
                      </p>
                      <p className="text-center text-black text-lg">
                        {element.value}%
                      </p>
                    </li>
                  </>
                )
              } ) }
            </ul>
            <p className="text-gray-400 text-[0.875rem]">
              Tren penelusuran dihitung berdasarkan perbedaan tren penelusuran di google trends selama 3 bulan terakhir. 
            </p>
          </div>
          <div className='mt-8'>
            <h2 className="text-black text-xl font-semibold">
              Tren penelusuran dan atensi publik pada calon presiden 
            </h2>
            <LineChartsPemilu
              seriesData={
                Object.entries(pemiluData["capres"]["trends"]["3m"]).map(([k, v], _i) => (
                  {
                    name: k,
                    data: Object.entries(v).map(([_k, _v], _j) => (
                      {
                        x: _k,
                        y: _v
                      }
                    ))
                  }
                )
                )}
            />
          </div>
          <p className="text-gray-400 text-[0.875rem]">
            Data terakhir diambil: {capresLatestUpdateDate.toISOString().slice(0, 10)}
          </p>
          <p className="text-gray-400 text-[0.875rem]">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren pencarian terhadap setiap calon presiden.
          </p>
          {/* <p className="text-gray-400 text-[0.875rem]">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren pencarian seluruh kata kunci calon presiden 2024 yang kami lacak. Data pencarian merupakan indikasi keingintahuan pada subjek atau kandidat dan tidak menunjukkan indikasi niat pilihan pemberi suara.
          </p> */}
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Tren Partai Politik Menuju Pemilu 2024
          </h1>
          <div className='my-4'>
            <h2 className="text-black text-xl font-semibold">
              Tren penelusuran dan atensi publik pada partai politik 3 bulan terakhir
            </h2>
            <ul className='list-none my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
              {calculatedPartaiDataSortedNormalized.map((element, index) => {
                return (
                  <>
                    <li key={index} className='rounded-xl h-[14rem] border flex flex-col justify-center items-center drop-shadow-lg p-2'>
                      <Image src={`/assets/images/pemilu/partai/${encodeURIComponent(element.name)}.png`}
                        className="h-[6.5rem] w-[6.5rem] mb-2 object-contain"
                        alt={element.name}
                        width="100"
                        height="100"
                        layout="fill"/>
                      <p className="text-center text-black text-lg font-semibold">
                        {element.name}
                      </p>
                      <p className="text-center text-black text-lg">
                        {element.value}%
                      </p>
                    </li>
                  </>
                )
              } ) }
            </ul>
            <p className="text-gray-400 text-[0.875rem]">
              Tren penelusuran dihitung berdasarkan perbedaan tren penelusuran di google trends selama 3 bulan terakhir.
            </p>
          </div>
          <div className='mt-8'>
            <h2 className="text-black text-xl font-semibold">
              Tren penelusuran dan atensi publik pada partai politik
            </h2>
            <LineChartsPemilu
              seriesData={
                Object.entries(pemiluData["partai"]["trends"]["3m"]).map(([k, v], _i) => (
                  {
                    name: k,
                    data: Object.entries(v).map(([_k, _v], _j) => (
                      {
                        x: _k,
                        y: _v
                      }
                    ))
                  }
                )
                )}
            />
          </div>
          <p className="text-gray-400 text-[0.875rem]">
            Data terakhir diambil: {partaiLatestUpdateDate.toISOString().slice(0, 10)}
          </p>
          <p className="text-gray-400 text-[0.875rem]">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren pencarian terhadap setiap partai politik. 
          </p>
          {/* <p className="text-gray-400 text-[0.875rem]">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren pencarian seluruh kata kunci partai politik yang kami lacak. Data pencarian merupakan indikasi keingintahuan pada subjek atau kandidat dan tidak menunjukkan indikasi niat pilihan pemberi suara.
          </p> */}
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Analisis Twitter Pemilu 2024
          </h1>
          <p className="text-black text-base">
            Media sosial Twitter sudah tidak asing lagi bagi studi politik di berbagai negara untuk memahami dan memetakan wacana publik masyarakat mengenai isu sosial dan politik. Oleh karena itu, UniTrend menyediakan berbagai informasi untuk memahami perilaku masyarakat mulai dari sentimen cuitan, distribusi cuitan mengenai kandidat capres, jumlah cuitan mengenai kandidat capres, dan jenis perangkat yang digunakan dalam melakukan cuitan. Melalui data ini, kita dapat melihat struktur dan dinamika masyarakat di media sosial Twitter mengenai Pemilu 2024.
          </p>
          <div id="superset-pemilu" className="relative max-w-screen min-h-screen">

          </div>
          {/* <p className="text-gray-400 text-[0.875rem] my-2">
            Data ini berasal dari Twitter, dan menunjukkan hasil tren
            rata-rata seluruh kata kunci, merek dan topik umum yang kami lacak.
          </p> */}
        </section>
      </div>
    </div>
  </>
);
}