import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"

const MeetupDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <MeetupDetails
        image={props.image}
        title={props.title}
        description={props.description}
        address={props.address}
      />
    </>
  )
}

export default MeetupDetailsPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://nextjs-user:wu3c1LmGMBscIctZ@cluster0.mbkhkkd.mongodb.net/My-meetups?retryWrites=true&w=majority")

  const db = client.db()

  const meetupsCollections = db.collection("meetups")

  const meetupPaths = await meetupsCollections.find({}, { _id: 1 }).toArray()

  client.close()
  return {
    fallback: false,
    paths: meetupPaths.map(meetup => (
      {
        params: {
          meetupId: meetup._id.toString()
        }
      }
    ))
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://nextjs-user:wu3c1LmGMBscIctZ@cluster0.mbkhkkd.mongodb.net/My-meetups?retryWrites=true&w=majority")

  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })
  const meetup = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      id: selectedMeetup._id.toString(),
      image: selectedMeetup.image,
      title: selectedMeetup.title,
      description: selectedMeetup.description,
      address: selectedMeetup.address,
    }
  }
}