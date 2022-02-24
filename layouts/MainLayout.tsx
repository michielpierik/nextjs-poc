import React from 'react';
import { Container, Row } from 'reactstrap';

const MainLayout: React.FC = ({ children }) => (
    <Container>
        <Row>
            {children}
        </Row>
    </Container>
);
export default MainLayout;
