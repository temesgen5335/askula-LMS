import React, { useEffect, useState } from "react";
import style from "./Hosted.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCreateClass, setRemoveClass } from "../../../../Store/teacher/dashboard";
const Hosted = (props) => {
  const id = localStorage.getItem("id");
  const classData = useSelector((state) => state.teacher.classFitch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreateClass());
  }, [dispatch]);
  const filterClass = classData.filter((item) => item.lectureID === id);
  const [menuData, setMenuData] = useState(false);
  const [useData, setUseData] = useState();
  const menuHandler = (index) => {
    setMenuData(!menuData);
    setUseData(index);
  };
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(setRemoveClass({ data: id }));
  };
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {filterClass.map((item, index) => (
          <div className={style.card} key={index}>
            <div className={style.head}>
              <i onClick={() => menuHandler(index)}>
                <BsThreeDotsVertical />
              </i>
            </div>
            {menuData && useData === index && (
              <div className={style.menu}>
                <Link onClick={() => props.onClick(item)}>Show Details</Link>
                <Link to={`/teacher/announcement/${item._id}`}>
                  Announcement
                </Link>
                <Link onClick={() => deleteHandler(item._id)}>
                  Remove Class
                </Link>
              </div>
            )}
            <div className={style.info}>
              <h5>Class ID :-</h5>
              <h4>{item.CourseId}</h4>
            </div>
            <div className={style.info}>
              <h5>Class Name :-</h5>
              <h4>{item.CourseName}</h4>
            </div>
            <div className={style.info}>
              <h5>ECTS :-</h5>
              <h4>{item.Ects} ECTS</h4>
            </div>
            <div className={style.info}>
              <h5>Credit Hours :-</h5>
              <h4>{item.CreaditHour} hours</h4>
            </div>
            <div className={style.info}>
              <h5>Department :-</h5>
              <h4>{item.courseDept}</h4>
            </div>
            <div className={style.info}>
              <h5>Start month :-</h5>
              <h4>{item.StartDay}</h4>
            </div>
            <div className={style.info}>
              <h5>End month :-</h5>
              <h4>{item.EndDay}</h4>
            </div>
            <div className={style.info}>
              <h5>Description </h5>
              <h4>{item.Description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hosted;
