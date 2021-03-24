import "./App.css";
import React from "react";
import List from "./component/employee/list";
import AddForm from "./component/employee/add";
import EditForm from "./component/employee/edit";
class App extends React.Component {
  state = {
    employees: [
      { name: "sudheer", domain: "s/w", email: "sudheergupta@gmail.com" },
      { name: "rakesh", domain: "s/w", email: "rakeshgupta@gmail.com" },
      { name: "mahesh", domain: "s/w", email: "maheshgupta@gmail.com" },
    ],
    selectedEmployee: null,
    action: null,
  };

  shEditFrm = (employee) => {
    this.setState({ action: "EDIT", selectedEmployee: { ...employee } });
  };
  shAddFrm = (employee) => {
    this.setState({ action: "ADD" });
  };
  goBack = () => this.setState({ action: null });
  crudMethod = {
    onUpdate: (data) => {
      let newList = this.state.employees.filter(
        (ele) => ele.email !== data.email
      );
      newList.push(data);
      this.setState({ employees: newList }, () => {
        this.goBack();
      });
    },
    onDelete: (employee) => {
      let newList = this.state.employees.filter(
        (ele) => ele.email != employee.email
      );
      this.setState({ employees: newList });
    },
    onAdd: (data) => {
      let newList = this.state.employees;
      newList.push(data);
      this.setState({ employees: newList }, () => {
        this.goBack();
      });
    },
    list: (data) => {
      console.log("Updated data", data);
    },
  };
  render() {
    const { employees, action, selectedEmployee } = this.state;
    const { onAdd, onUpdate, list, onDelete } = this.crudMethod;
    let mountComponent = null;
    switch (action) {
      case "ADD":
        mountComponent = (
          <AddForm
            action="Add Employee"
            onSubmit={onAdd}
            goBack={this.goBack}
          />
        );
        break;
      case "EDIT":
        mountComponent = (
          <EditForm
            selectedEmployee={selectedEmployee}
            action="Edit Employee"
            onSubmit={onUpdate}
            goBack={this.goBack}
          />
        );
        break;

      default:
        mountComponent = (
          <List
            shAddFrm={this.shAddFrm}
            employees={employees}
            onEdit={this.shEditFrm}
            onDelete={onDelete}
          />
        );
    }

    return (
      <div className="app">
        <br />
        <br />
        {mountComponent}
      </div>
    );
  }
}

export default App;
