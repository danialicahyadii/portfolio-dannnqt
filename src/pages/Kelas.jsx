import React from 'react'
import { Button, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import {semuaKelas} from '../data/index';
import Faq from '../components/Faq';

const Kelas = () => {
  const viewProject = (e) => {
    window.open(e.target.value, '_blank');
  }
  const renderTooltip = (props, toolTipTitle) => (
    <Tooltip id="button-tooltip" {...props}>
      {toolTipTitle}
    </Tooltip>
  )
  return (
    <div className="portfolioPage">
      <div className="portfolio">
      {/* <div className="portfolio min-vh-100"> */}
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp">All Project</h1>
            <p className="text-center animate__animated animate__fadeInUp">Project yang pernah saya kerjakan.</p>
            </Col>
          </Row>
          <Row>
          {semuaKelas.map((kelas, index)=>{
                return(
                  <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                    <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top-2" />
                    <div className="star mb-2 px-3">
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, kelas.star1Title)}
                      >
                      <i className={kelas.star1}></i>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, kelas.star2Title)}
                      >
                      <i className={kelas.star2}></i>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, kelas.star3Title)}
                      >
                      <i className={kelas.star3}></i>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, kelas.star4Title)}
                      >
                      <i className={kelas.star4}></i>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, kelas.star5Title)}
                      >
                      <i className={kelas.star5}></i>
                      </OverlayTrigger>
                    </div>
                    <h5 className="mb-4 px-3">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                      
                      {kelas.link ? (
                        <button onClick={(e) => viewProject(e)} value={kelas.link} className="btn btn-danger rounded-1">{kelas.buy}</button>
                      ) : (
                        <button onClick={() => navigate("/project")} className="btn btn-danger rounded-1">Download File</button>
                      )}
                    </div>
                  </Col>
                )
              })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Kelas