import styled, { css } from "styled-components"

export const CalendarWrapper = styled.div`
    width: ${props => props.size ?? "250px"};
    height: ${props => props.size ?? "250px"};
    background-color: #313131;
    border-radius: 0.5rem;
    border:0.5px solid #525252;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CalendarContainer = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;

`;

export const CalendarHeader = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    background-color: blue;
`;

export const CalendarBody = styled.div`
    display: flex;
    height: 80%;
    background-color: green;
`;

export const PrevMonthButton = styled.div`
    display: flex;
    background-color: white;
    align-self: flex-start;
    height: 100%;

`;
export const NextMonthButton = styled.div`
    display: flex;
    background-color: white;
    align-self: flex-end;
    height: 100%;

`;

export const MonthHeader = styled.div`
    display: flex;
    background-color: red;
    align-self: center;
    height: 100%;
`;