import axios from "axios"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetup = () => {
  const newMeetUpHandler = async (newMeetup) => {
    const result = await axios.post("/api/new-meetup", newMeetup, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    console.log(result.data)

  }

  return <NewMeetupForm onAddMeetup={newMeetUpHandler} />
}

export default NewMeetup;