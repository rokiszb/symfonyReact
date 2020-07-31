import React, {Component, useContext} from 'react';
import Table from '@material-ui/core/Table';
import {TodoContext} from "../contexts/TodoContext";
import { TableHead, TableRow, TableCell, TableBody, IconButton, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

function TodoTable() {

    const context = useContext(TodoContext);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Task</TableCell>
                    <TableCell>Body</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><TextField/></TableCell>
                    <TableCell><TextField/></TableCell>
                    <IconButton><AddIcon/></IconButton>
                </TableRow>
            </TableHead>
            <TableBody>
                {context.todos.map(todo => (
                    <TableRow>
                        <TableCell>
                            {todo.name}
                        </TableCell>
                        <TableCell>
                            {todo.task}
                        </TableCell>
                        <TableCell>
                            <IconButton><EditIcon/></IconButton>
                            <IconButton><DeleteIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TodoTable;