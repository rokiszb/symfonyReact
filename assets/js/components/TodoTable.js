import React, {Component, useContext, useState} from 'react';
import Table from '@material-ui/core/Table';
import {TodoContext} from "../contexts/TodoContext";
import { TableHead, TableRow, TableCell, TableBody, IconButton, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { InputAdornment } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

function TodoTable() {

    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState();
    const [editIsShown, setEditIsShown] = useState(false);
    const [editTodo, setEditTodo] = useState();

    return (
        <form onSubmit={ (event) => {context.createTodo(event, {name: addTodo})} }>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField value={addTodo} onChange={(event) => {setAddTodo(event.target.value)}} label="New task"/>
                        </TableCell>
                        <TableCell>
                            <IconButton type="submit"><AddIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {context.todos.slice().reverse().map((todo,index) => (
                        <TableRow key={'todo ' + index}>
                            <TableCell>
                                {editIsShown === todo.id ?
                                <TextField
                                    fullWidth={true}
                                    value={editTodo}
                                    onChange={(event) => {
                                        setEditTodo(event.target.value);
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
                                    }}
                                    />
                                        :
                                    todo.name
                                }

                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => setEditIsShown(true)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton><DeleteIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </form>
    );
}

export default TodoTable;