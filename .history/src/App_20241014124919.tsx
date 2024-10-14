import { useRef } from "react";
import { useUserState } from "./state/user";
import UserCard from "./components/UserCard";

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
          className="rounded-md bg-gradient-to-r bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 font-semibold"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
