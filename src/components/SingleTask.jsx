import { useDispatch } from "react-redux";
import Chip from "./Chip";
import { MdOutlineDeleteOutline, MdOutlineCheck } from "react-icons/md";
import { deleteTask, taskCompletion } from "../features/tasks/taskSlice";

const SingleTask = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className="single-task">
            <p>{task.title}</p>
            <div className="action-btns">
                <Chip isComplete={task.isComplete} />
                <button onClick={() => dispatch(deleteTask(task.id))}>
                    <MdOutlineDeleteOutline />
                </button>
                {!task.isComplete && (
                    <button onClick={() => dispatch(taskCompletion(task.id))}>
                        <MdOutlineCheck />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SingleTask;
