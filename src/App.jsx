import { useEffect } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";

const App = () => {
    // access task array from slice
    const { tasks } = useSelector((state) => state.task);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <div className="container">
                <h1>To do application</h1>
                <TaskInput />
                <TaskList />
            </div>
        </>
    );
};

export default App;
