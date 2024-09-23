
import "./App.css";
import Navbar from "./components/navbar";
import "boxicons";
import ProfileCard from "./components/ProfileCard";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

const postData = [
  {
    name: "Abdulmujeeb Adebowale",
    bio: "Software Engineer | Frontend Developer",
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
  },
  {
    name: "Jin Xi",
    bio: "no one",
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
  },
  {
    name: "Mason James",
    bio: "technical writer",
    text: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
  },
  {
    name: "Alexa Philips",
    bio: "Plumber",
  },
  {
    name: "Wikki Rodri",
    bio: "Construction worker",
    text: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
  },
  {
    name: "Jolade Ayomikun",
    bio: "Frontend developer",
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
  },
  {
    name: "Akorede Williams",
    bio: "Web3 developer",
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
  },
  {
    name: "Bolaji Oyenusi",
    bio: "Software Engineer",
    
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content-container flex flex-row gap-x-8 mt-8 mx-auto max-w-6xl">
        <div>
          <ProfileCard />
        </div>

        <div className="w-[60%] max-w-[60%]">
          <CreatePost />

          <div className="space-y-2 py-2">
            {postData.map((eachPost) => (
              <Post {...eachPost} />
            ))}
          </div>
        </div>

        <div>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default App;
