import { useReducer } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import { updateTimes, initializeTimes } from "../../utils/temp";

export default function Bookingpage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Container>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </Container>
  );
}
