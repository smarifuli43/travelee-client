import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const {
    setName,
    setEmail,
    setPassword,
    signInUsingGoogle,
    createNewUser,
    logOut,
  } = useAuth();
  const history = useHistory();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser();
    history.push('/login');
  };

  return (
    <div className='container my-5'>
      <h2 className='text-center mb-5'>Create an Account</h2>
      <div className='row  d-flex justify-content-center'>
        <div className='col-12 col-lg-6 form mx-3 rounded-3 p-4'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                onBlur={handleNameChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onBlur={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onBlur={handlePasswordChange}
                required
              />
            </Form.Group>

            <button className='btn-travelee'>Submit</button>
            <Link to='/login' className='mt-3 d-block'>
              Already have an Account? Login
            </Link>
          </Form>

          <div className=' mt-4'>
            <h1 className='me-3'>----Or-----</h1>
            <Button
              className='btn-sm btn-travelee d-flex align-items-center'
              onClick={signInUsingGoogle}
            >
              <i className='fab fa-google fs-3 me-3'></i>
              Sign in With Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
