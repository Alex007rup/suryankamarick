import android from "../../assets/icons/android.svg";
import figma from "../../assets/icons/figma.svg";
import linux from "../../assets/icons/linux.svg";
import github from "../../assets/icons/github.svg";
import git from "../../assets/icons/git.svg";
import cpp from "../../assets/icons/cpp.svg";
import java from "../../assets/icons/java.svg";
import python from "../../assets/icons/python.svg";
import html from "../../assets/icons/html.svg";
import css1 from '../../assets/icons/css.svg';
import js from "../../assets/icons/js.svg";
import typescript from "../../assets/icons/typescript.svg";
import react from "../../assets/icons/react.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import expressjs from "../../assets/icons/expressjs.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import mysql from "../../assets/icons/mysql.svg";
import tailwind from "../../assets/icons/tailwind.svg";

import styled, { keyframes, css } from "styled-components";

function InfinityScrollHorizontal() {
  const row1 = [
    { src: android, name: "Android" },
    { src: figma, name: "Figma" },
    { src: linux, name: "Linux" },
    { src: typescript, name: "TypeScript" },
    { src: mongodb, name: "MongoDB" },
    { src: github, name: "GitHub" },
    { src: git, name: "Git" },
    { src: mysql, name: "MySQL" },
    { src: tailwind, name: "Tailwind" }
  ];

  const row2 = [
    { src: cpp, name: "C++" },
    { src: java, name: "Java" },
    { src: python, name: "Python" },
    { src: html, name: "HTML" },
    { src: css1, name: "CSS" },
    { src: js, name: "JavaScript" },
    { src: react, name: "React" },
    { src: nodejs, name: "Node.js" },
    { src: expressjs, name: "Express.js" }
  ];

  return (
    <>
      <Marquee>
        <MarqueeGroup>
          {row1.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el.src} />
              <Label>{el.name}</Label>
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el.src} />
              <Label>{el.name}</Label>
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      <Marquee>
        <MarqueeGroup2>
          {row2.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el.src} />
              <Label>{el.name}</Label>
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {row2.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el.src} />
              <Label>{el.name}</Label>
            </ImageGroup>
          ))}
        </MarqueeGroup2>
      </Marquee>
    </>
  );
}

export default InfinityScrollHorizontal;

const Marquee = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 1500px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  padding: 10px;
`;

const Label = styled.div`
  margin-top: 8px;
  font-size: 1rem;
  color: #ecf0f1;
  text-align: center;
`;