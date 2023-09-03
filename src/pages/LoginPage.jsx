import React from "react";
import { styled } from "styled-components";

const Container = styled.section``;

const Content = styled.div``;

const Center = styled.div``;

const LogoOne = styled.img``;

const SignUpLink = styled.a``;

const Description = styled.p``;

const LogoTwo = styled.img``;

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
          <SignUpLink>지금 가입!</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오. 디즈니 플러스 가격은
            다음주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src="images/cta-logo-two.png" alt="logo-two" />
        </Center>
      </Content>
    </Container>
  );
};

export default LoginPage;
