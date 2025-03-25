import { Star } from "lucide-react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ReviewUs = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const StarRating = (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setRating(star)}
        >
          <Star size={50} color={star <= (hover || rating) ? "gold" : "gray"} />
        </span>
      ))}
    </div>
  );

  return (
    <section>
      <div className="fit-device">
        <Container className="d-flex flex-column justify-content-center h-100">
          <h1 className="text-uppercase">Put Your Review</h1>
          <p className="text-default">
            if u are happy,feel free to leave a review to us!
          </p>
          <Row>
            <Col xs={12} xl={8}>
              <div className="review-card p-4 mt-5 text-light">
                {StarRating}

                <Form className="mt-5">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h5>Email Address</h5>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <h5>Review Comment</h5>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
                <div className="d-flex">
                  <button className="header-button pointer-cursor ms-auto">
                    <h5 className="fw-bold m-0">Submit</h5>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ReviewUs;
