/* eslint-disable react/prop-types */
import avatar from "../assets/avatar.png";

export default function AllNames({ user, setData, single }) {
  const isActive = single.jobTitle === user.jobTitle;
  return (
    <div
      onClick={() => setData(user?.profile?.firstName, user?.profile?.lastName)}
      className={`my-[10px] rounded ${
        isActive ? "bg-[#D4D4D4]" : "bg-[#ECECEC]"
      }`}
    >
      <div className="flex items-center px-1 md:px-2 ">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-5 h-5 md:h-[50px] md:w-[52px]"
        />
        <h1 className="text-sm cursor-pointer p-1.5 md:p-5 md:w-[623px] font-[500] py-3 md:py-[18.5px] md:text-2xl">
          {user?.profile?.firstName + " " + user?.profile?.lastName}
        </h1>
      </div>
    </div>
  );
}
