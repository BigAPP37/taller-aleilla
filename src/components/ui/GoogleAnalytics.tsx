import Script from "next/script";

const GA_ID = "G-32894MD9VZ";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Consent Mode v2 — arranca denegado
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'wait_for_update': 500
          });

          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
