import React, { useEffect } from "react";
import style from "./Question.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../../Store/Student/dashboard";
import moment from "moment/moment";
import striptags from "striptags";
const GETQuestion = (props) => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.student.getQuestions);
  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <div className={style.stack}>
        <div className={style.head}>
          <h2>All Question</h2>
        </div>
        <div className={style.question}>
          <h5>{question?.length} questions</h5>
        </div>
        <hr />
        <div className={style.cards}>
          {question?.map((item, index) => (
            <Link
              className={style.card}
              key={index}
              to={`/admin/question-answer/${item._id}`}
            >
              <div className={style.headCard}>
                <p>student {item.QuestionAsker}</p>
                <p>{item.Department}</p>
              </div>
              <h3>{striptags(item.Question)}</h3>
              <h6>{moment(item.createdAt).fromNow()}</h6>
              <h6>{item.Answer.length} answers</h6>
              <hr />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GETQuestion;
