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
      todos: [],
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

  updateTabs = currentTab => {
    let tempTabs = this.state.tabs;
    for (let i = 0; i < tempTabs.length; i++) {
      tempTabs[i].selected = false;
      if (tempTabs[i].title == currentTab) {
        tempTabs[i].selected = true;
      }
    }
    return tempTabs;
  };

  onInputChange = event => {
    this.setState({ inputTerm: event.target.value });
  };

  addTodo = () => {
    let todoItem = document.querySelector(".add-item").value;
    if (todoItem != "") {
      let updatedTabs = this.updateTabs(this.state.currentTab);

      let tempTodo = {
        id: this.state.todos.length,
        title: todoItem,
        checked: false
      };

      this.setState({
        inputTerm: "",
        todos: [...this.state.todos, tempTodo],
        tabs: updatedTabs
      });
    }
  };
  onEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.addTodo();
    }
  };

  getItemsToDisplay(tab) {
    console.log("Tab : ", tab);
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

  tabClickedHandler(value, index) {
    let updatedTabs = this.updateTabs(this.state.tabs[index].title);
    this.setState({
      tabs: updatedTabs,
      currentTab: value.title,
      inputTerm: ""
    });
  }

  onItemClickedHandler(value, index) {
    let tempItems = this.state.todos;
    for (let i = 0; i < tempItems.length; i++) {
      if (tempItems[i].id == value.id) {
        tempItems[i].checked = !tempItems[i].checked;
      }
    }
    this.setState({ todos: tempItems });
  }

  onDeleteIconClickedHandler(value, index) {
    let tempItems = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (index != i) {
        tempItems.push(this.state.todos[i]);
      }
    }
    this.setState({ todos: tempItems });
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
                  key={index}
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
            onIconClick={this.addTodo}
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
                      this.onItemClickedHandler(value, index);
                    }}
                    onDeleteIconClicked={event => {
                      this.onDeleteIconClickedHandler(value, index)
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
