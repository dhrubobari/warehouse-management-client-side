import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div>
            <h2 className='mt-5'>Register Account</h2>
            <form className='mx-auto d-flex flex-column w-50' onClick={handleRegister}>
            <input className='mt-5 p-2' type="text" ref={emailRef} placeholder='Your Email' />
            <input className='mt-5 p-1' type="text" ref={passwordRef} placeholder='Type Password' />
            <button type="button" class="btn btn-primary mt-5">Create</button>
            </form>
        </div>
    );
};

export default Register;