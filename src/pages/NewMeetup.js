import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {

  const history = useNavigate();

  function addMeetupHandler(meetupData){
    fetch(
      'https://react-getting-started-f1ced-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'POST',
        body:JSON.stringify(meetupData),
        headers:{
          'Content-type':'application/json'
        }
      }).then(() => {
        history('/react-meetings');
      });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
