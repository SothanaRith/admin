import React,{useEffect,useState} from "react";
import axios from "axios";
import Navber from "../conpoment/navber";

const Data =() =>{
    const [list,setList] = useState([])

  useEffect(()=>{
    const fecthAllShop= async()=>{
        try{
            const res = await axios.get("http://localhost:8080/api/comment/getcomment")
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
        await axios.delete("http://localhost:8080/api/comment/deleteComment/"+id)
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
                <h1>Comment</h1>
            </div>
            {list.map(item=>(
                    <div className="comment" key={item.id}>
                        <div  className="commentinfo">
                            <p>{item.id} . {item.email}</p>
                            <p>{item.title}</p>
                            <button onClick={()=>handleDelete(item.id)}>delete</button>
                            
                        </div>

                        
                    </div>
                ))}
            
        </div>
    )
}
export default Data;