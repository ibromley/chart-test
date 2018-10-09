import React, { Component } from 'react';
import PieChart from '../PieChart';
import { Container, Row, Col} from 'reactstrap';

class Another extends Component {

    render() {
        return (
            <Container>
                <h1>Another</h1>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                  <PieChart/>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                  <PieChart/>
              </Col>
            </Row>
          </Container>
        );
    }

}

export default Another;