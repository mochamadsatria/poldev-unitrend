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
        <title>Survey | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-white" id="view">
        <div className="flex-1">
          <section className="flex flex-col justify-center items-center h-screen max-w-screen bg-[url('/assets/images/survey/tax.jpg')] bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]">
            <Link href="/">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
            <div>
              <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
                Survei Keadilan Fiskal dan Pajak
              </h1>
            </div>
          </section>
        </div>
        <div className="flex-1 mx-auto" style={{ paddingRight: "7rem", paddingLeft: "7rem", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <section className='survey'>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q12
              ================================================== 
              */}
              <TableauTable
                title='Q12'
                url='https://public.tableau.com/static/images/Q1/Q12Tax/Dashboard1/1_rss.png'
                param='Q12Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q13
              ================================================== 
              */}
              <TableauTable
                title='Q13'
                url='https://public.tableau.com/static/images/Q1/Q13Tax/Dashboard1/1_rss.png'
                param='Q13Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q7
              ================================================== 
              */}
              <TableauTable
                title='Q7'
                url='https://public.tableau.com/static/images/Q1/Q7Tax/Dashboard1/1_rss.png'
                param='Q7Tax/Dashboard1'
              />
            </section>
            <section className='tableauRow'>

              {/* 
              ==================================================
              TAX Q1
              ================================================== 
              */}
              <TableauTable
                title='Q1'
                url='https://public.tableau.com/static/images/Q1/Q1Tax/Dashboard1/1_rss.png'
                param='Q1Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q8
              ================================================== 
              */}
              <TableauTable
                title='Q8'
                url='https://public.tableau.com/static/images/Q1/Q8Tax/Dashboard1/1_rss.png'
                param='Q8Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q9
              ================================================== 
              */}
              <TableauTable
                title='Q9'
                url='https://public.tableau.com/static/images/Q1/Q9Tax/Dashboard1/1_rss.png'
                param='Q9Tax/Dashboard1'
              />
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q6
              ================================================== 
              */}
              <TableauTable
                title='Q6'
                url='https://public.tableau.com/static/images/Q1/Q6Tax/Dashboard1/1_rss.png'
                param='Q6Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q10
              ================================================== 
              */}
              <TableauTable
                title='Q10'
                url='https://public.tableau.com/static/images/Q1/Q10Tax/Dashboard1/1_rss.png'
                param='Q10Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q11
              ================================================== 
              */}
              <TableauTable
                title='Q11'
                url='https://public.tableau.com/static/images/Q1/Q11Tax/Dashboard1/1_rss.png'
                param='Q11Tax/Dashboard1'
              />
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q4
              ================================================== 
              */}
              <TableauTable
                title='Q4'
                url='https://public.tableau.com/static/images/Q1/Q4Tax/Dashboard1/1_rss.png'
                param='Q4Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q3
              ================================================== 
              */}
              <TableauTable
                title='Q3'
                url='https://public.tableau.com/static/images/Q1/Q3Tax/Dashboard1/1_rss.png'
                param='Q3Tax/Dashboard1'
              />
              {/* 
              ==================================================
              TAX Q2
              ================================================== 
              */}
              <TableauTable
                title='Q2'
                url='https://public.tableau.com/static/images/Q1/Q2Tax/Dashboard1/1_rss.png'
                param='Q2Tax/Dashboard1'
              />
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q5
              ================================================== 
              */}
              <TableauTable
                title='Q5'
                url='https://public.tableau.com/static/images/Q1/Q5Tax/Dashboard1/1_rss.png'
                param='Q5Tax/Dashboard1'
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