import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TableauTable from '../../components/tableauTable';

const Survei = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.async = true;
    document.body.appendChild(scriptElement);
  }, []);
  return (
    <>
      <Head>
        <title>Survei Keterjangkauan Harga Properti | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-white" id="view">
        <div className="flex-1">
          <section className="flex flex-col justify-center items-center h-screen max-w-screen bg-[url('/assets/images/survey/property.jpg')] bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]">
            <Link href="/">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
            <div>
              <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
              Survei Keterjangkauan<br/>Harga Properti
              </h1>
            </div>
          </section>
        </div>
        <div className="flex-1 mx-auto" style={{ paddingRight: "7rem", paddingLeft: "7rem", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <section className='survey'>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q4
              ================================================== 
              */}
              <TableauTable
                title='Q4'
                url='https://public.tableau.com/static/images/Q1/Q4Property/Dashboard1/1_rss.png'
                param='Q4Property/Dashboard1'
              />
              {/* 
              ==================================================
              Property Q5
              ================================================== 
              */}
              <TableauTable
                title='Q5'
                url='https://public.tableau.com/static/images/Q1/Q5Property/Dashboard1/1_rss.png'
                param='Q5Property/Dashboard1'
              />
              {/* 
              ==================================================
              Property Q6
              ================================================== 
              */}
              <TableauTable
                title='Q6'
                url='https://public.tableau.com/static/images/Q1/Q6Property/Dashboard1/1_rss.png'
                param='Q6Property/Dashboard1'
              />
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q2
              ================================================== 
              */}
              <TableauTable
                title='Q2'
                url='https://public.tableau.com/static/images/Q1/Q2Property/Dashboard1/1_rss.png'
                param='Q2Property/Dashboard1'
              />
              {/* 
              ==================================================
              Property Q7
              ================================================== 
              */}
              <TableauTable
                title='Q7'
                url='https://public.tableau.com/static/images/Q1/Q7Property/Dashboard1/1_rss.png'
                param='Q7Property/Dashboard1'
              />
              {/* 
              ==================================================
              Property Q3
              ================================================== 
              */}
              <TableauTable
                title='Q3'
                url='https://public.tableau.com/static/images/Q1/Q3Property/Dashboard1/1_rss.png'
                param='Q3Property/Dashboard1'
              />
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q9
              ================================================== 
              */}
              <TableauTable
                title='Q9'
                url='https://public.tableau.com/static/images/Q1/Q9Property/Dashboard1/1_rss.png'
                param='Q9Property/Dashboard1'
              />
              {/* 
              ==================================================
              Property Q11
              ================================================== 
              */}
              <TableauTable
                title='Q11'
                url='https://public.tableau.com/static/images/Q1/Q11Property/Dashboard1/1_rss.png'
                param='Q11Property/Dashboard1'
              />
              {/* 
              ==================================================
              Property Q10
              ================================================== 
              */}
              <TableauTable
                title='Q10'
                url='https://public.tableau.com/static/images/Q1/Q10Property/Dashboard1/1_rss.png'
                param='Q10Property/Dashboard1'
              />
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q8
              ================================================== 
              */}
              <TableauTable
                title='Q8'
                url='https://public.tableau.com/static/images/Q1/Q8Property/Dashboard1/1_rss.png'
                param='Q8Property/Dashboard1'
              />
            </section>
          </section>
          {/* <p id="footnote">**this page is supported by tableau</p> */}
        </div>
        <style>
          {`
            .survey {
              padding-bottom: 6rem;
            }

            #title {
              font-size: 28px;
              font-weight: bold;
            }

            .tableauRow {
              padding-top: 20px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              gap: 20px;
            }

            #footnote {
              font-size: 8pt;
              font-style: italic;
              color: grey;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Survei;