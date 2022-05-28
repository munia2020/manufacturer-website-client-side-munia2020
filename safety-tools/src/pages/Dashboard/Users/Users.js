import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://nameless-depths-31123.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      <h2>{users.length}</h2>
    </div>
  );
};

export default Users;
