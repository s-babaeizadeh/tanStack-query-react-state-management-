function UserCard() {
  const { data } = useUserState();
  return (
    <>
      <h1 className="text-xl font-bold mb-1">{data?.name}</h1>
    </>
  );
}
