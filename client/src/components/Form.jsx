import React, { useState } from "react";
import { useNavigate } from "react-router";

async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newFood = {
        name: e.target.name.value,
        price: e.target.price.value,
    };
    console.log("SOMETHING HAPPENED YAY");
    console.log(newFood);
    await fetch("http://localhost:5000/food", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
    }).catch((error) => {
        window.alert(error);
        return;
    });
    
    // setForm({ name: "", position: "", level: "" });
    // useNavigate("/");
}

function Form() {
    function navigate() {}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" />
                <input name="price" />
                <input name="submit" type="submit" />
            </form>
            <button>Go To Table</button>
        </div>
    );
}

export default Form;
