import React from "react";

const UserReport = ({ filteredUsers }) => {
  return (
    <div className="outer-div">
      {filteredUsers.map((user) => (
        <>
          <div className="inner-div">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <p>
            {user.first_name} {user.last_name}
          </p>
        </>
      ))}
    </div>
  );
};

export default UserReport;
