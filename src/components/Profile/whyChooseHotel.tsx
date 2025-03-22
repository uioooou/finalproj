import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const WhyChooseHotel = () => {
  const reasonList = [
    {
      label: "Hight",
      desc: "asdadasd",
    },
    {
      label: "Hight",
      desc: "asdadasd",
    },
    {
      label: "Hight",
      desc: "asdadasd",
    },
    {
      label: "Hight",
      desc: "asdadasd",
    },
  ];

  return (
    <section id="chooseHotel">
      <div className="fit-device py-5">
        <Container>
          <h1 className="text-uppercase">Why Choose Our Hotel</h1>
          <p className="text-default">
            if u are happy,feel free to leave a review to us!
          </p>
          <Row className="mt-5 g-5">
            {reasonList.map((content, index) => {
              return (
                <Col key={index} md={6}>
                  <div className="p-5 reason-card text-light">
                    <Row className="justify-content-between">
                      <Col xs={8}>
                        <h1 className="text-uppercase">{content.label}</h1>
                        <p className="text-default">{content.desc}</p>
                      </Col>
                      <Col xs={3} className="d-flex justify-content-center align-items-center">
                        <Image
                          src={"/icon/bell.png"}
                          className="skill-card-img "
                          width={80}
                          height={80}
                          alt=""
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default WhyChooseHotel;
