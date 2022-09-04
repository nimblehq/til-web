import { Html, Head, Main, NextScript } from 'next/document';

import { getAssetUrl } from 'helpers/url';

function Document() {
  const renderFontStyle = () => (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Neuzeit S';
            font-weight: 500;
            src:
              url('${getAssetUrl('/til/assets/fonts/NeuzeitS-Book.ttf')}'),
              url('${getAssetUrl(
                '/til/assets/fonts/NeuzeitS-Book.woff2'
              )}') format('woff2'),
              url('${getAssetUrl('/fonts/NeuzeitS-Book.woff')}') format('woff');
            font-display: swap;
          }

          @font-face {
            font-family: 'Neuzeit S';
            font-weight: bold;
            src:
              url('${getAssetUrl('/til/assets/fonts/NeuzeitS-BookHeavy.ttf')}'),
              url('${getAssetUrl(
                '/til/assets/fonts/NeuzeitS-BookHeavy.woff2'
              )}') format('woff2'),
              url('${getAssetUrl(
                '/til/assets/fonts/NeuzeitS-BookHeavy.woff'
              )}') format('woff');
            font-display: swap;
          }
        `,
      }}
    />
  );

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="What Nimble has learned today" />
        <link rel="icon" href="/til/favicon.ico" />
        {renderFontStyle()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
