import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import logo from '../../images/logo.png'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom'
import './header.css'

const Header = ({ backButton }) => {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (<IconButton onClick={() => history.replace(backButton)}><ArrowBackIcon fontSize="large" className="header_icon" /> </IconButton>) :
                (<IconButton> <PersonIcon className="header_icon" fontSize="large" />
                </IconButton>)}
            <Link to="/">
                <img className="headerLogo" src={logo} />
            </Link>
            <Link to="chat">
                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header 