import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
        <title>Survei | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-white" id="view">
        <div className="flex-1">
          <section className="flex flex-col justify-center items-center h-screen max-w-screen bg-[url('/assets/images/hero/hero-survey.jpg')] bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]">
            <Link href="/">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
            <div>
              <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
                Survei
              </h1>
            </div>
          </section>
        </div>
        <div className="flex-1 mx-auto" style={{ paddingRight: "9rem", paddingLeft: "9rem", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <section className='survey'>
            <h1 id="title">
              1. Survei Pemilu
            </h1>
            <section className='tableauRow' style={{ paddingTop: "2rem" }}>
              {/* 
              ==================================================
              ELECTION Q1
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q1
                </h1>
                <div className='tableauPlaceholder' id='viz1677649923487'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ1/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ1/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ1/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              ELECTION Q2
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q2
                </h1>
                <div className='tableauPlaceholder' id='viz1677669159432'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='//https:public.tableau.comstaticimagesElElectionQ2Dashboard11_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ2/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ2/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              ELECTION Q3
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q3
                </h1>
                <div className='tableauPlaceholder' id='viz1677669398459'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ3/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ3/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ3/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              ELECTION Q4
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q4
                </h1>
                <div className='tableauPlaceholder' id='viz1677669451692'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ4/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ4/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ4/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              ELECTION Q8
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q8
                </h1>
                <div className='tableauPlaceholder' id='viz1677669541566'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ8/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ8/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ8/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              <section>
                {/* 
              ==================================================
              ELECTION Q7
              ================================================== 
              */}
                <h1 id="table-title">
                  Election Q7
                </h1>
                <div className='tableauPlaceholder' id='viz1677669573974'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ7/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ7/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ7/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              ELECTION Q5
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q5
                </h1>
                <div className='tableauPlaceholder' id='viz1677669622268'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ5/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ5/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ5/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              ELECTION Q6
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q6
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ6/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ6/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ6/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              ELECTION Q9
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Election Q9
                </h1>
                <div className='tableauPlaceholder' id='viz1677669692853'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/El/ElectionQ9/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='ElectionQ9/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/El/ElectionQ9/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
          </section>

          {/* SECTION SURVEI KEADILAN FISKAL DAN PAJAK */}

          <section className='survey'>
            <h1 id="title">
              2. Survei Keadilan Fiskal dan Pajak
            </h1>
            <section className='tableauRow' style={{ paddingTop: "2rem" }}>
              {/* 
              ==================================================
              TAX Q12
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q12
                </h1>
                <div className='tableauPlaceholder' id='viz1677670806931'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q12Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q12Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q12Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              TAX Q13
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q13
                </h1>
                <div className='tableauPlaceholder' id='viz1677669159432'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q13Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q13Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q13Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q7
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q7
                </h1>
                <div className='tableauPlaceholder' id='viz1677669398459'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q7Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q7Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q7Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              TAX Q1
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q1
                </h1>
                <div className='tableauPlaceholder' id='viz1677669451692'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q1Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q1Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q1Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q8
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q8
                </h1>
                <div className='tableauPlaceholder' id='viz1677669541566'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q8Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q8Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q8Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              <section>
                {/* 
              ==================================================
              TAX Q9
              ================================================== 
              */}
                <h1 id="table-title">
                  TAX Q9
                </h1>
                <div className='tableauPlaceholder' id='viz1677669573974'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q9Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q9Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q9Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q6
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q6
                </h1>
                <div className='tableauPlaceholder' id='viz1677669622268'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q6Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q6Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q6Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              TAX Q10
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q10
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q10Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q10Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q10Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q11
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q11
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q11Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q11Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q11Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              TAX Q4
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q4
                </h1>
                <div className='tableauPlaceholder' id='viz1677669692853'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q4Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q4Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q4Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q3
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q3
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q3Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q3Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q3Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              TAX Q2
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q2
                </h1>
                <div className='tableauPlaceholder' id='viz1677669692853'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q2Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q2Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q2Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              TAX Q5
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  TAX Q5
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q5Tax/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q5Tax/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q5Tax/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
          </section>

          {/* SECTION SURVEI KETERJANGKAUAN HARGA PROPERTI */}

          <section className='survey'>
            <h1 id="title">
              3. Survei Keterjangkauan Harga Properti
            </h1>
            <section className='tableauRow' style={{ paddingTop: "2rem" }}>
              {/* 
              ==================================================
              Property Q4
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Property Q4
                </h1>
                <div className='tableauPlaceholder' id='viz1677649923487'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q4Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q4Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q4Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              Property Q5
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Property Q5
                </h1>
                <div className='tableauPlaceholder' id='viz1677669159432'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q5Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q5Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q5Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q6
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                  Property Q6
                </h1>
                <div className='tableauPlaceholder' id='viz1677669398459'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q8Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q8Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q8Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              Property Q2
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                Property Q2
                </h1>
                <div className='tableauPlaceholder' id='viz1677669451692'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q2Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q2Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q2Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q7
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                Property Q7
                </h1>
                <div className='tableauPlaceholder' id='viz1677669541566'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q7Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q7Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q7Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              <section>
                {/* 
              ==================================================
              Property Q3
              ================================================== 
              */}
                <h1 id="table-title">
                Property Q3
                </h1>
                <div className='tableauPlaceholder' id='viz1677669573974'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q3Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q3Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q3Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q9
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                Property Q9
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q9Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q9Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q9Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              Property Q11
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                Property Q11
                </h1>
                <div className='tableauPlaceholder' id='viz1677669622268'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q11Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q11Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q11Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
            <section className='tableauRow'>
              {/* 
              ==================================================
              Property Q10
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                Property Q10
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q10Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q10Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q10Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
              {/* 
              ==================================================
              Property Q8
              ================================================== 
              */}
              <section>
                <h1 id="table-title">
                Property Q8
                </h1>
                <div className='tableauPlaceholder' id='viz1677669662018'>
                  <noscript>
                    <a href='#'>
                      <img
                        alt='Dashboard 1 '
                        src='https://public.tableau.com/static/images/Q1/Q8Property/Dashboard1/1_rss.png'
                        style={{ border: 'none' }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz">
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Q8Property/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param
                      name='static_image'
                      value='https://public.tableau.com/static/images/Q1/Q8Property/Dashboard1/1.png'
                    />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='layout' value='horiz' />
                  </object>
                </div>
              </section>
            </section>
          </section>
        </div>
        <style>
          {`
              .survey {
                padding-bottom: 5rem;
              }
              #title {
                font-size: 36px;
                font-weight: bold;
                display: flex;
                justify-content: center;
              }

              #table-title {
                font-size: 18px; 
                font-weight: bold;
                display: flex;
                justify-content: center;
              }

              .tableauRow {
                padding-top: 2rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 50px;
              }

              .tableauPlaceholder {
                flex: 1;
                margin-right: 10px;
              }

              .tableauViz {
                display: none;
                height: 330px;
                width: 500px;
              }
            `}
        </style>
      </div>
    </>
  );
};

export default Survei;
