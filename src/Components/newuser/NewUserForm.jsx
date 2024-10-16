// style
import "./NewUserForm.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function NewUserForm({addUser}) {
  const [user, setUser] = useState({
    id: uuidv4(),
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });

  const handelSubmit = (e) =>{
    e.preventDefault()
    addUser(user);
  }


  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create new User</h2>
          <form onSubmit={handelSubmit}>
            <label>
              <span>Image URL:</span>
              <input onChange={(e)=> {setUser((prev) => {
                return {...prev, image: e.target.value}
              })}} type="url" required />
            </label>
            <label>
              <span>First Name</span>
              <input onChange={(e)=> {setUser((prev) => {
                return {...prev, firstName: e.target.value}
              })}}  type="text" required />
            </label>
            <label>
              <span>Last Name</span>
              <input onChange={(e)=> {setUser((prev) => {
                return {...prev, lastName: e.target.value}
              })}} type="text" required />
            </label>
            <label>
              <span>Age</span>
              <input onChange={(e)=> {setUser((prev) => {
                return {...prev, age: e.target.value}
              })}} type="number" required />
            </label>
            <label>
              <span>From:</span>
              <input onChange={(e)=> {setUser((prev) => {
                return {...prev, from: e.target.value}
              })}} type="text" required />
            </label>
            <label>
              <span>Job:</span>
              <input onChange={(e)=> {setUser((prev) => {
                return {...prev, job: e.target.value}
              })}} type="text" required />
            </label>
            <div className="gender">
              <span>Gender</span>
              <label>
                <small>Male</small>
                <input onChange={(e)=> {setUser((prev) => {
                return {...prev, gender: e.target.value}
              })}} type="radio" required name="gender" value="Male" />
              </label>
              <label>
                <small>Female</small>
                <input  onChange={(e)=> {setUser((prev) => {
                return {...prev, gender: e.target.value}
              })}}type="radio" required name="gender" value="Female" />
              </label>
            </div>
            <button  className="modal-btn"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
