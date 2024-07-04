import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';
import '../css/Socialicon.css'

const Socialicon = () => {
    return (
        <div className="sticky-container">
            <ul className="sticky">
                <li>
                    <FacebookIcon style={{ fontSize: 25 }} color="primary" className='facebook' />
                    <p>Facebook</p>
                </li>
                <li>
                    <XIcon style={{ fontSize: 25 }} className='twitter' />
                    <p>Twitter</p>
                </li>
                <li>
                    <a href="https://www.instagram.com/rameshram3636?igsh=MTdoZGt3ZHQ0MGRwMg==" target="_blank" rel="noopener noreferrer" />
                    <InstagramIcon style={{ fontSize: 25 }} sx={{ color: pink[500] }} className='instagram' />
                    <p>Instagram</p>
                </li>
            </ul>
        </div>
    );
};

export default Socialicon;
