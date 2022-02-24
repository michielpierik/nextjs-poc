import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import WatchListProvider from '../components/Tmbdb/WatchListProvider';
import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <WatchListProvider>
            {getLayout(<Component {...pageProps} />)}
        </WatchListProvider>
    );
}

export default MyApp
