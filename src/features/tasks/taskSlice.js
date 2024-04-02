import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: JSON.parse(localStorage.getItem("data")) || [],
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = action.payload;
            state.tasks.push(newTask);
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            const filteredList = state.tasks.filter(
                (task) => task.id !== taskId
            );
            state.tasks = filteredList;
        },
        taskCompletion: (state, action) => {
            const taskId = action.payload;
            const newTaskList = state.tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isComplete: !task.isComplete };
                } else {
                    return { ...task };
                }
            });
            state.tasks = newTaskList;
        },
    },
});

export const { addTask, deleteTask, taskCompletion } = taskSlice.actions;

export default taskSlice.reducer;
