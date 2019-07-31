import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "./Item";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(await response.data);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error.length ? (
        <h3>{error}</h3>
      ) : (
        <ul>
          {users.map(user => (
            <Item key={user.id} name={user.name} phone={user.phone} />
          ))}
        </ul>
      )}
    </>
  );
}
export default UsersList;
