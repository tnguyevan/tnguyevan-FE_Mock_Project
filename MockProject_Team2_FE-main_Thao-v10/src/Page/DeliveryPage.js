import React from 'react';
import { Container } from 'react-bootstrap';
import DeliveryContainer from '../Container/DeliveryContainer';

function DeliveryPage(props) {
    return (
        <div>
            <Container>
                <DeliveryContainer/>
            </Container>
        </div>
    );
}

export default DeliveryPage;