import { FC } from "react";
import Button from "../Button";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Container, Content, Image } from "./styles";
import restaurant_food from "../../assets/restaurantfood.jpg";

const CallToAction: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <p className="lead-txt">
          {`We are a family-owned Mediterranean restaurant that specializes in presenting traditional recipes with a contemporary flair.`}
        </p>
        <Button
          onClick={() => navigate("/bookings")}
          aria-label="Go to reservation table page."
        >
          Reserve a Table
        </Button>
      </Content>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;
