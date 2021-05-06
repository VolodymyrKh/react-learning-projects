import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import "./App.css";

const getDataFromLS = ()=> {
  let lsList = localStorage.getItem('list')
  return lsList ? JSON.parse(lsList) : []
}

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getDataFromLS());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const hanleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          return item.id === editId ? { ...item, title: name } : item;
        })
      );
      setName("");
      setIsEditing(false);
      setEditId(null);
      showAlert(true, "item was edited", "success");
    } else {
      showAlert(true, "item was added", "success");
      const item = { id: Date.now().toString(), title: name };
      setList([...list, item]);
      setName("");
    }
  };

  const showAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };
  const hideAlert = () => {
    setAlert({ show: false });
  };

  const clearItems = () => {
    showAlert(true, "list is clear", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "item was deleted", "danger");
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editItem = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(itemToEdit.id);
    setName(itemToEdit.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

    return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={hanleSubmit}>
        {alert.show && <Alert {...alert} list={list} hideAlert={hideAlert} />}
        <h3>shopping list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            placeholder="e.g. milk"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "add item"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearItems}>
            clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
