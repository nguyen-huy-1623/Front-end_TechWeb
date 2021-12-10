import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/gdTPC7c/pexels-jessica-lynn-lewis-583842.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG KÝ TÀI KHOẢN</Title>
        <Form>
          <Input placeholder="Họ tên" />
          {/* <Input placeholder="last name" /> */}
          {/* <Input placeholder="username" /> */}
          <Input placeholder="Email" />
          <Input placeholder="Mật khẩu" />
          {/* <Input placeholder="confirm password" /> */}
          <Input placeholder="Điện thoại"/>
          <Agreement>
            Bằng việc đăng ký, bạn đã đồng ý với chúng tôi về <b>CHÍNH SÁCH BẢO MẬT</b>
          </Agreement>
          <Button>ĐĂNG KÝ</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
