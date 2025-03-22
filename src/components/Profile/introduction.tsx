import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Introduction = () => {

  const sectionRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibleRatio = entry.intersectionRatio;
        setOpacity(visibleRatio);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      style={{ opacity, transition: "opacity 0.1s ease-out" }}
    >
      <div className="fit-device">
        <Container>
          <Row className="justify-content-between h-100">
            <Col xs={8} className="d-flex flex-column justify-content-center">
              <h1 className="text-big">THIS IS MY PROFILE</h1>
              <h1 className="text-big">MY NAME IS JASPER</h1>
              <p className="text-default">MY NAME IS JASPER</p>
              <div className="mt-5">
                <button className="header-button pointer-cursor">
                  <h5 className="fw-bold m-0">Press me to Login</h5>
                </button>
                <a href="/login" className="text-white d-inline-block ms-5">
                  <h5 className="fw-bold m-0 text-white">Press me to Login</h5>
                </a>
              </div>
            </Col>
            <Col xs={4}>
              <div className="custom-card white-box-shadow"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Introduction;
