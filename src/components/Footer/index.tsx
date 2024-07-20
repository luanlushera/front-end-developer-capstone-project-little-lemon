import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              <HashLink to="/">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#">Menu</HashLink>
            </li>
            <li>
              <HashLink to="/bookings">Reservations</HashLink>
            </li>
            <li>
              <HashLink to="/#">Order Online</HashLink>
            </li>
            <li>
              <HashLink to="/#">Login</HashLink>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                1 Hacker WyMenlo Park <br />
                <br />
                CA 94025 <br />
                USA
              </address>
            </li>
            <li>
              <a href="tel:+12345678910" target="_blank" rel="external">
                +1 23 4567-8910
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a
                href="https://facebook.com/luannguyen252"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/design.luannguyen"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/luannguyen252"
                target="_blank"
                rel="external"
              >
                Twitter
              </a>
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <p>
          &copy; 2024 Little Lemon by
          <a
            href="https://luannguyen.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luan Nguyen
          </a>
          . All rights reserved.
        </p>
      </Copyright>
    </Container>
  );
};

export default Footer;
