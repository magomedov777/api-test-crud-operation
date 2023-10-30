import React, { FC, memo, useCallback, useEffect } from 'react'
import { AddItemForm } from './AddItemForm'
import { EditableSpan } from './EditableSpan'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import { Task } from './Task'
import { TaskStatuses, TaskType } from './api/todolists-api'
import { FilterValuesType } from './state/todolists-reducer'
import { useAppDispatch } from './state/store';
import { getTasksTC } from './state/tasks-reducer';

type Props = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType

}

export const Todolist: FC<Props> = memo(({ id, title, tasks, changeFilter,
    addTask, changeTaskStatus, changeTaskTitle,
    removeTask, removeTodolist, changeTodolistTitle, filter }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTasksTC(id))
    }, [])

    const addTaskCallback = useCallback((title: string) => {
        addTask(title, id)
    }, [addTask, id])

    const removeTodolistCallback = () => {
        removeTodolist(id)
    }
    const changeTodolistTitleCallback = useCallback((title: string) => {
        changeTodolistTitle(id, title)
    }, [id, changeTodolistTitle])

    const onAllClickHandler = useCallback(() => changeFilter('all', id), [id, changeFilter])
    const onActiveClickHandler = useCallback(() => changeFilter('active', id), [id, changeFilter])
    const onCompletedClickHandler = useCallback(() => changeFilter('completed', id), [id, changeFilter])


    let tasksForTodolist = tasks

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return <div>
        <h3><EditableSpan value={title} onChange={changeTodolistTitleCallback} />
            <IconButton onClick={removeTodolistCallback}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTaskCallback} />
        <div>
            {
                tasksForTodolist.map(t => <Task key={t.id} task={t} todolistId={id}
                    removeTask={removeTask}
                    changeTaskTitle={changeTaskTitle}
                    changeTaskStatus={changeTaskStatus}
                />)
            }
        </div>
        <div style={{ paddingTop: '10px' }}>
            <Button variant={filter === 'all' ? 'outlined' : 'text'}
                onClick={onAllClickHandler}
                color={'inherit'}
            >All
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                onClick={onActiveClickHandler}
                color={'primary'}>Active
            </Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                onClick={onCompletedClickHandler}
                color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})


