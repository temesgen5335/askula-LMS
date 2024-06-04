import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  class: [],
  classFitch: [],
  Announcement: [],
  AnnouncementFitch: [],
  material: [],
  removeClassSet: [],
  UpdateAnnouncement:[]
};

const teachers = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setCreateClass(state) {},
    setClass(state, action) {
      const newData = action.payload.data;
      state.class.push({
        courseId: newData.courseId,
        courseName: newData.courseName,
        ETCS: newData.ETCS,
        creaditHours: newData.creaditHours,
        courseDept: newData.courseDept,
        classCreator: newData.classCreator,
        startedDay: newData.startedDay,
        endDay: newData.endDay,
        description: newData.description,
      });
    },
    setRemoveClass(state, action) {
      const newData = action.payload;
      state.removeClassSet.push({
        id: newData,
      });
    },
    getCreateClass(state) {},
    getClass(state, action) {
      state.classFitch = action.payload;
    },
    setCreateAnnouncement(state) {},
    setAnnouncement(state, action) {
      const newData = action.payload.data;
      state.Announcement.push({
        classId: newData.classId,
        title: newData.title,
        startedTime: newData.startedTime,
        URL: newData.URL,
        message: newData.message,
        announcerName: newData.announcerName,
      });
    },
    setUpdateAnnouncement(state, action) {
      const newData = action.payload.data;
      state.UpdateAnnouncement.push({
        _id: newData._id,
        classId: newData.classId,
        title: newData.title,
        startedTime: newData.startedTime,
        URL: newData.URL,
        message: newData.message,
        announcerName: newData.announcerName,
      });
    },
    setMaterial(state) {},
    setMaterialClass(state, action) {
      const newData = action.payload;
      state.material.push({
        Classid: newData.Classid,
        title: newData.title,
        fileInput: newData.fileInput,
      });
    },
  },
});

export const {
  setClass,
  setRemoveClass,
  setMaterial,
  setMaterialClass,
  setCreateClass,
  getClass,
  getCreateClass,
  setCreateAnnouncement,
  setAnnouncement,setUpdateAnnouncement,
} = teachers.actions;

export default teachers.reducer;
