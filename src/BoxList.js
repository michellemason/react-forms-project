import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"; 


const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    };

    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComps = boxes.map(box => (
        <Box 
            id={box.id}
            handleRemove={remove}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div className="BoxList">
            <NewBoxForm addBox={add} />
            {boxComps}
        </div>
    )
}

export default BoxList;