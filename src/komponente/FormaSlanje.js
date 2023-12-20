import levoplaneta from '../komponente/levoplaneta.png'
import { Button } from './Button';
import './FormaSlanje.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';





function FormaSlanje() {


const [countries, setCountries] = useState([]);
const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
  
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countriesData = response.data;
        setCountries(countriesData);
      })
      .catch(error => {
        console.log('Error fetching countries:', error);
      });
  }, []); 

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && message) {
      setSubmitted(true);
     
      setName('');
      setEmail('');
      setMessage('');
      window.confirm('Your subscription was successful');
    }
  };









    return (
          
            <div className="pozadina">
                
                <div className='forma-info'>


                <div className='forma-levo'>
                        
                        
                   <img className='slika-levo' src={levoplaneta} alt='slika' />

                    </div>





                    <div className='forma-desno'>
                        
                        <form className='forma' onSubmit={handleSubmit}>
                            <h2 className='h2send'>Subscribe to our newsletter</h2>
                    

                            <div className='forme-div'>

                            <label className='forma-label'>Full name</label> <br></br>
                            <input className='forma-input' type='text'  id="name" value={name} onChange={(e) => setName(e.target.value)} required/>

                             </div>


                             <div className='forme-div'>

                            <label className='forma-label'>E-mail</label> <br></br>
                            <input className='forma-input' type='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Choose your country</label> <br></br>
                            <select className='forma-input' placeholder='-' name="country" value={selectedCountry} onChange={handleCountryChange} required>
                            <option value="" disabled>Select a country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country.name.common}>
                                 {country.name.common}
                                    </option>
                                 ))}

                            </select>

                            </div>




                             <div className='forme-div'>

                            <label className='forma-label'>Your message to the community</label> <br></br>
                            <textarea className='forma-input-textarea' placeholder='Your message' name="poruka" cols="50" rows="10" value={message} required onChange={(e) => setMessage(e.target.value)}>  </textarea>

                             </div>
                             <br></br>
                            <Button type="submit" buttonSize='btn--large' buttonStyle='btn--outline'  >
                                Subscribe
                            </Button>
                        </form>
                        {submitted}
                    </div>
        


                   



                </div>
                </div>
             
            
        
    )
}

export default FormaSlanje