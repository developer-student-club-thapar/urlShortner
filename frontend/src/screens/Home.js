import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialButtonDark from "../components/MaterialButtonDark";

function HomeScreen(props) {
  return (
    <Container>
      <ButtonStack>
        <Button>
          <ButtonOverlay></ButtonOverlay>
        </Button>
        <Image>
          <Rect4Stack>
            <Rect4>
              <PoweredByDscTiet>Powered By DSC TIET</PoweredByDscTiet>
            </Rect4>
            <UrlShortner>URL Shortner</UrlShortner>
          </Rect4Stack>
          <Rect gradientImage="Gradient_BTNZaAY.png">
            <Rect2></Rect2>
            <Rect3></Rect3>
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
            <MaterialButtonSuccess
              style={{
                height: 61,
                width: 178,
                position: "absolute",
                left: 879,
                top: 61,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "rgba(74,144,226,1)",
                borderStyle: "solid",
                boxShadow: "5px 5px 12px  0.19px rgba(0,0,0,1) "
              }}
            ></MaterialButtonSuccess>
            <MaterialButtonDark
              style={{
                height: 58,
                width: 107,
                position: "absolute",
                left: 879,
                top: 186,
                borderWidth: 1,
                borderColor: "rgba(74,144,226,1)",
                elevation: 0,
                borderStyle: "solid",
                boxShadow: "5px 5px 0px  0.12px rgba(0,0,0,1) "
              }}
            ></MaterialButtonDark>
          </Rect>
        </Image>
      </ButtonStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button = styled.div`
  top: 385px;
  left: 1232px;
  width: 178px;
  height: 61px;
  position: absolute;
  background-color: #E6E6E6;
  border: none;
`;

const Image = styled.div`
  top: 0px;
  left: 0px;
  width: 1940px;
  height: 1080px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/background.png")});
  background-size: cover;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 443px;
  height: 117px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const PoweredByDscTiet = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  height: 25px;
  width: 189px;
  margin-top: 59px;
  margin-left: 254px;
`;

const UrlShortner = styled.span`
  font-family: Calibri;
  top: 0px;
  left: 40px;
  position: absolute;
  color: #121212;
  height: 117px;
  width: 511px;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
`;

const Rect4Stack = styled.div`
  width: 551px;
  height: 117px;
  margin-top: 75px;
  margin-left: 113px;
  position: relative;
`;

const Rect = styled.div`
  width: 1256px;
  height: 346px;
  border-radius: 11px;
  overflow: hidden;
  flex-direction: column;
  background-color: rgba(23,102,192,0.68);
  margin-top: 132px;
  margin-left: 300px;
  position: relative;
  display: flex;
  box-shadow: 5px 5px 10px  0.14px rgba(0,0,0,1) ;
`;

const Rect2 = styled.div`
  flex: 0.43999999999999995 1 0%;
  background-color: rgba(226, 226, 226,1);
  margin-left: 0px;
  opacity: 0;
  display: flex;
  flex-direction: column;
`;

const Rect3 = styled.div`
  flex: 0.56 1 0%;
  background-color: rgba(245, 245, 245,1);
  margin-left: 0px;
  opacity: 0;
  flex-direction: column;
  display: flex;
`;

const ButtonStack = styled.div`
  width: 1940px;
  height: 1080px;
  margin-left: -10px;
  position: relative;
`;

export default HomeScreen;
