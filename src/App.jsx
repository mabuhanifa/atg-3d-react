import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = await response.json();
      if (data.length > 0) {
        setLoading(false);
      }
      setUsers(data);
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="bg-red-500">
     
    </div>
  );
}
