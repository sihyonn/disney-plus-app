import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavWrapper = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 36px;
  background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 3;
  letter-spacing: 16px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`;

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // 검색에 타이핑 할때마다
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <NavWrapper show={show.toString()}>
      <Logo>
        <img
          src="images/logo.svg"
          alt="디즈니플러스 로고"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>
      {pathname === "/" ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <Input
          value={searchValue}
          onChange={handleChange}
          className="nav__input"
          type="text"
          placeholder="검색할 키워드를 입력하세요"
        />
      )}
    </NavWrapper>
  );
};

export default Nav;
