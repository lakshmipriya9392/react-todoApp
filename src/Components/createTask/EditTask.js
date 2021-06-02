import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function EditTask({modal, toggle, updateTask, taskObj}) {

const [title, setTitle] = useState('')

const [description, setDescription] = useState('')


const handleChange = (e) => {
    const {name, value} = e.target

    if(name === "titleName"){
        setTitle(value)
    }else {
        setDescription(value)
    }
}

useEffect(() => {
    setTitle(taskObj.Name)
    setDescription(taskObj.Description)
},[])


const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = title;
    tempObj['Description'] = description
    updateTask(tempObj)
}

  
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Task</ModalHeader>
          <ModalBody>
            <form>
              <div className = "form-group">
                  <label>Title</label>
              <input type = "text" placeholder = "Add title" className = "form-control" value = {title} name = "titleName" onChange = {handleChange} />
              </div>
              <div className = "form-group">
                  <label>Description</label>
                  <textarea rows = "5" className = "form-control" value = {description} name = "description" onChange = {handleChange}></textarea>
              </div>
            </form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
              Update
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    )
}
