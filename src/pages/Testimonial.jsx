import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Faq from '../components/Faq'
import {testimonial} from '../data/index'

const Testimonial = () => {
  return (
    <div className="technologyPage">
      <div className="technology">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold animate__animated animate__fadeInUp">Technology</h1>
            <p className="text-center animate__animated animate__fadeInUp">Teknologi yang saya gunakan berdasarkan pengalaman project.</p>
            </Col>
          </Row>
          {/* <Row className="row-cols-lg-3 row-cols-1 animate__animated animate__fadeInUp">
          {testimonial.map((data, index)=> {
              return(
                <Col key={index} className="mb-5">
                  <p className="desc shadow-sm">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row> */}
        </Container>
      </div>
    </div>
  )
}

export default Testimonial