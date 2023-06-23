import React, { useState, useEffect } from "react";
import SearchReport from "./components/SearchReport";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchReport searchTerm={searchTerm} handleSearch={handleSearch} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <div>
              <p>ID: {user.id}</p>
              <p>First Name: {user.first_name}</p>
              <img src={user.avatar} alt={user.first_name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
