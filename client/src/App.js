import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Table from "./components/Table";

function App() {
    return (
        <div>
            <Form></Form>
            <Table></Table>
        </div>
    );
}

export default App;
