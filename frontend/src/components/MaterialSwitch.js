import styled from 'styled-components';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';

import MaterialUISwitch from '@material-ui/core/Switch';
import { lightBlue } from '@material-ui/core/colors';

function MaterialSwitch(props) {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  //const mainPrimaryColor = darkState?lightBlue[500]:orange[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      //primary:{
      //  main: mainPrimaryColor
      // },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Switch1>
        <MaterialUISwitch
          color="primary"
          checked={darkState}
          onChange={handleThemeChange}
        />
      </Switch1>
    </ThemeProvider>
  );
}

const Switch1 = styled.div`
  width: 45px;
  height: 22px;
`;

export default MaterialSwitch;
