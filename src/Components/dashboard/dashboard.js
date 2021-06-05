import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CreateTask from '../createTask/createTask'
import Card from '../Card/Card'
import { AnimatePresence, motion } from 'framer-motion'
import app from '../firebase'



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Dashboard({handleLogout}) {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  


const deleteTask = (index) => {
  let tempList = taskList;
  tempList.splice(index, 1)
  localStorage.setItem('taskName', JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}
  
useEffect(() => {
    let arr = localStorage.getItem("taskName")
    if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
    }
},[])

const toggle = () => {
  setModal(!modal);
}

const updateListArray = (obj, index) => {
  let tempList = taskList;
  tempList[index] = obj;
  setTaskList(tempList)
  localStorage.setItem("taskName", JSON.stringify(tempList))
  window.location.reload()
}

const saveList = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskName", JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)
}



  return (
    <div className="dashboard">
      <div className="dashboard_right">
        <CreateTask toggle = {toggle} modal = {modal} save = {saveList} />
        <div className = "task-container">
          {taskList.map((task, index) => 
          <Card taskObj = {task} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>
          )}
        </div>
      </div>
      <div className="dashboard_left">
        <AnimatePresence>
        <motion.h3 initial={{ y: -100 }} 
        animate={{ y: 0, transition: { delay: 0.3 } }}>Collections</motion.h3>
        </AnimatePresence>
       
       
        <motion.div className = "addNote_button" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} initial={{ x: -1000 }} 
          animate={{ x: 0, transition: { delay: 0.6 } }}>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick = {() => setModal(true)}
        >
          Add Note
        </Button>
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick = {handleLogout}
        >SignOut</Button>
        </motion.div>
      </div>
    </div>
  );

  }

  
