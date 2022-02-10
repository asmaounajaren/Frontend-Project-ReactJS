import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FATemplates.</Logo>
        <Desc>
        Choose from our online shop templates. Explore items created by 
        our global community of independent designers and developers, 
        confident they're hand-reviewed by us.
        </Desc>
        <SocialContainer>
          <SocialIcon color="4267B2">
          <a href="https://facebook.com" style={{textDecoration:"none",color:"white"}}><Facebook /></a>
          </SocialIcon>
          <SocialIcon color="E4405F">
          <a href="https://instagram.com" style={{textDecoration:"none",color:"white"}}><Instagram /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <a href="https://twitter.com" style={{textDecoration:"none",color:"white"}}><Twitter /></a>
          </SocialIcon>
          <SocialIcon color="E60023">
          <a href="https://Pinterest.com" style={{textDecoration:"none",color:"white"}}><Pinterest /></a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Templates</ListItem>
          <ListItem>Categories</ListItem>
          <ListItem>Professional</ListItem>
          <ListItem>Business</ListItem>
          <ListItem>Marketing</ListItem>
          <ListItem>Ecommerce</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 80 000 Tiznit, Sous Massa
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +212 00 00 00 000
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> fzwaocoders@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
