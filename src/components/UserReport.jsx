import React from "react";

const UserReport = ({ filteredUsers }) => {
  return (
    <div>
      {" "}
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
};

export default UserReport;
