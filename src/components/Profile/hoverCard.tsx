import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const HoverCard = () => {
  const gardenBackground = "/img/garden-background.svg";

  return (
    <div className="skill-card">
      <Image
        src={gardenBackground}
        className="skill-card-img "
        fill={true}
        objectFit="cover"
        alt=""
      />
      <div className="d-flex flex-column h-100 p-2">
        <div className="d-flex position-relative">
          <div className="skill-tag">
            <p>hias</p>
          </div>
          <div className="rounded-circle bg-light p-1 ms-auto position-absolute end-0">
            <MoveUpRight size={32} color="black" />
          </div>
        </div>
        <div className="flex-grow-1"></div>
        <div>
          <h1>Hi Garden</h1>
          <p>garden is good</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
