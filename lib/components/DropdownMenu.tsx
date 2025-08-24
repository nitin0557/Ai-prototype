import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select an option");

    const options = ["Option 1", "Option 2", "Option 3"];

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    background: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                }}
            >
                {selected} <FaChevronDown />
            </button>

            {isOpen && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        margin: 0,
                        padding: "5px",
                        listStyle: "none",
                    }}
                >
                    {options.map((opt, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelected(opt);
                                setIsOpen(false);
                            }}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                            }}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
