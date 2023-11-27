import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div>
                <h1>About Us</h1>
                <h1>At WhatToCook, our mission is to simplify your cooking experiences. Input your fridge's ingredients, and our recipe generator will create delicious meals just for you. Plus, our price comparer helps you find the best deals on ingredients, making your kitchen adventures both tasty and budget-friendly.</h1>
            </div>
            <div style = {{background: 'white', margin:'10px'}}>
                <h2> Valerie Duffey</h2>
                <h3> Valerie Duffey is a senior at the University of South Carolina studying computer engineering. Her passion for this field ignited at a young age and plans to continue this love throughout her career.  Valerie boasts invaluable hands-on experience, having actively contributed to the development and optimization of 5G networks and creating dynamic dashboards explaining the data related to it. In addition to work, she is on the executive board of Tau Beta Pi, where she plans professional and philanthropic events to better those involved.</h3>
            </div>

        </div>
    )
}

export default About