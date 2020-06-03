import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonDark from "../components/MaterialButtonDark";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

function Untitled(props) {
  return (
    <Container>
      <Image3StackStack>
        <Image3Stack>
          <Image3
            src={require("../assets/images/Google-IO-2019-1281.jpg")}
          ></Image3>
          <Image4
            src={require("../assets/images/Google-IO-2019-1281.jpg")}
          ></Image4>
          <Image
            src={require("../assets/images/io19_designguide_hero_A_Share.png")}
          ></Image>
          <Rect>
            <Rect2 style={{ margin: "null" }}></Rect2>
            <Rect3 style={{ margin: "null" }}></Rect3>
            <MaterialHelperTextBox
              inputStyle="Input"
              style={{
                height: 122,
                width: 698,
                position: "absolute",
                left: 108,
                top: 0
              }}
              stackedLabel="Enter the URL"
              inputStyle="              https://"
            ></MaterialHelperTextBox>
            <MaterialUnderlineTextbox
              inputStyle="Placeholder"
              style={{
                height: 59,
                width: 698,
                position: "absolute",
                left: 144,
                top: 186,
                borderWidth: 1,
                borderColor: "#000000",
                borderStyle: "solid"
              }}
              inputStyle="                  short url"
            ></MaterialUnderlineTextbox>
            <MaterialButtonDark
              style={{
                height: 58,
                width: 107,
                position: "absolute",
                left: 879,
                top: 186
              }}
            ></MaterialButtonDark>
            <MaterialButtonSuccess
              style={{
                height: 61,
                width: 178,
                position: "absolute",
                left: 932,
                top: 61,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "rgba(74,144,226,1)",
                borderStyle: "solid",
                boxShadow: "5px 5px 12px  0.19px rgba(0,0,0,1) "
              }}
            ></MaterialButtonSuccess>
          </Rect>
        </Image3Stack>
        <UrlShortnerStack>
          <UrlShortner>URL Shortner</UrlShortner>
          <PoweredByDscTiet>Powered By DSC TIET</PoweredByDscTiet>
        </UrlShortnerStack>
      </Image3StackStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow:hidden;
`;

const Image3 = styled.img`
  top: 748px;
  left: 0px;
  width: 1336px;
  height: 638px;
  position: absolute;
  transform: [
      {
      rotate: "-10.88372392699418deg",
      
    },
      
    ];
  object-fit: contain;
`;

const Image4 = styled.img`
  top: 1029px;
  left: 457px;
  width: 1336px;
  height: 638px;
  position: absolute;
  transform: [
      {
      rotate: "138.9433829568595deg",
      
    },
      
    ];
  object-fit: contain;
`;

const Image = styled.img`
  top: 0px;
  left: 1250px;
  width: 1082px;
  height: 841px;
  position: absolute;
  transform: [
      {
      rotate: "-13.849573647532091deg",
      
    },
      
    ];
  object-fit: contain;
`;

const Rect = styled.div`
  width: 1272px;
  height: 330px;
  position: absolute;
  background-color: rgba(74,144,226,1);
  border-radius: 11px;
  overflow: hidden;
  flex-direction: column;
  top: 628px;
  left: 708px;
  display: flex;
  box-shadow: 5px 5px 10px  0.14px rgba(0,0,0,1) ;
`;

const Rect2 = styled.div`
  flex: 0.5 1 0%;
  background-color: rgba(226, 226, 226,1);
  margin-left: 0px;
  opacity: 0;
  display: flex;
  flex-direction: column;
`;

const Rect3 = styled.div`
  flex: 0.5 1 0%;
  background-color: rgba(245, 245, 245,1);
  margin-left: 0px;
  opacity: 0;
  display: flex;
  flex-direction: column;
`;

const Image3Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 2332px;
  height: 1667px;
  position: absolute;
`;

const UrlShortner = styled.span`
  font-family: Calibri;
  top: 0px;
  left: 0px;
  position: absolute;
  color: #121212;
  height: 117px;
  width: 545px;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
`;

const PoweredByDscTiet = styled.span`
  font-family: Roboto;
  top: 101px;
  left: 267px;
  position: absolute;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  height: 25px;
  width: 189px;
`;

const UrlShortnerStack = styled.div`
  top: 362px;
  left: 580px;
  width: 545px;
  height: 126px;
  position: absolute;
`;

const Image3StackStack = styled.div`
  width: 2332px;
  height: 1667px;
  margin-top: -304px;
  margin-left: -418px;
  position: relative;
`;

export default Untitled;
