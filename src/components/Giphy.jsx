import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Loading from './Loading' 

function Giphy(){
    const [data, setData]=useState([]);
    const[search, setSearch]=useState("");
    const[ isLoading, setIsLoading]=useState(false);
    const[isError, setIsError]=useState(false);
    useEffect(()=>{
        const fetchData = async()=>{
            setIsError(false);
            setIsLoading(true);
            try{
            const results =await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "K69J6oOK6EbZ4xci6i7kR5BMtuJA6HQ7",
                    limit: 10
                }
            });
        console.log(results);
        setData(results.data.data);}
        catch (err){
            setIsError(true)
            setTimeout(()=> setIsError(false),4000)
        }
        setIsLoading(false);
        };
        fetchData()
    },[]);
    const renderGifs=()=>{
        if(isLoading){
            return(<div className=""><Loading /></div>)
        }
        return(data.map(el =>{
            return(
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url}/>
                </div>
            )
        }))
    }
    const renderError=()=>{
        if(isError)
        {
            return(<div class=" alert alert-danger alert-dismissible fade show" role="alert">
                Unable to Load GIFs right now . Please try again Later.
            </div>)
        }
    }
    const handleSearchChange=event=>{
        setSearch(event.target.value)
    }
    const handleClick=async event=>{
            event.preventDefault()
            setIsError(false);
            setIsLoading(true);
            try{
                const results =await axios("https://api.giphy.com/v1/gifs/search", {
                    params: {
                        api_key: "K69J6oOK6EbZ4xci6i7kR5BMtuJA6HQ7",
                        limit: 10,
                        q: search
                    }
                });
            console.log(results);
            setData(results.data.data);}
            catch (err){
                setIsError(true)
                setTimeout(()=> setIsError(false),4000)
            }
            setIsLoading(false);
            };
            function Counter() {
                
                const [count, setCount] = useState(10);
                setCount(count+10)
                
              }    
        const HandleLoad=async event=>{
            event.preventDefault()
            setIsError(false)
            setIsLoading(true)
             
            Counter()  
            try{
                const results =await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "K69J6oOK6EbZ4xci6i7kR5BMtuJA6HQ7",
                        limit: count,
                        q: search
                    }
                });
            console.log(results);
            setData(results.data.data);}
            catch (err){
                setIsError(true)
                setTimeout(()=> setIsError(false),4000)
            }
            setIsLoading(false);    
              
        };
            
    
    return(<div className="m-2">
        {renderError()}
        <form className="form-inline justify-content-center m-2" style={{display: "inline-block"}}>
            <input type="text" onChange={handleSearchChange} value={search} placeholder="Search GIFs..." className="form-control" />
            <button onClick={handleClick} type="submit" className="btn btn-success mx-2" style={{display: "inline-block"}}>Search</button>
        </form>
        <div className ="container gifs">{renderGifs()}</div>
        <form className="form-inline justify-content-center m-2" style={{display: "inline-block"}}>
        <button onClick={HandleLoad} type="submit" className="btn btn-primary mx-2" style={{display: "inline-block"}}>Load More</button>
        </form>
        </div>
    );
}
export default Giphy;