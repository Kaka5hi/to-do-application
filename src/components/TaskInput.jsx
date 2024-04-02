import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskInput = () => {
    const dispatch = useDispatch();

    // state for user input
    const [userInput, setUserInput] = useState("");

    // state for showing error
    const [error, setError] = useState(false);

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if (!userInput) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2500);
        } else {
            const newTask = {
                title: userInput,
                id: new Date().getTime() * 123,
                isComplete: false,
            };
            dispatch(addTask(newTask));
            setUserInput("");
        }
    };

    return (
        <>
            <form className="input-container" onSubmit={handleTaskSubmit}>
                <input
                    type="text"
                    placeholder="Enter your task here"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">
                    {" "}
                    <IoAdd />{" "}
                </button>
            </form>
            {error && <p className="error-tag">input field is empty</p>}
        </>
    );
};

export default TaskInput;
