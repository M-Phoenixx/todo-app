import { Modal } from '@material-ui/core';
import React,{useState} from 'react';
import db from './firebase';
import './Task.css'
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor: theme.palette.background.paper,
    border: '.2rem solid #3DB2FF',
    padding : theme.spacing(2, 4, 3)
  },
}))


const Task = ({todo ,id}) => {
  const [open, setOpen] = useState(false)
  const [input, setinput] = useState()
  const classes = useStyles();
    
  const handleOpen = () =>{
    setOpen(true);
    
  }
  const handleClose = () =>{
    setOpen(false);
    
  }
     const update = () =>{
       db.collection('todos').doc(id).set({
         todo:input
       }, {merge:true} );
       setOpen(false)

     }
    
    function deleteTodo() {
        db.collection("todos").doc(id).delete();
      }
    return (<>
    <Modal open ={open}
    onClose = {(e) => setOpen(false) }>
    <div className= {classes.paper} >
    <h1> edit text</h1>
    <input placeholder ={todo} type="text" value = {input} onChange ={(e)=> setinput(e.target.value)} />
    <Button  onClick ={update} > click to update </Button></div>
    </Modal>
        <div className="task">
      <div className="todo">  {todo  }  😄
      </div>
       <div className="edit"> <button className = "delete" onClick={deleteTodo} >delete</button>
        <button onClick={(e)=> setOpen(true) } >edit</button>
            </div>
        </div></>
    )
}

export default Task;
