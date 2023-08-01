import React from 'react'
import { CalendarWrapper, CalendarContainer, CalendarHeader, CalendarBody, PrevMonthButton, MonthHeader, NextMonthButton } from './CalendarStyles';


function Calendar(props) {
    // const { date, size } = props;
    return (
        <CalendarWrapper {...props}>
            <CalendarContainer>
                <CalendarHeader>

                    <PrevMonthButton />
                    <MonthHeader />
                    <NextMonthButton />
                </CalendarHeader>

                <CalendarBody />
            </CalendarContainer>
        </CalendarWrapper>
    )
}

export default Calendar