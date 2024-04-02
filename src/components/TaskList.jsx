import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";

const TaskList = () => {
    // access task array from slice
    const { tasks } = useSelector((state) => state.task);

    return (
        <div className="task-container">
            {tasks.length >= 1 ? (
                <>
                    {tasks.map((task) => {
                        return <SingleTask key={task.id} task={task} />;
                    })}
                </>
            ) : (
                <>
                    <p className="no-task-warning">no tasks</p>
                </>
            )}
        </div>
    );
};

export default TaskList;
