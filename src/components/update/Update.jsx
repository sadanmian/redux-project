import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHello, remove, update, updateUser2 } from "../../redux/userSlice";
import { updateUser } from "../../redux/apiCalls";

export default function Update() {
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser2({
      name,
      email
    }))
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // dispatch(remove());
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>
          Delete Account
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {error === true && (
              <span className="error">Something went wrong!</span>
            )}
            {pending === false && (
              <span className="success">Updated Successfully!</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
