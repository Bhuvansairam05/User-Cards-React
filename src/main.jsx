import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Data from './data.json'
import './App.css'
let now = new Date();
for(let i=0;i<Data.length;i++){
    let lastSeen = new Date(Data[i].timeStamp);
    let diffMillis = now-lastSeen;
    let minutes = diffMillis/(1000*60);
    let hours = minutes/60;
    let days = hours/24;
    if(days>7){
        Data[i].isOnline = false;
        Data[i].status = "Last seen Several days ago";
    }
    else if(days>2){
        Data[i].isOnline = false;
        Data[i].status = "Last seen 2 days ago";
    }
    else if(hours>3){
        Data[i].isOnline = false;
        Data[i].status = "Last seen 3 hours ago";
    }
    else{
        Data[i].status = `Online`;
        Data[i].isOnline = true;
    }
}
createRoot(document.getElementById('root')).render(
    <>
    <div className='cards-container'>
        {Data.map((item,index)=>(
            <App key={index} {...item}></App>
        ))}
    </div>
    </>  
)
