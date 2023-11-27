import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div>
                <h1 style = {{size:'30px'}}>About Us</h1>
                <h1>At WhatToCook, our mission is to simplify your cooking experiences. Input your fridge's ingredients, and our recipe generator will create delicious meals just for you. Plus, our price comparer helps you find the best deals on ingredients, making your kitchen adventures both tasty and budget-friendly.</h1>
                <h1 style = {{size:'30px'}}> Meet the Creators </h1>
            </div>
            <div style = {{background: 'ivory', margin:'10px'}}>
                <h2 style = {{size: '25px'}}> Valerie Duffey</h2>
                <h3> Valerie Duffey is a senior at the University of South Carolina studying computer engineering. Her passion for this field ignited at a young age and plans to continue this love throughout her career.  Valerie boasts invaluable hands-on experience, having actively contributed to the development and optimization of 5G networks and creating dynamic dashboards explaining the data related to it. In addition to work, she is on the executive board of Tau Beta Pi, where she plans professional and philanthropic events to better those involved.</h3>
            </div>
            <div style = {{background: 'ivory', margin:'10px'}}>
                <h2 style = {{size: '25px'}}> Justin Martin</h2>
                <h3> Justin Martin is a senior at the University of South Carolina studying computer engineering. His passion for computers comes from his father as he watched him work on computers all his life. Another thing that lit his passion is video games and how they worked. Justin has worked on many cool projects such as robots and mini coding projects.</h3>
            </div>
            <div style = {{background: 'ivory', margin:'10px'}}>  
                <h2 style = {{size: '25px'}}> Antonio Turner</h2>
                <h3> Antonio Turner is a senior at the University of South Carolina studying computer engineering. His passion for computer engineering stems from his love of robotics and automation. He believes every process can be automated and re-constructed to make life in general better and faster for everyone. His background in DevOps engineering and robotic analysis, as well as his research in societal statistics motivates him to bring real solutions to everyday problems. Using his many leadership experiences, he hopes to bring the world into a new era of automation.</h3>
            </div>
            <div style = {{background: 'ivory', margin:'10px'}}>   
                <h2 style = {{size: '25px'}}> Adyen Owens</h2>
            </div>
            <div style = {{background: 'ivory', margin:'10px'}}>
                <h2 style = {{size: '25px'}}> Charles Castelot</h2>
            
            </div>

        </div>
    )
}

export default About