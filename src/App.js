import React, { Component } from "react";
import ListItem from "./components/List/ListItem";
import "./App.css";
import AddItem from "./components/List/AddItem";
import Search from "./components/Header/Search";
import Tab from "./components/Header/Tab";
import Logo from "./components/Header/Logo";
import emptyList from "./assets/images/emptyList.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "All",
      todos: [
        {
          id: 0,
          title: "Breakfast",
          checked: true
        },
        {
          id: 1,
          title: "Lunch",
          checked: false
        },
        {
          id: 2,
          title: "Dinner",
          checked: false
        }
      ],
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

  onInputChange = event => {
    this.setState({ inputTerm: event.target.value });
  };

  onEnter = event => {
    if (event.keyCode === 13 && event.target.value) {
      event.preventDefault();
      let updatedTabs = this.updateTabs(0);
      let val = this.state.todos;
      val.push({
        id: this.state.length,
        title: event.target.value,
        checked: false
      });
      this.setState({
        inputTerm: "",
        todos: val,
        tabs: updatedTabs,
        filteredItems: val
      });
    }
  };

  getItemsToDisplay(tab) {
    let tempItems = "";
    if (tab === "All") {
      tempItems = this.state.todos.filter(item => true);
    } else if (tab === "Completed") {
      tempItems = this.state.todos.filter(item => item.checked);
    } else if (tab === "Remaining") {
      tempItems = this.state.todos.filter(item => !item.checked);
    }

    if (this.state.searchTerm != "") {
      let searchedItems = tempItems.filter(item =>
        item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
      return searchedItems;
    }
    return tempItems;
  }

  updateTabs = index => {
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
    let updatedTabs = this.updateTabs(index);
    this.setState({
      tabs: updatedTabs,
      currentTab: value.title,
      inputTerm: ""
    });
  }

  render() {
    let itemsToDisplay = this.getItemsToDisplay(this.state.currentTab);
    return (
      <div className="main">
        <div className="header-wrapper">
          <div className="logo-search-wrapper">
            {/* For Displaying Logo and  Search */}
            <Logo />
            <Search
              value={this.state.searchTerm}
              onChange={event =>
                this.setState({ searchTerm: event.target.value })
              }
            />
          </div>
          {/* For Displaying Tabs */}
          <div className="tab-wrapper">
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
          </div>
        </div>
        <div className="body-wrapper">
          {/* For Displaying Add Item */}
          <AddItem
            onEnter={this.onEnter}
            onChange={event => this.setState({ inputTerm: event.target.value })}
            value={this.state.inputTerm}
          />

          {/* For Displaying Todos */}

          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((value, index) => {
              return (
                <div>
                  <ListItem
                    onItemClicked={event => {
                      let tempItems = this.state.todos;
                      for (let i = 0; i < tempItems.length; i++) {
                        if (tempItems[i].id == value.id) {
                          tempItems[i].checked = !tempItems[i].checked;
                        }
                      }
                      this.setState({ todos: tempItems });
                    }}
                    index={index}
                    itemTitle={value.title}
                    checked={value.checked}
                  />
                </div>
              );
            })
          ) : (
            <div className="empty-list">
              <img src={emptyList} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
