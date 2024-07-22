import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import imageDani from '../assets/img/560216.png';
import {kelasTerbaru, dataSwiper} from '../data/index';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typewriter from 'typewriter-effect';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Faq from '../components/Faq';

const Home = () => {
  let navigate = useNavigate();
  const [autoStart, setAutoStart] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoStart(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const openWhatsapp = (noHp) => {
    window.open(`https://wa.me/${noHp}`, '_blank');
  };
  return (
    <div className="homePage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
            <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Halo semua 👋🏽 saya <br /><span><Typewriter
              options={{
                strings: ['Dani Ali Cahyadi'],
                autoStart: autoStart,
                loop: true,
              }}
            /></span><h4>Junior Front End Developer</h4>
            </h1>
            <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Saya lahir di Bekasi, 2 Februari 2001. Saya lulusan S1 Sistem Informasi dari Universitas Pembangunan Nasional Veteran Jakarta pada tahun 2022 dengan IPK 3,71.</p>
            <button onClick={()=> openWhatsapp('6281289124536')} className="btn btn-danger text-white btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Hubungi Saya</button>
            {/* <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Lihat Promo</button> */}
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 text-center">
            <img src={imageDani} alt="" className="animate__animated animate__fadeInUp" style={{ width: '50%', height: 'auto' }}  />
            </Col>
          </Row>
        </Container>
      </header>
      {/* <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Project Terbaru</h1>
            <p className="text-center">Beberapa project yang pernah saya kerjakan ketika memulai karir di dunia web developer hingga saat ini.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas, index)=>{
              return(
                <Col key={index} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top-2" />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">{kelas.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-outline-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/kelas")}>
                Lihat Semua Project <i className="fa-solid fa-chevron-right ms-1"></i>
                </button>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold my-5">Technology</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dataSwiper.map((data, index)=> {
              return(
                <SwiperSlide key={index}>
                  <img src={data.image} alt="javascript" width="50" height="40"/>
                </SwiperSlide>
              )
            })}
          </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home