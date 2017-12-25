//#region -= Imports =-
import React, { Component } from 'react';
import styled from 'styled-components';
import SubscribeInformation from './SubscribeInformation.jsx';
import Navigation from './Navigation.jsx';
import Heading from './Heading.jsx';
const Global = require("../Colors.jsx");
//#endregion


export default class Layout extends Component {

  constructor() {
    super();

    this.state = {
      category: ""
    };
  }

  render() {
    return (
      <div>
        <SubscribeInformation text="Never miss any news and subscribe to get updated about everything!" />
        <Navigation />
        <Heading
          title="Alleged Bitcoin Launderer and BTC-E Admin Likely to Stand Trial in U.S."
          imagePath="https://3bjir821uqix1xdupc2ey86g-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Statue-of-Justice-hammer.jpg"
          author="Nico Windtner"
          date="13th December 2017"
          categories={ ["Bitcoin Crime", "Bitcoin Exchange"] } />
      </div>
    );
  }
  
}


//#region -= Styled Components =-
const Section = styled.div`
  max-width: 960px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 15px;
  overflow: hidden;
  padding: 0 20px;
`;
const SectionText = styled.div`
  font-size: 26px;
  line-height: 26px;
  padding-right: 15px;
  float: left;
  color: #222222;
`;
const SectionLine = styled.div`
  width: auto;
  margin: 13px 0 12px 0;
  border-bottom: 1px solid #222222;
  overflow: hidden;
`;
//#endregion