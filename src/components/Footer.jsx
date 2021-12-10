import {
  Facebook,
  Favorite,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
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

const Thankful = styled.div`
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
        <Logo>MuseTech</Logo>
        <Desc>
          Với mục tiêu hướng tới các bạn trẻ hiện nay, MuseTech đem lại các sản
          phẩm chất lượng với giá cả cực kỳ hợp lý, phù hợp với nhu cầu sinh
          viên Việt Nam trong thời kỳ hiện đại.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Đừng dẫn hữu ích</Title>
        <List>
          <ListItem>Trang chủ</ListItem>
          <ListItem>Giỏ hàng</ListItem>
          <ListItem>Đăng ký</ListItem>
          <ListItem>Đăng nhập</ListItem>
          <ListItem>Macbook</ListItem>
          <ListItem>Iphone</ListItem>
          <ListItem>Laptop Gaming</ListItem>
          <ListItem>Laptop văn phòng</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Thông tin liên hệ</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          14/08 Cách Mạng Tháng 8, TP. Hồ Chí Minh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +889 247 889
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> musetech@gmail.com
        </ContactItem>
        <Thankful>
          <Favorite style={{ marginRight: "10px" }}/> Trân thành cảm ơn quý khách
        </Thankful>
      </Right>
    </Container>
  );
};

export default Footer;
