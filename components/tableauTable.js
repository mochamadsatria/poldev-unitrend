export default function tableauTable({title,url,param}) {
  return <section>
    {/* <h1 id="table-title">
      {title}
    </h1> */}
    <div className='tableauPlaceholder' id='viz1677649923487'>
      <noscript>
        <a href='#'>
          <img
            alt='Dashboard 1 '
            src={url}
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz">
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value={param} />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param
          name='static_image'
          value={url}
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
    <style>{` 
      .tableauPlaceholder {
        border: solid #E7E7E7;
        border-radius: 12px;

      }

      .tableauViz {
        display: none;
        height: 300px;
        width: 400px;
      }

      #table-title {
        font-size: 18px; 
        font-weight: bold;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </section>
}