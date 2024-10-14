import { useUserState } from "../state/user";

const UserCard = () => {
  const { data } = useUserState();
  return (
    <>
      <h1 className="text-md font-bold mb-1 p-10">{data?.name}</h1>
    </>
  );
};

export default UserCard;
