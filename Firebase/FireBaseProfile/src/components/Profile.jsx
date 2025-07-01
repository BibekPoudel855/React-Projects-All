import { useFirebase } from "../store/FirebaseContext";

function Profile() {
  const { user } = useFirebase();
  console.log(user);
  
  return (
    <>
      {!user ? (
        <h1 className="text-2xl text-yellow-600">Protected</h1>
      ) : (
        <div>
          <h2 className="text-xl">Username : {user.displayName}</h2>
          <p className="text-lg">Name: {user.displayName}</p>
          <p className="text-lg">Email: {user.email}</p>
          <p className="text-lg">Address: {user.address}</p>
        </div>
      )}
    </>
  );
}

export default Profile;
