import React from 'react'
import Calendar from './Calendar'


export default {
    title: "Calendar",
    component: Calendar,
    args: {
        date: "1-Aug-2023",
    },
}

const Template = args => <Calendar {...args} />

export const DefaultCalendar = Template.bind({})
DefaultCalendar.args = {
}

export const SizedCalendar = Template.bind({})
SizedCalendar.args = {
    size: "100px"
}