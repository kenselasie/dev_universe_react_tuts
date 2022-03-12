import React, { Component } from 'react'
import './styles/Dashboard.css'
import Table from '../Components/Table'
import MainView from '../Components/MainView'
import { Link } from 'react-router-dom'
import Users_area from '../Components/Users_area.js'
import { RiInboxUnarchiveLine } from 'react-icons/ri'
import { MdFilePresent } from 'react-icons/md'
import { MdOutlineDrafts } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'
import { MdPublishedWithChanges } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'











function Dashboard() {
    return (
        <>  
            <div className='wrapper2'>
                <div className='side__pannel'>
                    <div className="menu_items">
                        <section className='profile_info'>
                            <div className='user_image'>
                                <img className='profile__image' src='./images/user profile.jpg' alt='profile' />
                            </div>
                            <div className='user_name' >
                                Prince Nedjoh
                            </div>
                            <div>
                                <Link to="/todo"><a>My Profile</a></Link> 
                            </div>
                            <div>
                                <hr style={{margin: '20px'}} className='hr_general'/>
                            </div>
                        </section>
                        
                    
                
                        <div className="decoy_with_chart">
                                <div className="menu__text">
                                    <strong>MENU</strong>
                                </div>

                                <div className='menu__items'>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< RiInboxUnarchiveLine /></div><div>Inbox</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< MdFilePresent /></div><div>Sent</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< MdOutlineDrafts /></div><div>Drafts</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< AiFillDelete /></div><div>Deleted</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< MdOutlineFavoriteBorder /></div><div>Favourites</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< SiGoogleanalytics /></div><div>Analytics</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< MdPublishedWithChanges /></div><div>Changes</div></div>
                                    <div className = 'menu__items_individual'><div className='menu__items_individual_icon'>< FaMoneyBillAlt /></div><div>Income</div></div>
                                </div>
                        </div>
                    </div>

                            <div className='bottom__btns'>
                                <button className='btn btn1'>Upgrade Plan</button>
                                <button className='btn btn2'>Contact Support</button>
                            </div>
                </div>
                <div className='side__pannel_decoy'>
                        
                </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div className="main__view_h">
                    
                    <div className='main__view'>
                        <section className='header'>
                            <div className = 'overview'>Overview</div>
                            <div className='header_rule'></div>
                        </section>
                        <section className='view'>
                            <div>
                                <MainView />
                            </div>
                            
                        </section>
                        <section className='table__container'>
                            <div className='table'>
                                <Table />
                            </div>
                        </section>


                        <div>
                            <Users_area />
                        </div>



                    </div>
                </div>
            </div>
            
        </>
       
            
    )
}

export default Dashboard
