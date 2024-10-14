import { useUserState } from "../state/user";

const UserCard = () => {
  const { data } = useUserState();
  return (
    <>
      <h1 className="text-sm font-bold mb-1">{data?.name}</h1>
    </>
  );
};

export default UserCard;
