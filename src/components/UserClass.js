import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
        url: "dummy",
        avatar_url: "dummy",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component did mount");
    const data = await fetch("https://api.github.com/users/DeviprasadOni");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }
  componentDidUpdate() {
    console.log("componentdidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log(this.props.name + "Child render");
    const { name, location, email, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location :{location}</h3>
        <h4>Contact:{email}</h4>
      </div>
    );
  }
}

export default UserClass;

/*
---- MOUNTING----
Constructor(dummy)
Render(dummy)
    <HTML Dummy>
ComponentDidMount
      <API Call>
      <this.setState> -> State variable is updated

------ UPDATE

render(Api Data)
<HTML (new API data>)
componentDid Update


*/
