import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = (props) => {
  return <MeetupDetails
    image={props.image}
    title={props.title}
    description={props.description}
    address={props.address}
  />
}

export default MeetupDetailsPage;

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1"
        }
      },
      {
        params: {
          meetupId: "m2"
        }
      },
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Our first ever meet up",
      description: "The best time we ever had",
      address: "Italy via Punjab, Pune",
    }
  }
}