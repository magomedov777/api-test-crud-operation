import React, { ChangeEvent, useCallback } from 'react'
import { EditableSpan } from './EditableSpan'
import { Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { TaskStatuses, TaskType } from './api/todolists-api'


export const Task = React.memo(() => {


    return <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}>


        <Delete />
    </IconButton>
    </div >
})
