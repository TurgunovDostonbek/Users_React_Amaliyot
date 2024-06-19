import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Userlist from "./Components/userList/Userlist";
import NewUserForm from "./Components/newuser/NewUserForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  // delete
  const deleteUser = (id) => {
    const userDelete = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(userDelete);
  };

  // close
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
  };

  /// Add User
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev , user]
    })
    setShowModal(false)
  }

  return (
    <div onClick={closeModal} div className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No users</h2>}
        </div>
        <Userlist users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm  addUser ={addUser}/>}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
