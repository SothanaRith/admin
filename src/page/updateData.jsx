import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

    
const UpdateData = ()=>{
    const [list, setList] = useState([])
    //make for updateData function item in button updateData
const navigate = useNavigate()
const location = useLocation()
const productID = location.pathname.split("/")[2]
    useEffect(() => {
        const fecthAlldetail = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/book/updateBook/" + productID)
                setList(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        fecthAlldetail()
    }, [])

    //set item by default
    const [item,setItem] = useState({
        name:"",
        desc: "",
        type: "",
        by: "",
        image : "",
        
    });

    //make function for updateData data
    const handleChange =(e) =>{
        setItem((prev)=>({...prev,[e.target.name]: e.target.value }));
    };

    //make function for post data to database
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8080/api/book/updateBook/"+ productID, item)
            navigate("/")
     }catch(err){
            console.log(err)
        }
    }
    console.log(item)
    return(
        <div className="updateData">
            <div className="text_updateData"><h1>updateData new item</h1></div>
            
            <from className="card_updateData" >
                <input type="text" placeholder="name" onChange={handleChange} name="name" required/>
                <input type="text" placeholder="description" onChange={handleChange} name="desc" required/>
                <input type="text"placeholder="type" onChange={handleChange} name="type" required/>
                <input type="text"placeholder="By" onChange={handleChange} name="by" required/>
                <input type="text"placeholder="image" onChange={handleChange} name="image" required/>
                <button onClick={handleClick}>updateData</button>
            </from>
        </div>
    )

}
export default UpdateData;