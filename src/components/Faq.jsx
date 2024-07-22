import React from 'react'
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import {faq} from '../data/index';

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
          <h2 className="text-center fw-bold animate__animated animate__fadeInUp">Pertanyaan yang sering ditanyakan</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq.map((data, index)=>{
            return(
              <Col key={index} className="animate__animated animate__fadeInUp animate__delay-1s">
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
        </Row>
      </Container>
      
    </div>
  )
}

export default Faq