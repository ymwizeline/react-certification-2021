import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 345px;
    width: 345px;
    min-width: 250px;
    border-radius: 4px;
    background: white;
    box-shadow: -1rem 0 3rem #000;
    margin: 15px 15px 15px 15px; 
    overflow: hidden;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const CardBody = styled.div`
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
`;

const Title = styled.h4`
    margin: 0;
    font-size: 1.08rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    margin-bottom: 0.35em;
`;

const Description = styled.p`
    margin: 0;
    text-align: center;
    font-size: 0.8rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: gray;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;


export { Card, CardBody, Thumbnail, Title, Description };
