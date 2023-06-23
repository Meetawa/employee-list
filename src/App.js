import React, { useState, useEffect } from "react";
import SearchReport from "./components/SearchReport";
import UserReport from "./components/UserReport";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

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
    setSearch(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchReport search={search} handleSearch={handleSearch} />
      <UserReport filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
