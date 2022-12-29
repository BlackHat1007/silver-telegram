import React from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import kart from "../images/kart.png"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-left-panel'>
                <div>
                    <Link to="/">
                        <Avatar variant="square">
                            <img src={kart} height="40px" />
                        </Avatar>
                    </Link>

                </div>
            </div>

            <div className='header-center-panel'>
                {/* <div>Search</div> */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>

            <div className='header-right-panel'>
                <div><Link to="/contact">Contact Us</Link></div>
                <div><Link to="/about">About Us</Link></div>
                <div><Link to="/login">Login/Register</Link></div>
            </div>
        </div>
    )
}





