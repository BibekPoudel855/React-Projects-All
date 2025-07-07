import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1 className="bg-gray-300 text-2xl text-center">User:{userId}</h1>
    </div>
  );
}
export default User;
