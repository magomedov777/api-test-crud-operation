import React, { useEffect, useState } from 'react'
import { TodolistApi } from '../api/todolist-api'

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistApi.getTodolists()
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'New Working'
        TodolistApi.createTodolist(title)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = 'd9a01b9f-e015-4936-905e-3dc7f4a473c5'
        TodolistApi.deleteTodolist(id)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '75407336-24d1-4ee3-9f9d-e2a82a2c1010';
        const title = 'IT_INCUBATOR'
        TodolistApi.updateTodolist(todolistId, title)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7a3e545c-fdd6-41ff-92a6-ebe7dfeb5e3b'
        TodolistApi.getTasks(todolistId)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7a3e545c-fdd6-41ff-92a6-ebe7dfeb5e3b'
        const taskId = '2fa0700c-c677-4c31-9e78-c9bb4498c902'
        TodolistApi.deleteTasks(todolistId, taskId)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7a3e545c-fdd6-41ff-92a6-ebe7dfeb5e3b'
        const title = 'Ya Ya'
        TodolistApi.createTasks(todolistId, title)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7a3e545c-fdd6-41ff-92a6-ebe7dfeb5e3b'
        const taskId = 'b9f54b19-a52e-4414-9649-f1db879bd5de'
        const title = 'Good Bye'
        TodolistApi.updateTasks(todolistId, taskId, title)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
