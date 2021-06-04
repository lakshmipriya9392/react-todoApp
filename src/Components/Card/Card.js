import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTask from '../createTask/EditTask'
import { motion } from "framer-motion";
const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

  

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    

    return (
     
            <motion.div whileHover={{ scale: 1.1 }} 
            className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>
                {/* <small className = "time">{new Date().toUTCString()}</small> */}
                
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                   <EditIcon style = {{"cursor" : "pointer", "color": colors[index%5].primaryColor}} onClick = {() => setModal(true)}/>
                   <DeleteIcon style = {{"cursor" : "pointer", "color": colors[index%5].primaryColor}} onClick = {handleDelete}/>
                </div>
        </div>
        <EditTask modal = {modal} updateTask = {updateTask} toggle = {toggle} taskObj = {taskObj}/>
        </motion.div>
     
    );
};

export default Card;