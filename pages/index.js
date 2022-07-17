import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb"
import Head from "next/head"

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

const HomePage = (props) => {

  return (
    <>
      <Head>
        <title>Cherish your memories</title>
        <meta name="description" content="Finally a place to re-visit your precious time spent with your loved ones" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )


}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://nextjs-user:wu3c1LmGMBscIctZ@cluster0.mbkhkkd.mongodb.net/My-meetups?retryWrites=true&w=majority")

  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetupsFromDB = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetupsFromDB.map(meetup => (
        {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString()
        }
      ))
    },
    revalidate: 10
  }
}

export default HomePage;