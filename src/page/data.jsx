import React,{useEffect,useState} from "react";
import axios from "axios";
import Navber from "../conpoment/navber";
import { Link } from "react-router-dom";

const Data =() =>{
    const [list,setList] = useState([])

  useEffect(()=>{
    const fecthAllShop= async()=>{
        try{
            const res = await axios.get("http://localhost:8080/api/book/getBooks")
            setList(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fecthAllShop()
  },[])
  const handleDelete = async (id) =>{
    try{
        console.log(id)
        await axios.delete("http://localhost:8080/api/book/deleteBook/"+id)
        //refrest page
        window.location.reload()

    }catch(err){
        console.log(err)
    }
  }

    return(
        <div className="Data">
            <div className="benner">
                <Navber/>
                <h1>Book</h1>
                <Link to="/add"><button>Add</button></Link>
            </div>
            {list.map(item=>(
                    <div className="Book">
                        <div key={item.id} className="Bookinfo">
                            <p>{item.id} . {item.name}</p>
                            <p>{item.desc} . {item.by} . {item.type}</p>
                            <img src={item.image} alt="" />
                            <button><Link to={`/updateData/${item.id}`}>Update</Link></button>
                            <button onClick={()=>handleDelete(item.id)}>delete</button>
                            
                        </div>

                        
                    </div>
                ))}
            
        </div>
    )
}
export default Data;