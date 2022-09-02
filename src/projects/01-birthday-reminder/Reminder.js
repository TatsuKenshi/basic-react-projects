import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./Reminder.css";

function App() {
  const [users, setUsers] = useState(data);

  const clearList = () => {
    setUsers([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{users.length} Birthdays Today</h3>
        <List users={users} />
        <button className="btn" onClick={clearList}>
          Clear List
        </button>
      </section>
    </main>
  );
}

export default App;
