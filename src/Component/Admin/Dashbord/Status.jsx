import React, { useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import style from "./Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Store/Auth";
import { getCreateClass } from "../../../Store/teacher/dashboard";
import { getQuestion } from "../../../Store/Student/dashboard";

function Status() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const classData = useSelector((state) => state.teacher.classFitch);
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  const question = useSelector((state) => state.student.getQuestions);
  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);
  const Student = users?.filter((item) => item.role === "Student");
  const Teacher = users?.filter((item) => item.role === "Teacher");
  const Supervisor = users?.filter((item) => item.role === "SuperVisor");
  return (
    <div className={style.status}>
      <div className={style.card + " " + style.pending}>
        <h3>Students</h3>
        <div className={style.statusInfo}>
          <h1>{Student.length}</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 6%
          </div>
        </div>
      </div>
      
      <div className={style.card + " " + style.completed}>
        <h3>Teachers</h3>
        <div className={style.statusInfo}>
          <h1>{Teacher.length}</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 10%
          </div>
        </div>
      </div>
      <div className={style.card + " " + style.canceled}>
        <h3>Supervisor</h3>
        <div className={style.statusInfo}>
          <h1>{Supervisor.length}</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 3%
          </div>
        </div>
      </div>
      <div className={style.card}>
        <h3>classes</h3>
        <div className={style.statusInfo}>
          <h1>{classData.length}</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 3%
          </div>
        </div>
      </div>
      <div className={style.card}>
        <h3>Conference</h3>
        <div className={style.statusInfo}>
          <h1>{question.length}</h1>
          <div className={style.increment}>
            <BsArrowUpShort /> 6%
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Status;
