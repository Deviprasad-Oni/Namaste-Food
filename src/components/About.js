import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
    //api call
  }
  render() {
    console.log("parent Render");

    return (
      <div>
        <h1>About</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Akshay Saini(class)"} location={"Dehradun Class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <UserClass name={"Akshay Saini(class)"} location={"Dehradun Class"} />
//     </div>
//   );
// };

export default About;
