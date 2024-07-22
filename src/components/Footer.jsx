import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding.</h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sapiente ipsum tenetur magnam minima dolore, officia error dolorem soluta quos.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 812-8912-4536</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-reguler fa-envelope"></i>
                <p className="m-0">danialicahyadii@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="technology">Technology</Link>
            <Link to="contact">Contact</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info Menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe...." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <a target='_blank' href="https://www.instagram.com/danialicahyadi"><span className="fw-bold">Dani Ali Cahyadi</span></a>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer