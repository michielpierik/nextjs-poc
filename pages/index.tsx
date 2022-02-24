import type { NextPage } from 'next'

import { Col  } from 'reactstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import MainLayout from '../layouts/MainLayout';
import React from 'react';

const TopList = dynamic(() => import('../components/Tmbdb/TopList'))

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Col xs={2}><Link href="/watch-list">Watchlist</Link></Col>
            <TopList/>
        </MainLayout>
    )
}

export default Home
