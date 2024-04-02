import React from "react";

const Chip = ({ isComplete }) => {
    return (
        <span
            style={
                isComplete
                    ? { color: "white", backgroundColor: "#3bcf3b" }
                    : { color: "white", backgroundColor: "tomato" }
            }
        >
            {isComplete ? "completed" : "pending"}
        </span>
    );
};

export default Chip;
