


    import { useEffect,useState } from "react"
    import NotDetay from "../components/NotDetay"
import NotForm from "../components/NotForm"

    export default function Home() {

        const [notlar,setNotlar]=useState(null)

        useEffect(()=>{
            
    const fetchNotlar=async ()=>{

        const response=await fetch('/api/notlar')

        const json=await response.json()
        if(response.ok){
            setNotlar(json)
        }

    }
        
        fetchNotlar()
        }, [])
    return (
        <div className="home">
            <div className="not-form">
          <NotForm />
            </div>
        <div className="notlar">
    {notlar && notlar.map((not)=>(
    <NotDetay key={not._id} not={not}/>
    ))}
            
        </div>
        </div>
    )
    }
