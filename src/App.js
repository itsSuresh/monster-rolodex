import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:'',
    };
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  
  

  render() {

       const onSearch = (event)=>this.setState({searchField:event.target.value.toLowerCase()})
       const filteredArrayData = this.state.monsters.filter((monster)=>{
          //  return monster.name.toLowerCase().includes(this.searchField)
           return monster.name.toLowerCase().includes(this.state.searchField)
       })

       console.log(filteredArrayData)
    return (
      <div className="App">
        <SearchBox onSearch={onSearch} />
       <CardList monsters={filteredArrayData} />
       <h1>footer</h1>
      </div>
    );
  }
}

export default App;
