import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie'

const Profile = () => {
    const [ingredients, setIngredients] = useState('')
    const [userData, setUserData] = useState({})

    

    useEffect(() => {
        const authToken = Cookies.get('userToken')

        Axios.get('http://localhost:3001/users/profile', { 
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${authToken}` 
            },
        })
        .then((response) => {
            console.log('Profile API response:', response.data)
            setUserData(response.data)
            setIngredients(response.data.ingredients || '')
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    const { username = '', email = ''} = userData || {}
    
    const handleSave = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3001/users/profile', { ingredients })
            .then((response) =>{
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <div className='Account Information'>
                <h2>Username: {username}</h2>
                <h2>Email: {email}</h2>
            </div>
            <form>
                <label>Ingredients:</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <button type='button' onClick={handleSave}>Save</button>
            </form>
        </div>
    )  
}

export default Profile;