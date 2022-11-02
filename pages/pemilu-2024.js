import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import pemiluData from '../data/Data_Pemilu.json'
import { embedDashboard } from "@superset-ui/embedded-sdk";
import axios from "axios";

const LineChartsPemilu = dynamic(() => import('../components/LineChartsPemilu'), {
  ssr: false,
});

export default function Pemilu2024() {
  const getDate = (s) => {
    return new Date(s);
  };

  const fetchGuestTokenFromBackend = async () => {
    const { data } = await axios.get(
      `/api/guest_token`
    );

    return data.token;
  }

  useEffect(() => {

    embedDashboard({
      id: process.env.SUPERSET_DASHBOARD_ID, // given by the Superset embedding UI
      supersetDomain: process.env.SUPERSET_DOMAIN,
      mountPoint: document.getElementById("superset-pemilu"), // any html element that can contain an iframe
      fetchGuestToken: () => fetchGuestTokenFromBackend(),
      dashboardUiConfig: { hideTitle: true, hideChartControls: true,}, // dashboard UI config: hideTitle, hideTab, hideChartControls (optional)
    });

    document.getElementById('superset-pemilu').getElementsByTagName('iframe')[0].style.cssText = `
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
    <div className="min-h-screen bg-white">
      <div className="flex-1 max-w-7xl mx-auto p-10">
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
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Lorem ipsum capres
          </h1>
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
          <p className="text-gray-400 text-[0.875rem] my-2">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren
            rata-rata seluruh kata kunci, merek dan topik umum yang kami lacak.
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Lorem ipsum partai
          </h1>
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
          <p className="text-gray-400 text-[0.875rem] my-2">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren
            rata-rata seluruh kata kunci, merek dan topik umum yang kami lacak.
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Lorem ipsum partai
          </h1>
          <div id="superset-pemilu" className="relative max-w-screen min-h-screen">

          </div>
          <p className="text-gray-400 text-[0.875rem] my-2">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren
            rata-rata seluruh kata kunci, merek dan topik umum yang kami lacak.
          </p>
        </section>
      </div>
    </div>
  </>
);
}
