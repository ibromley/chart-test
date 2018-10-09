import React, { Component } from 'react';
import MyChart from '../MyChart';
import PieChart from '../PieChart';
import { Container, Row, Col} from 'reactstrap';
import ServChart from '../ServChart';

class Biking extends Component {

    render() {
        return (
            <Container fluid={true}>
      
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                  <MyChart/>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                  <PieChart/>
              </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12}>
                    <ServChart/>
                </Col>
            </Row>
          </Container>
        );
    }

}

export default Biking;