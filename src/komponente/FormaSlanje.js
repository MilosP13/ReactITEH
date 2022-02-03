import React from 'react'
import levoplaneta from '../komponente/levoplaneta.png'
import { Button } from './Button';
import './FormaSlanje.css'


function FormaSlanje() {
    return (
          
            <div className="pozadina">
                
                <div className='forma-info'>


                <div className='forma-levo'>
                        
                        
                   <img className='slika-levo' src={levoplaneta} />

                    </div>





                    <div className='forma-desno'>
                        
                        <form className='forma'>
                            <h2 className='h2send'>Subscribe to our newsletter</h2>
                    

                            <div className='forme-div'>

                            <label className='forma-label'>Firstname</label> <br></br>
                            <input className='forma-input' type='text' name='ime' placeholder='Your firstname' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Lastname</label> <br></br>
                            <input className='forma-input' type='text' name='prezime' placeholder='Your lastname' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>E-mail</label> <br></br>
                            <input className='forma-input' type='email' name='prezime' placeholder='Your email adress' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Your message to the community</label> <br></br>
                            <textarea className='forma-input-textarea' placeholder='Your message' name="poruka" cols="50" rows="10" required></textarea>

                             </div>
                             <br></br>
                            <Button buttonSize='btn--large' buttonStyle='btn--outline' onClick={(e) => { window.confirm('Your subscription was successful') } }  >
                                Subscribe
                            </Button>
                        </form>
                    </div>
        


                   



                </div>
                </div>
             
            
        
    )
}

export default FormaSlanje