import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Faq from '../components/Faq'

const SyaratKetentuan = () => {
  const playlistId = '3wtRcBveM2RfAEchIclj34';

  return (
    <div className="contactPage">
      <div className="contact">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Lagu Favorit</h1>
            <p className="text-center animate__animated animate__fadeInUp">Sedikit Playlist untuk penyegaran hidup, Lets goo!!!</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-5 px-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="80%"
                height="700"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default SyaratKetentuan