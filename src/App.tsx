import React, { useCallback, useEffect } from 'react'
import './App.css';
import { Todolist } from './Todolist';
import { AddItemForm } from './AddItemForm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Menu } from '@mui/icons-material';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    changeTodosTitleTC,
    createTodosTC,
    deleteTodosTC,
    FilterValuesType,
    getTodosTC,
    removeTodolistAC,
    setTodolistAC,
    TodolistDomainType
} from './state/todolists-reducer'
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, createTaskTC, deleteTasksTC, removeTaskAC, updateTaskTC } from './state/tasks-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatchType, AppRootStateType, useAppDispatch, useAppSelector } from './state/store';
import { TaskStatuses, TaskType, todolistsAPI } from './api/todolists-api'

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    const todolists = useAppSelector<Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useAppSelector<TasksStateType>(state => state.tasks)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTodosTC())
    }, [])

    const removeTask = useCallback(function (id: string, todolistId: string) {
        dispatch(deleteTasksTC(todolistId, id));
    }, []);

    const addTask = useCallback(function (title: string, todolistId: string) {
        dispatch(createTaskTC(todolistId, title));
    }, []);

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        dispatch(updateTaskTC(todolistId, id, { status }));
    }, []);

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        dispatch(updateTaskTC(todolistId, id, { title: newTitle }));
    }, []);

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }, []);

    const removeTodolist = useCallback(function (id: string) {
        dispatch(deleteTodosTC(id));
    }, []);

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        dispatch(changeTodosTitleTC(id, title));
    }, []);

    const addTodolist = useCallback((title: string) => {
        dispatch(createTodosTC(title));
    }, [dispatch]);

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{ padding: '20px' }}>
                    <AddItemForm addItem={addTodolist} />
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];

                            return <Grid item key={tl.id}>
                                <Paper style={{ padding: '10px' }}>

                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
