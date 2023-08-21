import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navber from "../conpoment/navber";
const User = () => {
    const [list, setList] = useState([])
    useEffect (() => {
        const fecthAllShop = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/user/getUsers")
                setList(res.data)
            } catch (err) {
                console.log(err)
            }

        }
        fecthAllShop();
    }, [])

    const headleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/api/user/deleteUser/" + id)
            window.location.reload()

        } catch (err) {
            console.log(err)

        }

    }
    return (
        <div >
            <Navber/>
            {list.map(item=>(
                <div className="user">
                    
                    <h1>{item.id}</h1><br/>
                    <p>{item.username} </p><br />
                    <p>{item.email}</p>
                    <button><Link to={`/updateUser/${item.id}`}>update</Link></button>
                    <button onClick={()=>headleDelete(item.id)}> Delete</button>
                </div>
            ))}

        </div>
    )
}
export default User;