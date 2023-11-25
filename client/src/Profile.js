import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie'

const Profile = () => {
    const [userData, setUserData] = useState({})    

    // Fetch email and username
    useEffect(() => {
        const authToken = Cookies.get('userToken')

        Axios.get('http://localhost:3001/users/profile', { 
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${authToken}` 
            },
        })
        .then((response) => {
            console.log('Profile response:', response.data)
            setUserData(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }, [])

    const { username = '', email = ''} = userData || {}
    
    const [savedIngredients, setSavedIngredients] = useState([])
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientQuantity, setIngredientQuantity] = useState('');


    const handleSaveIngredients = async () => {
      try {
        console.log('Input Ingredient Name:', ingredientName)

        const trimmedIngredientName = ingredientName.trim(); // trim to remove leading/trailing whitespaces

        if (!trimmedIngredientName) {
          console.error('Ingredient name cannot be empty.');
          return;
        }        

        console.log('Trimmed Ingredient Name:', trimmedIngredientName)

        const response = await Axios.post(
          'http://localhost:3001/users/profile_ingredient_list',
          { name: trimmedIngredientName,
            quantity: ingredientQuantity,
          },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${Cookies.get('userToken')}`,
            },
          }
        )
        console.log(response.data)
        //setSavedIngredients(response.data.updatedIngredients)
        setIngredientName('')
        setIngredientQuantity('')
      }
      catch(error) {
        console.error(error)
      }

    }

        // Fetch and display saved ingredients
        useEffect(() => {
          const fetchSavedIngredients = async () => {
            try {
              const response = await Axios.get('http://localhost:3001/users/saved_ingredients', {
                withCredentials: true,
                headers: {
                  Authorization: `Bearer ${Cookies.get('userToken')}`,
                },
              })
              setSavedIngredients(response.data.savedIngredients)
            }
            catch (error) {
              console.error(error)
            }
          }

          fetchSavedIngredients()
          
        }, [])

    return (
        <div>
            <h1>Profile Page</h1>
            <div className='Account Information'>
                <h2>Username: {username}</h2>
                <h2>Email: {email}</h2>
            </div>
            <form>
                <h3>Ingredients:</h3>
                <input
                  type='text'
                  value={ingredientName}
                  onChange={(e) => setIngredientName(e.target.value)}
                  placeholder='Ingredient Name'
                />
                <input
                type='text'
                  value={ingredientQuantity}
                  onChange={(e) => setIngredientQuantity(e.target.value)}
                  placeholder='Quantity'
                />
                <button type='button' onClick={handleSaveIngredients}>
                  Save
                </button>
            </form>

          <div>
            <h3>Saved Ingredients:</h3>
            <ul>
              {savedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
              ))}
              <button>Delete</button>
            </ul>
          </div>            
        </div>
    )  
}

export default Profile;