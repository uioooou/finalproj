import { Container } from "react-bootstrap";
import HoverCard from "./hoverCard";
import { useState } from "react";

const HotelRoomReview = () => {
  const CardList = [
    {
      id: 1,
      label: "Python",
      desc: "hi",
    },
    {
      id: 2,
      label: "Python",
      desc: "hi",
    },
    {
      id: 3,
      label: "Python",
      desc: "hi",
    },
    {
      id: 4,
      label: "Python",
      desc: "hi",
    },
    {
      id: 5,
      label: "Python",
      desc: "hi",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <section>
      <div className="fit-device">
        <Container className="d-flex flex-column justify-content-center h-100 mt-5">
          <h1 className="text-uppercase">Technologies and Skills</h1>
          <p className="text-default">
            The knowledge and skills i get from the jobs
          </p>
          <div className="d-flex mt-5 overflow-auto w-100 box-shadow-x">
            {CardList.map((content) => (
              <div
                key={content.id}
                className={selectedCard == content.id ? "card-active sample-card" : "sample-card"}
                onClick={() => setSelectedCard(content.id)}
              >
                <HoverCard />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HotelRoomReview;
