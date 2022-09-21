import 'styles/globals.scss';
import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(302, { Location: '/' });
    appContext.ctx.res.end();
    return;
  }

  return { ...appProps };
};

export default MyApp;
