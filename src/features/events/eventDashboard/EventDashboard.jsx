import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm'
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard ({formOpen, setFormOpen, selectEvent, selectedEvent}) { // Another method to create functions, use 'const' for array functions. EventDashboard is the function name. But export defaults cannot be used and 'function keyword cannot be used as used in JS
    // Adding state for hooks
    const [events, setEvents] = useState(sampleData);
    // const [selectedEvent, setSelectedEvent] = useState(null);

    function handleCreateEvent(event){
        setEvents([...events, event]) //gives new array of objects inside the array
    }

    // function handleSelectEvent(event){
    //     setSelectedEvent(event);
    //     setFormOpen(true);
    // }

    return(
        <Grid>
            <Grid.Column width={10}>
                {/* <EventList events={sampleData}/> */} 
                <EventList events={events} selectEvent={selectEvent}/>
            </Grid.Column>S
            <Grid.Column width={6}>
                {formOpen && 
                <EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={handleCreateEvent} selectedEvent={selectedEvent}/>} 
            </Grid.Column>
        </Grid>
    )
}
