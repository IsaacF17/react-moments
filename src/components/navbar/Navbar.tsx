import * as React from 'react';
import { useState } from 'react';
import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom';

interface IDropDown {
    isVisible: boolean;
}

const DropDown: React.FC<IDropDown> = ({ isVisible }) => {
    return (
        isVisible ?
            <div className='dropdown-container'>
                <ul>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            : null
    )
}


const Navbar: React.FC = () => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <>
            <div className='navbar-container'>
                <div className='title'>
                    <span tabIndex={0} onClick={() => navigate('/')}>Moments</span>
                </div>
                <div className='inline-ul group-two'>
                    <ul>
                        <Link to={"/user-login"}>Login</Link>

                    </ul>
                </div>
                <i
                    className={`${showDropDown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}
                    id='bars-icon'
                    onClick={() => setShowDropDown(!showDropDown)}
                ></i>
            </div>
            <DropDown isVisible={showDropDown} />
        </>
    )
}

export default Navbar