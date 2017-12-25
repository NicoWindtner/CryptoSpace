//#region -= Imports =-
import logo from '../Images/heading.jpg';
import React, { Component } from 'react';
import styled from 'styled-components';
const Global = require("../Colors.jsx");
//#endregion


export default class Heading extends Component {
    
    render() {
        return (
            <HeadingBox imagePath={ this.props.imagePath }>
                <Darking>
                    <HeadingCenter>
                        <CategoryBox>
                            {
                                this.props.categories.map( (category, index) => {
                                    return (
                                        <Category key={ index } href="#">{ category }</Category>
                                    )
                                })
                            }
                        </CategoryBox>
                        <Title href="#">{ this.props.title }</Title>
                        <Note>
                            <Author>"{ this.props.author }"</Author>&nbsp;-&nbsp;<Date>{ this.props.date }</Date>
                        </Note>
                    </HeadingCenter>
                </Darking>
            </HeadingBox>
        );
    }
    
}
    
    
//#region -= Styled Components =-
const HeadingBox = styled.div`
    background-image: url(${ props => props.imagePath });
    background-size: cover;
    background-position: center; 
    width: 100%;
    overflow: hidden;
`;
const Darking = styled.div`
    width: calc(100% - 40px);
    height: auto;
    background-color: rgba(0,0,0, 0.5);
    padding: 0 20px;
`;
const HeadingCenter = styled.div`
    margin: auto;
    max-width: 960px;
    padding: 200px 0;

    @media only screen and (max-width: 800px) {
        padding: 150px 0;
    }

    @media only screen and (max-width: 600px) {
        padding: 100px 0;
    }
`;
const CategoryBox = styled.div`
    width: 100%;
    overflow: hidden;
`;
const Category = styled.a`
    line-height: 28px;
    border-radius: 14px;
    float: left;
    color: #FFFFFF;
    text-decoration: none;
    padding: 0 12px;
    margin: 0 5px 10px 5px;
    background-color: #495664;

    &:hover {
        background-color: #333C4A;
    }
`;
const Title = styled.a`
    color: #EEEEEE;
    font-size: 32px;
    margin-bottom: 30px;
    display: block;
    text-decoration: none;
    font-weight: 700;

    &:hover {
        color: #CCCCCC;
    }
`;
const Note = styled.p`
    color: #AAAAAA;
    font-size: 15px;
    margin: 0;
`;
const Author = styled.span`
    font-style: italic;
`;
const Date = styled.span`
`;
//#endregion