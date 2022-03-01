import NavBar from "./NavBar"
import Card from "./Card"
import Navigator from "./Navigator"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"

export default function Main()
{
    //const myState = useSelector((state : any) => state.changeTheUser);
        const isLogged =useSelector((state : any)=>  state.logStatus)
    const [datab,setBlogs]=useState([{
            id:"",
            aid:"",
            isDraft:"",
            title:"",
            authorName:"",
            createdDate:"",
            description:"",
            imageUrl:"",
    
        }])
        useEffect(()=>{
            fetch("/allblogs").then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonRes=>setBlogs(jsonRes))
        })
    const blogs = datab.map(item =>
    {
        return(
           
            <div>
            {
            (item.isDraft=="0"&& 
            <li> 
                <Card  
                    key={item.id}
                    {...item}
                />
            </li>
            )
            }
            
            </div>          
            
        )
    }
    )
    return(
       
        <div className="app">

            <NavBar/>
            <Navigator/>
            <button onClick={() =>console.log(datab)}>fetch</button>
           {//isLogged &&  //show blogs only if isLogged is true
            <section  className="list" >
                <ol>
                    {blogs}
                </ol>
            </section>
            }
        </div>
     
    )
}