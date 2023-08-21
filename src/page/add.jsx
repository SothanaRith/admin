import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';

const Add = () => {
    const [name, setName] = useState("");
    const [values, setvalue] = useState("");
    const [by, setby] = useState("");
    const [type, settype] = useState("");
    const [image, setimage] = useState("");

    //set item by default
    // const [item, setItem] = useState({
    //     name: "",
    //     description: "" ,
    //     by: "",
    //     code: "",
    //     image: ""

    // });

    //make for Add function item in button add
    const navigate = useNavigate()

    //make function for add data
    // const handleChange = (e) => {
    //     setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    // console.log(item)

    //make function for post data to database
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8080/api/book/addBook", { name, desc: values,image,type, by })
            navigate("/data")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="add">
            <div className="text_add"><h1>Add new item</h1></div>

            <form>
                <input type="text" placeholder="name" onChange={e => setName(e.target.value)} name="name" />

                <ReactQuill placeholder="description" theme="snow" value={values} onChange={setvalue} />
                <input type="text" placeholder="by" onChange={e => setby(e.target.value)} name="by" />
                <input type="text" placeholder="type" onChange={e => settype(e.target.value)} name="type" />
                <input type="text" placeholder="image" onChange={e => setimage(e.target.value)} name="image" />
                <button onClick={handleClick}>Add</button>
            </form>

        </div>
    )
}
export default Add;