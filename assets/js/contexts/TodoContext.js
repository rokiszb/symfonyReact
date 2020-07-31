import React, {Component, createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                name: 'Name of ob',
                task: 'do some shit'
            },
            {
                name: 'Name of ob',
                task: 'do some shit'
            },
            ],

        }
    }

    createTodo() {

    }

    readTodo() {

    }

    updateTodo() {

    }

    deleteTodo() {

    }


    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;