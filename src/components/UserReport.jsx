import React from "react";

const UserReport = ({ filteredUsers }) => {
  return (
    <div className="outer-div">
      {filteredUsers.map((user) => (
        <div className="inner-div">
          <img src={user.avatar} alt={user.first_name} />
          <p>{user.first_name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserReport;
