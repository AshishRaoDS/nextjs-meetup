import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout"

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meet up",
    image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Landlinks Mangalore",
    description: "First meet up place ever"
  },
  {
    id: "m2",
    title: "This is the second meet up",
    image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Landlinks Mangalore",
    description: "Second meet up place ever"
  },
  {
    id: "m3",
    title: "This is the third meet up",
    image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Landlinks Mangalore",
    description: "Third meet up place ever"
  },
]

const HomePage = () => {


  return <MeetupList meetups={DUMMY_DATA} />

}

export default HomePage;