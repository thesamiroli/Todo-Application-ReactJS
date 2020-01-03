import React, { Component } from "react";
import ListItem from "./components/List/ListItem";
import "./App.css";
import AddItem from "./components/List/AddItem";
import Search from "./components/Header/Search";
import Tab from "./components/Header/Tab"

class App extends Component {
  tabList = ["All", "Completed", "Remaining"];
  constructor() {
    super();
    this.items = [{
      title: "Samir",
      checked: false
    },
    {
      title: "Ninja",
      checked: false
    },
    {
      title: "Don",
      checked: false
    }
  ]
  this.displayItems = "";

    this.state = {
      currentTab: 0,
      todos: this.items,
      inputTerm: "",
      searchTerm: "",
      selected:[true, false, false]
    };
  }

  onItemClicked = event => {
    console.log(event.target);
  };

  onInputChange = event => {
    this.setState({ inputTerm: event.target.value });
  };

  onEnter = event => {
    if (event.keyCode === 13 && event.target.value) {
      event.preventDefault();
      let val = this.items;
      val.push({ title: event.target.value, checked: false });
      this.setState({ inputTerm: "", todos: val });
    }
  };

  onSearch = event => {
    let displayItems = this.state.todos.map((item => {
        return(
          item.title.includes(event.target.value) ? item : "nothing"
        )
    }))
    console.log(displayItems)
    this.setState({todos: displayItems})
    
  };

  tabClickedHandler(value, index){
    if(value === "All"){
      this.setState({todos : this.items, selected : [true, false, false]})
    }

    if(value === "Completed"){
      let displayItems = this.state.todos.map((item => {
        return(
          item.checked ? item : "nothing"
        )
      }))
      this.setState({todos : displayItems, selected : [false, true, false]})
    }

    if(value === "Remaining"){
      let displayItems = this.state.todos.map((item => {
        return(
          !item.checked ? item : "nothing"
        )
      }))
      this.setState({todos : displayItems, selected : [false, false, true]})
    }


  }
  render() {
    return (
      <div>
        <div className="tabs-wrapper">
        {this.tabList.map((value, index) => {
            return (
              <Tab selected={this.state.selected[index]} tabName={value} onClick={(event) => {
                  this.tabClickedHandler(value, index)
              }} />
            )
        })
      }
       </div>

        <Search value={this.state.searchTerm} onChange={this.onSearch} />
        <AddItem
          onEnter={this.onEnter}
          onChange={this.onInputChange}
          value={this.state.inputTerm}
        />

        {this.state.todos.map((value, index) => {
          return (
            <div>
              <ListItem
                onItemClicked={event => {
                  let val = this.state.todos;
                  val[index].checked = !val[index].checked;
                  console.log(this.items)
                  this.setState({ todos: val });
                }}
                index={index}
                itemTitle={value.title}
                checked={value.checked}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
