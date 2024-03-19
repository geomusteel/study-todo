import React, {useState} from 'react';

const initialValue = [
    {id: 0, color: "#f29b76", isSelected: true, boxSize: "20px"},
    {id: 1, color: "#facd89", isSelected: false, boxSize: "14px"},
    {id: 2, color: "#cce198", isSelected: false, boxSize: "14px"},
    {id: 3, color: "#89c997", isSelected: false, boxSize: "14px"},
    {id: 4, color: "#7ecef4", isSelected: false, boxSize: "14px"},
    {id: 5, color: "#8f82bc", isSelected: false, boxSize: "14px"},
    {id: 6, color: "#c490bf", isSelected: false, boxSize: "14px"},
    {id: 7, color: "#f29c9f", isSelected: false, boxSize: "14px"}
]

interface UseColorReturn {
    colorList: {
        id: number;
        color: string;
        isSelected: boolean;
        boxSize: string;
    }[];
    handleColor: (id: number) => void;
}

const UseColor = () => {

    const [color, setColor] = useState<UseColorReturn['colorList']>(initialValue)

    const handleColor = (id: number) => {
        const newItem = color.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isSelected: true,
                    boxSize: "20px",
                };
            }
            return {...item, isSelected: false, boxSize: "14px"};
        });

        setColor(newItem);
    };


    return {colorList: color, handleColor}
};

export default UseColor;