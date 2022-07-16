import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetup = () => {
  const newMeetUpHandler = (newMeetup) => {
    console.log(newMeetup)
  }

  return <NewMeetupForm onAddMeetup={newMeetUpHandler} />
}

export default NewMeetup;