//#region -= Imports =-
import React, { Component } from 'react';
import styled from 'styled-components';
const Global = require("../Colors.jsx");
//#endregion


export default class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [
              "All News",
              "Bitcoin",
              "Exchanges",
              "Another"
            ],
            searchToken: ""
          };
    }

    handleSearchChange(e) {
        this.setState({
          searchToken: e.target.value
        });
    }

    render() {
        return (
            <NavigationBox>
                <CenterNavigation>
                <Brand>
                    <UpperCase>C</UpperCase>RYPTO
                    <UpperCase>S</UpperCase>PACE
                </Brand>
                {
                    this.state.categories.map( (category, index) => {
                    return (
                        <NavElement
                            href={ category }
                            key={ index }>
                            { category }
                        </NavElement>
                    )
                    })
                }
                <SearchBox>
                    <SearchInput
                    placeholder="Bitcoin"
                    value={ this.state.searchToken }
                    onChange={ (e) => this.handleSearchChange(e) }
                    />
                    <SearchButton>Search</SearchButton>
                </SearchBox>
                </CenterNavigation>
            </NavigationBox>
        );
    }

}


//#region -= Styled Components =-
const NavigationBox = styled.div`
    background: linear-gradient(to left, ${ Global.Colors.LightBlue }, ${ Global.Colors.Blue });
    color: ${ Global.Colors.Font };
    overflow: hidden;
    padding: 10px 20px;
`;
const CenterNavigation = styled.div`
    margin: auto;
    max-width: 960px;
    overflow: hidden;
`;
const Brand = styled.h3`
    float: left;
    font-size: 20px;
    line-height: 40px;
    margin: 0;
    margin-right: 30px;
`;
const UpperCase = styled.span`
    font-size: 22px;
`;
const NavElement = styled.a`
    color: ${ Global.Colors.Font };
    float: left;
    font-size: ${ Global.FontSize };
    line-height: 42px;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;

    &:hover {
        color: #EEEEEE;
    }
`;
const SearchBox = styled.div`
    float: right;

    @media only screen and (max-width: 320px) {
        clear: both;
        width: 100%;
    }
`;
const SearchInput = styled.input`
    border: 1px solid #EEEEEE;
    color: #444444;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    height: 30px;
    line-height: 28px;
    margin: 5px 0;
    max-width: 150px;
    padding: 0 10px;

    &:focus {
        outline: none;
    }

    @media only screen and (max-width: 320px) {
        max-width: none;
        width: calc(100% - 22px);
    }
`;
const SearchButton = styled.button`
    background-color: ${ Global.Colors.LightBlue };
    border: 1px solid #FFFFFF;
    color: ${ Global.Colors.Font };
    float: right;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 32px;
    margin: 4px 0;
    margin-left: 10px;
    padding: 0 15px;

    &:hover {
        cursor: pointer;
        background-color: ${ Global.Colors.Blue };
        outline: none;
    }

    &:active {
        background-color: ${ Global.Colors.Blue };
        outline: none;
    }

    &:focus {
        background-color: ${ Global.Colors.Blue };
        outline: none;
    }

    @media only screen and (max-width: 320px) {
        margin-left: 0;
        width: 100%;
    }
`;
//#endregion