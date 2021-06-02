import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CreateTask({modal, toggle, save}) {

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




const handleSave = (e) => {
  e.preventDefault()
    let taskObj = {}
    taskObj['Name'] = title
    taskObj['Description'] = description
    save(taskObj)
}
  
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
            <Button color="primary" onClick={handleSave}>
              Create
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    )
}
