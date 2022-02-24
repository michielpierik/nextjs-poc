import {Col, Container} from "reactstrap";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import MainLayout from '../layouts/MainLayout';

const WatchListComponent = dynamic(() => import('../components/Tmbdb/WatchList'))
const WatchList: NextPageWithLayout = () => {
    return (
        <Container>
            <Col xs={2}><Link href="/">Home</Link></Col>
            <WatchListComponent />
        </Container>
    )
}

WatchList.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default WatchList
