import {NextPage} from "next";
import {Col, Container} from "reactstrap";
import WatchListComponent from "../components/Tmbdb/WatchList";
import Link from "next/link";
const WatchList: NextPage = () => {
    return (
        <Container>
            <Col xs={2}><Link href="/">Home</Link></Col>
            <WatchListComponent />
        </Container>
    )
}

export default WatchList
