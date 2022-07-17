import axios from "axios"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { useRouter } from "next/router"

const NewMeetup = () => {
  const router = useRouter()

  const newMeetUpHandler = async (newMeetup) => {
    const result = await axios.post("/api/new-meetup", newMeetup, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    router.push("/")

    console.log(result.data)

  }

  return <NewMeetupForm onAddMeetup={newMeetUpHandler} />
}

export default NewMeetup;