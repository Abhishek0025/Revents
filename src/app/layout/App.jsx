import React, {useState} from 'react'; // In order to return jsx, import React everytime, <> is a short thing to use as a Fragment  
// import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() { // In React, we write a function and return jsx. Class is not used but clasName is used. 
  // const title = React.createElement('h1', {}, 'Revents no JSX')
  // const div = React.createElement('div',{className: 'App'},title)

  const [formOpen, setFormOpen] = useState(false);

  return (
    <> 
      <NavBar setFormOpen={setFormOpen}/>
      {/* <button className='ui icon red button'>
        <i className='user icon'/>CSS button
      </button>
      <Button icon='user' content='React Button' color='green' loading='True' /> */}
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}