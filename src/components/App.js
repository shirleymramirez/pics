import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  // by putting async keyword infront of the function name(onSearchSubmit)
  // we can allow to use async syntax inside this function
  onSearchSubmit = async term => {
    //
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    // .then(response => {
    //   console.log(response.data.results);
    // });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
