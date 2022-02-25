import React, { Component } from 'react'

export default class DogIndex extends Component {
    
    constructor() {
        super();
        this.state = {
            image: "",
            errorMessage: "",
        };
    }

    fetchImage = async () => {
        try {
           const res = await fetch("https://dog.ceo/api/breeds/image/random")
            const data = await res.json()

            this.setState({image: data.message});
        }catch ({error}) {
            this.setState({errorMessage: error})
        }

    };

    componentDidMount() {
        this.fetchImage();
    }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent:"center"}}> 
          <img src={this.state.image} alt="Random Dog"/>
          <button onClick={this.fetchImage}>Click for new dog</button>
      </div>
    )
  }
}

