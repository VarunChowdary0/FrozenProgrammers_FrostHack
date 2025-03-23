import React from 'react'

const Wether:React.FC = () => {
  return (
    <div className=' bg-white/0 h-[300px] w-[400px] relative'>
      <iframe className=' h-[365px] w-[500px] overflow-hidde ' srcDoc={`
        <script>
        (function(d, s, id) {
            if (d.getElementById(id)) {
                if (window.__TOMORROW__) {
                    window.__TOMORROW__.renderWidget();
                }
                return;
            }
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            js.id = id;
            js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'tomorrow-sdk');
        </script>

        <div class="tomorrow"
           data-location-id="132132"
           data-language="EN"
           data-unit-system="METRIC"
           data-skin="light"
           data-widget-type="summary"
           style="padding-bottom:22px;position:relative;"
        >
          <a
            href="https://www.tomorrow.io/weather-api/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%;"
          >
            <img
              alt="Powered by the Tomorrow.io Weather API"
              src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
              width="250"
              height="18"
            />
          </a>
        </div>
      `}></iframe>
      <div className=' absolute top-0 bottom-[-30px] right-[-100px] left-0 bg-white/0'></div>
    </div>
  )
}

export default Wether