import { useEffect, useState } from "react";
import AllNames from "./components/AllNames";
import User from "./components/User";

export default function App() {
  const [users, setUsers] = useState([]);
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(false);

  const setData = (f, l) => {
    const singleUser = users.find(
      (user) => user.profile.firstName === f && user.profile.lastName === l
    );
    setSingle(singleUser);
  };

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
    <div className="">
      <section className="flex md:gap-x-[105px] gap-x-2 justify-center">
        <div className="w-40 md:w-[623px] md:ml-[105px] mt-20">
          <h1 className="py-[21px] bg-[#C5DFFF] text-center font-[500] rd">
            USERS LIST
          </h1>

          {users &&
            users.map((user, index) => (
              <AllNames
                key={index}
                user={user}
                setData={setData}
                single={single}
              />
            ))}
        </div>
        <div className="md:w-[502px] md:mr-[105px] mt-20">
          <h1 className="py-[21px] bg-[#C5DFFF] text-center font-[500] rd">
            USERS LIST
          </h1>

          <User single={single} />
        </div>
      </section>
    </div>
  );
}
