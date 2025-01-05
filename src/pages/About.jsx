import Profile from "./Profile";
import Profileclass from "../component/Profileclass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state={
      count:0
    }
    console.log("parent ctr is called");
  }

  componentDidMount() {
    console.log('component didmounted  is called');
    this.setState({
      count : this.state.count+1,
    })
  }
  render() {
    console.log('parent render is called');
    return (
      
      <><Profile name="vishal" address="goa" email="gmail.com" />
      <Profileclass name="Vishal" address="Goa" email="vishal@gmail.com" /></>
    );
  }
}

export default About;
