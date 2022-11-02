import React, { useState, useEffect } from "react";

function Table() {
    const [stuff, setStuff] = useState([]);
    
    useEffect(() => {
        async function hi() {
            const response = await fetch("http://localhost:5000/food");
            const data = await response.json();
            setStuff(data);
        }
        hi();
    }, []);
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {stuff.map((row) => (
                    <tr>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
