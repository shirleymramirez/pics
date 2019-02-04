import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // by putting async keyword infront of the function name(onSearchSubmit)
  // we can allow to use async syntax inside this function
  async onSearchSubmit(term) {
    //
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 7b79c8e23c38e388c02d6d2af99253c49e0a56d9f8b00babaa029f33a85d2cd2"
      }
    });
    // .then(response => {
    //   console.log(response.data.results);
    // });

    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
