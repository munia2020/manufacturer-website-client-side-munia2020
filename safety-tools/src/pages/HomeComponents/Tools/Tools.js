import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import './Tools.css';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch('https://nameless-depths-31123.herokuapp.com/tools')
        .then(res=>res.json())
        .then(data=>setTools(data));
    },[]);
    console.log(tools)
    const threeTools = tools.slice(0,3);
    console.log(threeTools)
    return (
        <div className='tools-container'>
            <h3>Featured Products</h3>
            <div className='three-tools'>
                {
                    threeTools.map(tool=><Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;