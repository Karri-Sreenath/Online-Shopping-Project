import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useActionState } from 'react';
import './headerStyles.css';

import type { RootState } from './store';
import { useSelector} from 'react-redux';


interface UserAccountDetails {
    accountId: string;
    accountPassword: string;
}

async function signupAction(prevState, formData) {
    var userDetails = {};

    userDetails.accountId = formData.get('accountId');
    userDetails.accountPassword = formData.get('accountPassword');
    userDetails.accountMailId = formData.get('accountMailId');

    const errors = {};
    if (!userDetails.accountId || userDetails.accountId.length < 4) errors.accountId = 'Account ID must be at least 4 characters';
    if (!userDetails.accountPassword || userDetails.accountPassword.length < 6) errors.accountPassword = 'Password must be at least 6 characters';
    if (!userDetails.accountMailId || !userDetails.accountMailId.includes('@')) errors.accountMailId = 'Valid email required';

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }
    axios.post('http://localhost:3000/new/userSignup', userDetails).then((response) => {
        return { success: true };
        console.log(response);
    }).catch(() => {
        console.log("under catch");
    })
}

export default function Header() {
    const[isUserLoggedin, setUserLoggedin] = useState(false);
    const [formState, formAction] = useActionState(signupAction, { success: null, errors: {} });
    const [userAccountDetails, setUserAccountDetails] = useState({} as UserAccountDetails);
    const [isInValidUser, setIsInValidUser] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [signupShow, setSignupShow] = useState(false);
    const handleSignupClose = () => setSignupShow(false);
    const handleSignupShow = () => setSignupShow(true);

    const navigate = useNavigate();
    function handleAccountIdChange(event) {
        setUserAccountDetails({
            ...userAccountDetails,
            accountId: event.target.value
        });
    }
    const cartDetails = useSelector((state: RootState) => state.cartDetails);

    function handlePasswordChange(event) {
        setUserAccountDetails({
            ...userAccountDetails,
            accountPassword: event.target.value
        });
    }

    function handleLoginClick() {
        axios.post('http://localhost:3000/validate/user', userAccountDetails)
            .then((response) => {
                if (response.data.status === 'success') {
                    sessionStorage.setItem("authToken", response.data.token);
                    setUserLoggedin(true);
                    // Handle successful login
                    console.log('User logged in successfully');
                    setIsInValidUser(true);
                    navigate("/productDetails");
                    handleClose();
                } else {
                    // Handle login failure
                    console.log('Invalid credentials');
                    setIsInValidUser(false);
                }
            })
            .catch((error) => {
                console.error('Error during login:', error);
            });
    }

    const handleViewCartClick = () => {
        navigate('/viewCartDetails');
    }
    return (
        <header>
            <div className='title'>
                Shopping app
            </div>   
            { 
                !isUserLoggedin ? 
                    <div>
                        <Button variant="primary" onClick={handleShow}>
                            Login
                        </Button>&nbsp;
                        <Button variant="primary" onClick={handleSignupShow}>
                            New signup
                        </Button>
                    </div>  
                    : 
                    <div>
                        <Button variant="primary" onClick={handleShow}>
                            Logout
                        </Button>
                        <i title="View Cart Details" className="bi bi-cart" style={{'fontSize': '25px'}} onClick={handleViewCartClick}></i> ({cartDetails.cartData.length})
                    </div>
            } 

            {/* Signup Modal */}
            <Modal show={signupShow} onHide={handleSignupClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Signup</Modal.Title>
                    {JSON.stringify(formState)}
                </Modal.Header>
                <Modal.Body>
                    <form action={formAction} className="signup-form">
                        <h2>New User Signup</h2>

                        <label>
                            Account ID
                            <input type="text" name="accountId" />
                            {formState.errors?.accountId && <span className="error">{formState.errors.accountId}</span>}
                        </label>

                        <label>
                            Account Password
                            <input type="password" name="accountPassword" />
                            {formState.errors?.accountPassword && <span className="error">{formState.errors.accountPassword}</span>}
                        </label>

                        <label>
                            Account Mail ID
                            <input type="email" name="accountMailId" />
                            {formState.errors?.accountMailId && <span className="error">{formState.errors.accountMailId}</span>}
                        </label>

                        <button >Sign Up</button>

                        {formState.success && <p className="success">🎉 Account created successfully!</p>}

                        </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSignupClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            

            {/* Login popup  */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="loginPopup">
                            <li>
                                <input type="text" placeholder="Account Id" className="form-control" onChange={handleAccountIdChange}/>
                            </li>
                            <li>
                                <input type="password" placeholder="Account Password" onChange={handlePasswordChange} className="form-control"/>
                            </li>
                            <li>
                               <input type="checkbox" /> Remember Me
                            </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</Button>
                    <Button type="button" className="btn btn-primary" onClick={handleLoginClick}>Login</Button>
                </Modal.Footer>
                <div>
                    {
                        (isInValidUser == false) ?
                            <div className="login-success-message">
                                Invalid User 
                            </div> : ''
                    }
                </div>
            </Modal>


        </header>
    )
}