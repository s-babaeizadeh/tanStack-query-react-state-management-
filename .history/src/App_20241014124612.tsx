import { useRef } from "react";
import { useUserState } from "./state/user";

function App() {
  const { resetData, setData } = useUserState();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    resetData();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserCard />
      <div className="flex">
        <input
          ref={inputRef}
          onChange={(e) => setData({ name: e.target.value })}
          className="rounded-md border-2 border-grayscale-700  px-2 py-1 text-white shadow-lg outline-none  focus:border-primary-500"
        />
        <button
          onClick={handleReset}
          className="rounded-md bg-gradient-to-r from-blue-500 to-blue-900 px-6 py-2 font-semibold"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function UserCard() {
  const { data } = useUserState();
  return (
    <>
      <h1 className="text-xl font-bold mb-1">{data?.name}</h1>
    </>
  );
}

export default App;
