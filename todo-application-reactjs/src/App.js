import React, { Component } from "react";
import ListItem from "./components/List/ListItem";
import "./App.css";
import AddItem from "./components/List/AddItem";
import Search from "./components/Header/Search";
import Tab from "./components/Header/Tab";
import emptyList from "./assets/images/emptyList.png"

class App extends Component {
  tabList = ["All", "Completed", "Remaining"];
  constructor() {
    super();
    this.items = [
      {
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
    ];
    this.state = {
      currentTab: 0,
      todos: this.items,
      inputTerm: "",
      searchTerm: "",
      tabs: [
        {
          title: "All",
          selected: true
        },
        {
          title: "Completed",
          selected: false
        },
        {
          title: "Remaining",
          selected: false
        }
      ]
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
      let updatedTabs = this.updateTabs(0);
      let val = this.items;
      val.push({ title: event.target.value, checked: false });
      this.setState({ inputTerm: "", todos: val, tabs: updatedTabs });
    }
  };

  onSearch = event => {
    let displayItems = this.items.filter(item =>
      item.title.toLowerCase().includes(event.target.value)
    );
    console.log(displayItems);
    this.setState({ todos: displayItems });
  };

  updateTabs = index => {
    console.log(index);
    let tempTabs = this.state.tabs;
    for (let i = 0; i < tempTabs.length; i++) {
      tempTabs[i].selected = false;
      if (i == index) {
        tempTabs[i].selected = true;
      }
    }
    return tempTabs;
  };

  tabClickedHandler(value, index) {
    if (value.title === "All") {
      let updatedTabs = this.updateTabs(index);
      this.setState({ todos: this.items, tabs: updatedTabs });
    }

    if (value.title === "Completed") {
      let updatedTabs = this.updateTabs(index);
      let displayItems = this.items.filter(item => item.checked);
      this.setState({ todos: displayItems, tabs: updatedTabs });
    }

    if (value.title === "Remaining") {
      let updatedTabs = this.updateTabs(index);
      let displayItems = this.items.filter(item => !item.checked);
      this.setState({ todos: displayItems, tabs: updatedTabs });
    }
  }
  render() {
    return (
      <div className="main">
        <div className="header-wrapper">
          {this.state.tabs.map((value, index) => {
            return (
              <Tab
                selected={value.selected}
                tabName={value.title}
                onClick={event => {
                  this.tabClickedHandler(value, index);
                }}
              />
            );
          })}

          <Search value={this.state.searchTerm} onChange={this.onSearch} />
        </div>
        <div className="body-wrapper">
          <AddItem
            onEnter={this.onEnter}
            onChange={this.onInputChange}
            value={this.state.inputTerm}
          />
          {
          (this.state.todos.length) > 0 ?  
          (this.state.todos.map((value, index) => {
            return (
              <div>
                <ListItem
                  onItemClicked={event => {
                    let val = this.state.todos;
                    val[index].checked = !val[index].checked;
                    console.log(this.items);
                    this.setState({ todos: val });
                  }}
                  index={index}
                  itemTitle={value.title}
                  checked={value.checked}
                />
              </div>
            );
          })) :(
            <div className="empty-list">
              <img src={emptyList} />
              </div>
          )
          
          }
        
        </div>
      </div>
    );
  }
}

export default App;
