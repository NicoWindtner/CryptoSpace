//#region -= Imports =-
import React, { Component } from 'react';
import styled from 'styled-components';
const Global = require("../Colors.jsx");
//#endregion


export default class SubscribeInformation extends Component {

  handleSubscribeClick(e) {
      console.log("Subscribe...");
  }

  render() {
    return (
      <Box>
        <Text>
          { this.props.text }
          <Button onClick={ () => this.handleSubscribeClick() }>Subscribe</Button>
        </Text>
      </Box>
    );
  }
  
}


//#region -= Styled Components =-
const Box = styled.div`
  background-color: ${ Global.Colors.DarkBlue };
  color: ${ Global.Colors.Font };
  font-size: ${ Global.FontSize };
  overflow: hidden;
  padding: 10px 10px;
`;
const Text = styled.p`
  line-height: 30px;
  margin: 0;
  text-align: center;
`;
const Button = styled.span`
  background-color: ${ Global.Colors.Blue };
  border: none;
  border-radius: 15px;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  margin: 2px 0 2px 10px;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;
//#endregion