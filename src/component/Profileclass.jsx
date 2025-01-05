import React from "react";

class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      count2:0
    }
    console.log("ctr is called");
    
}

  render() {

    console.log("render its called");
    
    return(
      <div style={{
        border:"1px solid black",
        marginm:"10px solid black"
      }}>
        <h1>Profile based component</h1>
      <h1>Name: {this.props.name}</h1>
      <h1>Address : {this.props.address}</h1>
      <h1>Email : {this.props.email}</h1>
      <h1>Count : {this.state.count2}</h1>

      <button onClick={() => {
      this.setState({count: this.state.count + 1,
        count2: this.state.count2 + 1
      })
      }}>Increment</button>
    </div>
    )
  }
}
export default Profileclass;