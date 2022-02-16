import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'

import { Col, Container, Row } from 'reactstrap';
import TopList from '../components/Tmbdb/TopList';
import Link from 'next/link';


const Home: NextPage= () => {
    return (
        <Container>
            <Col xs={2}><Link href="/watch-list">Watchlist</Link></Col>
            <Row>
                <TopList/>
            </Row>
        </Container>
    )
}

export default Home
