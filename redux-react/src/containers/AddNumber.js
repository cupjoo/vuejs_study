import React from "react";
import store from "../store";
import AddNumber from "../components/AddNumber"

const Component = () => {
    return (
        <AddNumber onClick={
            (size) => store.dispatch({type: 'INCREMENT', size})
        }></AddNumber>
    );
};

export default Component;