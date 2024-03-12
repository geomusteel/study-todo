import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import initialData from '../data/initialData';

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
}

const initialState: TodoState = {
    todoList: initialData,
    filterStatus: [
        {name: "전체", isSelected: true},
        {name: "진행중", isSelected: false},
        {name: "완료", isSelected: false}
    ],
    currentPage: 1
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        complete: (state, action: PayloadAction<number>) => {
            state.todoList = state.todoList.map((todoItem: Todo) => {
                if (todoItem.id === action.payload) {
                    return {...todoItem, status: !todoItem.status};
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
        }

    }
})

export const {
    remove,
    setFilterStatus,
    complete,
    paginate
} = todoSlice.actions

export default todoSlice.reducer