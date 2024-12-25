import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useEffect } from "react";

const FACEBOOK_PIXEL_ID = "1617813329066715";

function FacebookPixel() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.fbq) {
      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];
      window.fbq("init", FACEBOOK_PIXEL_ID);
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt="Facebook Pixel"
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </Head>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <FacebookPixel />
      <Component {...pageProps} />
    </Layout>
  );
}
