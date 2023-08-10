import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '851ccd71-58c3-4f92-b794-f803a4080a69'
    }
})

export const TodolistApi = {
    getTodolists() {
       return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title})
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`todo-lists/${id}`)
    },
    updateTodolist(id: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${id}`, {title})
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTasks(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    createTasks(todolistId: string, title: string) {
        return instance.post<ResponseType>(`todo-lists/${todolistId}/tasks/`, {title})
    },
    updateTasks(todolistId: string, taskId: string, title: string) {
        return instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}

export type DeleteResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export type TaskType = {
description: string
title:string
status: number
priority: number
startDate: string
deadline: string
id: string
todoListId: string
order: number
addedDate: string
}

export type UpdateTaskType = {
    title:string
description: string
status: number
priority: number
startDate: string
deadline: string
}

export type TodolistType = {
    id: string
    title: string
    addedDate: Date
    order: number
}

export type ResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: []
    messages: string[]
    data: T
}

// export type CreateTodolistType = {
//     resultCode: number
// fieldsErrors: []
//     messages: string
//     data: {
//         item: TodolistType
//     }
// }
// export type UpdateTodolistType = {
//     resultCode: number
// fieldsErrors: []
//     messages: string
//     data: {}
// }

// export type DeleteTodolistType = {
//     resultCode: number
// fieldsErrors: []
//     messages: string
//     data: {}
// }

