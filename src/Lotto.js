import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.div`
  font-size: 75px;
  text-align: center;
  color: gold;
  margin-top: 150px;
  margin-bottom: 100px;
  font-weight: 600;
  text-shadow: 0 0 5px gold;

  @media (max-width: 720px) {
    margin-top: 100px;
    font-size: 40px;
  }
  @media (max-width: 980px) {
    font-size: 50px;
  }
`;

const NumberContainer = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 720px) {
    width: 100vw;
    height: 50px;
  }
`;

const NumberBall = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 50%;
  background: radial-gradient(circle at 20px 20px, #fcc419, rgba(0, 0, 0, 0.8));

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;
  color: #fff9db;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 720px) {
    width: 50px;
    height: 50px;

    font-size: 24px;
    margin-right: 10px;

    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
`;

const GeneratorButton = styled.div`
  width: 200px;
  height: 50px;
  background-color: gold;

  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 2px black;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 600;

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 720px) {
    bottom: 100px;
  }
`;

const Lotto = () => {
  let numbers = [];
  const numberGenerator = () => {
    return Math.floor(Math.random() * 44 + 1);
  };
  for (let i = 0; i < 6; i++) {
    let number = numberGenerator();
    while (numbers.indexOf(number) !== -1) {
      number = numberGenerator();
    }
    numbers.push(number);
  }
  numbers.sort((a, b) => a - b);

  return (
    <>
      <Title>Lotto Number Generator</Title>
      <NumberContainer>
        {numbers.map((num) => (
          <NumberBall key={num}>{num}</NumberBall>
        ))}
      </NumberContainer>
      <GeneratorButton>
        <Link to="/">새로운 번호 추출하기</Link>
      </GeneratorButton>
    </>
  );
};

export default Lotto;
