import React from "react";

const UserReport = ({ filteredUsers }) => {
  return (
    <div className="outer-div">
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <div className="mid-div">
              <div className="inner-div">
                <img src={user.avatar} alt={user.first_name} />
              </div>
              <div className="id-box">
                <span className="id">{user.id}</span>
              </div>
              <p>
                {user.first_name}_{user.last_name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserReport;
