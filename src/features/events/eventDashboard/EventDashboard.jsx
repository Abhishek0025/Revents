import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm'
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard ({formOpen, setFormOpen}) { // Another method to create functions, use 'const' for array functions. EventDashboard is the function name. But export defaults cannot be used and 'function keyword cannot be used as used in JS
    // Adding state for hooks
    const [events, setEvents] = useState(sampleData);
    return(
        <Grid>
            <Grid.Column width={10}>
                {/* <EventList events={sampleData}/> */} 
                <EventList events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                <EventForm setFormOpen={setFormOpen}/>} 
            </Grid.Column>
        </Grid>
    )
}
