import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import initialData from '../data/initialData';
import {getCurrentDateTime} from "../utility/CurrentDateTime";

interface Todo {
    id: number;
    selected: boolean
    status: boolean;
    content: string;
    color: string;
    createdTime: string;
    completedTime: string;
}

interface FilterStatus {
    name: string;
    isSelected: boolean;
}

interface TodoState {
    todoList: Todo[];
    filterStatus: FilterStatus[];
    currentPage: number;
    sequence: number;
}

const initialState: TodoState = {
    todoList: initialData,
    filterStatus: [
        {name: "전체", isSelected: false},
        {name: "진행중", isSelected: true},
        {name: "완료", isSelected: false}
    ],
    currentPage: 1,
    sequence: 21,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        complete: (state, action: PayloadAction<number>) => {
            state.todoList = state.todoList.map((todoItem: Todo) => {
                if (todoItem.id === action.payload) {
                    const newStatus = !todoItem.status;
                    const completedTime = newStatus ? '' : getCurrentDateTime();
                    return {...todoItem, status: newStatus, completedTime: completedTime};
                }
                return todoItem;
            })
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todoList = state.todoList.filter((todoItem: Todo) => todoItem.id !== action.payload)
        },
        setFilterStatus: (state, action: PayloadAction<string>) => {
            state.filterStatus = state.filterStatus.map((filter) => ({
                ...filter,
                isSelected: filter.name === action.payload
            }))
            state.currentPage = 1
        },
        paginate: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        sequenceUpdate: (state) => {
            state.sequence = state.sequence + 1
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todoList.unshift(action.payload);
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            state.todoList = state.todoList.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...action.payload};
                }
                return todo;
            });
        },

    }
})

export const {
    remove,
    setFilterStatus,
    complete,
    paginate,
    sequenceUpdate,
    addTodo,
    updateTodo
} = todoSlice.actions

export default todoSlice.reducer