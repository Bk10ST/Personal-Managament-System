import { Button, Checkbox, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const SignUpForm = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Email:</p>
            <Input placeholder='Email' />
            <p className='pt-4'>Password:</p>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <div className='d-flex justify-content-between align-item-center pt-3' >
                <Checkbox className=''>Remember Me</Checkbox>
                <b className='signUp'>Forgot Password?</b>
            </div>
            <Button colorScheme='' className='w-100 mt-4 btn-login' borderRadius='none' fontSize='14px'>SignUp</Button>
            <Link to={'/login'}>
                <h6 className='mt-3 signUp'>Login </h6>
            </Link>
        </form>
    )
}