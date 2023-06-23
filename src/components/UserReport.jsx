import React from "react";

const UserReport = ({ filteredUsers }) => {
  return (
    <div className="outer-div">
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <div>
              <div className="inner-div">
                <img src={user.avatar} alt={user.first_name} />
              </div>
              <p>
                {user.first_name} {user.last_name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserReport;
