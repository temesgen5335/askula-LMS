import React from "react";
import style from "./CreateAnnouncement.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setAnnouncement } from "../../../../Store/teacher/dashboard";
const CreateAnnouncement = (props) => {
  const { _id } = useParams();
  const Username = localStorage.getItem("userName");
  const [forms, setForms] = useState({
    title: "",
    startedTime: "",
    URL: "",
    message: "",
  });
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setForms({
      ...forms,
      [event.target.id]: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const title = forms.title;
    const classId = _id;
    const startedTime = forms.startedTime;
    const URL = forms.URL;
    const message = forms.message;
    const announcerName = Username;
    dispatch(
      setAnnouncement({
        data: {
          classId,
          title,
          startedTime,
          URL,
          message,
          announcerName,
        },
      })
    );
  };
  return (
    <div className={style.container}>
      <div className={style.dropBack} onClick={() => props.display()}></div>
      <div className={style.classes}>
        <h2>Create new class Announcement for online student</h2>
        <form className={style.class} onSubmit={submitHandler}>
          <div className={style.form}>
            <div className={style.formControl}>
              <label htmlFor="">Title</label>
              <input type="text" onChange={changeHandler} id="title" />
            </div>
            <div className={style.formControl}>
              <label htmlFor="">Started Time</label>
              <input type="time" onChange={changeHandler} id="startedTime"  />
            </div>
          </div>
          <div className={style.formControl}>
            <label htmlFor="">URL / Link</label>
            <input type="url" onChange={changeHandler} id="URL" />
          </div>
          <div className={style.formControl}>
            <label htmlFor="">Message</label>
            <textarea
              onChange={changeHandler}
              id="message"
              cols="30"
              rows="7"
            ></textarea>
          </div>
          <div className={style.btn}>
            <button onClick={() => props.display()}>Cancel</button>
            <button>Announce</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
