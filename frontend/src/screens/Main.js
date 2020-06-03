import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import MaterialButtonSuccess from '../components/MaterialButtonSuccess';
import MaterialHelperTextBox from '../components/MaterialHelperTextBox';

function HomeScreen() {
  return (
    <Container>
      <Image3StackStack>
        <Image3Stack>
          <Image3
            src={require('../assets/images/Google-IO-2019-1281.jpg')}
          ></Image3>
          <Image4
            src={require('../assets/images/Google-IO-2019-1281.jpg')}
          ></Image4>
          <Image
            src={require('../assets/images/io19_designguide_hero_A_Share.png')}
          ></Image>
          <Rect>
            <MaterialButtonSuccess
              style={{
                height: 61,
                width: 201,
                overflow: 'hidden',
                marginTop: 55,
                marginLeft: 955,
                boxShadow: '5px 5px 12px  0.19px rgba(0,0,0,1) ',
              }}
            ></MaterialButtonSuccess>
          </Rect>
          <MaterialHelperTextBox
            inputStyle="Input"
            style={{
              height: 122,
              width: 698,
              position: 'absolute',
              left: 816,
              top: 685,
            }}
            stackedLabel="Enter the URL"
          ></MaterialHelperTextBox>
        </Image3Stack>
        <UrlShortner>URL Shortner</UrlShortner>
        <PoweredByDscTiet>Powered By DSC TIET</PoweredByDscTiet>
      </Image3StackStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Image3 = styled.img`
  top: 748px;
  left: 0px;
  width: 960px;
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
  width: 1317px;
  height: 153px;
  position: absolute;
  background-color: rgba(45, 134, 236, 1);
  border-radius: 11px;
  overflow: hidden;
  flex-direction: column;
  top: 691px;
  left: 720px;
  display: flex;
  box-shadow: 5px 5px 10px 0.14px rgba(0, 0, 0, 1);
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
  top: 378px;
  left: 596px;
  position: absolute;
  color: #121212;
  height: 85px;
  width: 441px;
  font-size: 67px;
  font-style: normal;
  font-weight: 700;
`;

const PoweredByDscTiet = styled.span`
  font-family: Roboto;
  top: 463px;
  left: 847px;
  position: absolute;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  height: 25px;
  width: 189px;
`;

const Image3StackStack = styled.div`
  width: 2332px;
  height: 1667px;
  margin-top: -304px;
  margin-left: -418px;
  position: relative;
`;

export default HomeScreen;
