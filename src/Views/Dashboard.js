import React from 'react'
import './styles/Dashboard.css'
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <>  
            <div className='wrapper2'>
                <div className='side__pannel'>
                    <section className='profile_info'>
                        <div style={{ margin: '10px 0 10px 0' }}>
                            <img className='profile__image' src='https://via.placeholder.com/150' alt='profile' />
                        </div>
                        <div style={{ margin: '10px 0 10px 0' }}>
                            Michael Something
                        </div>
                        <div style={{ margin: '10px 0 10px 0' }}>
                            <Link style={{textDecoration: 'none', color: 'blue'}} to="/todo">My Profile</Link> 
                        </div>
                    </section>
                    
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <hr style={{ margin: '30px 0 30px 0', width: '200px' }}/>
                    </div>

                    <div className="menu__text">
                        <strong>MENU</strong>
                    </div>

                    <div className='menu__items'>
                        <p>Inbox</p>
                        <p>Sent</p>
                        <p>Drafts</p>
                        <p>Deleted</p>
                        <p>Favourites</p>
                        <p>Analytics</p>
                        <p>Settings</p>
                    </div>

                    <div className='bottom__btns'>
                        <button className='btn btn1'>Upgrade Plan</button>
                        <button className='btn btn2'>Contact Support</button>
                    </div>
                
                </div>
                <div className='main__view'>
                    <section className='header'>
                        <div><h2>Overview</h2> </div>
                        <div style={{marginRight: '150px', fontSize: '20px', fontWeight: '300'}}>...</div>
                    </section>
                    <section className='view'>
                        view
                    </section>
                </div>
            </div>
            
        </>
       
            
    )
}

export default Dashboard
