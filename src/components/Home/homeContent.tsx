import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const HomeContent = () => {
  const [cards, setCards] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents a new line in the textarea
      setCards([...cards, `Card ${cards.length + 1}`]); // Adds a new card
    }
  };
  return (
    <Container className="vh-100 d-flex flex-column rounded-5 border p-1 box-shadow">
      <div className="flex-grow-1 overflow-auto">
        {cards.map((card, index) => (
          <Card key={index} className="mb-2">
            <Card.Body>{card}</Card.Body>
          </Card>
        ))}
      </div>
      <Row className="justify-content-center">
        <Col xl={10}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder={"Input Your Profile Data"}
              onKeyDown={handleKeyDown}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
