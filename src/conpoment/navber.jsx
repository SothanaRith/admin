import React from "react";
import { Link } from "react-router-dom";

const Navber = ()=>{
    return(
        <div className="navber">
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/data"><li>Data</li></Link>
                <Link to="/user"><li>User</li></Link>
                <Link to="/comment"><li>comment</li></Link>
                
            </ul>

        </div>
    )
}
export default Navber;