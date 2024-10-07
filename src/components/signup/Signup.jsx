import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    nameError: '',
    phoneError: '',
    passwordError: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { nameError: '', phoneError: '', passwordError: '' };
    const myData = new FormData(e.target);
    const payLoad = Object.fromEntries(myData);

    if (!payLoad.userName.trim()) {
      newErrors.nameError = 'Username is required.';
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[1-9])/.test(payLoad.userName)) {
      newErrors.nameError =
        'Username must contain at least one uppercase letter, one lowercase letter, and one number.';
    }

    if (!payLoad['Phone Number'].trim()) {
      newErrors.phoneError = 'Phone number is required.';
    } else if (!/^\d+$/.test(payLoad['Phone Number'])) {
      // Check if phone number contains only digits
      newErrors.phoneError = 'Phone number must contain only numbers.';
    }

    if (!payLoad.password.trim()) {
      newErrors.passwordError = 'Password is required.';
    } else if (
      payLoad.password.length < 8 ||
      !/[!@#$%^&*]/.test(payLoad.password)
    ) {
      newErrors.passwordError =
        'Password must be at least 8 characters long and include one special character.';
    }

    setError(newErrors);

    if (
      !newErrors.nameError &&
      !newErrors.phoneError &&
      !newErrors.passwordError
    ) {
      navigate('/');
      sessionStorage.setItem('register', JSON.stringify(payLoad));
    }
  };

  return (
    <section className='max-w-[500px] h-screen mx-auto bg-[#FBFCF7] shadow-2xl flex flex-col items-center justify-center'>
      <main className='w-[90%]'>
        <h1 className='text-3xl text-center mb-4 font-bold text-[#002366]'>
          Register Form
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <label htmlFor='userName' className='text-[#002366]'>
              {error.nameError ? (
                <p className='text-red-500'>{error.nameError}</p>
              ) : (
                'Username'
              )}
            </label>
            <input
              type='text'
              name='userName'
              id='userName'
              placeholder='Username'
              className='flex items-center gap-2 justify-center border-[#002366]  focus:outline-none outline-none  mt-4  rounded-md p-2 w-full text-xl border  text-[#002366]'
            />
          </div>
          <div>
            <label htmlFor='Phone Number' className='text-[#002366]'>
              {error.phoneError ? (
                <p className='text-red-500'>{error.phoneError}</p>
              ) : (
                'Phone Number'
              )}
            </label>
            <input
              type='tel'
              name='Phone Number'
              id='Phone Number'
              placeholder='Phone Number'
              className='flex items-center gap-2 justify-center border-[#002366]  focus:outline-none outline-none  mt-4  rounded-md p-2 w-full text-xl border  text-[#002366]'
            />
          </div>

          <div>
            <label htmlFor='password' className='text-[#002366]'>
              {error.passwordError ? (
                <p className='text-red-500'>{error.passwordError}</p>
              ) : (
                'Password'
              )}
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              className='flex items-center gap-2 justify-center border-[#002366]  focus:outline-none outline-none  mt-4  rounded-md p-2 w-full text-xl border  text-[#002366]'
            />
          </div>
          <div>
            <button
              type='submit'
              className='flex items-center gap-2 justify-center primary rounded-md p-2 w-full text-white  text-xl'
            >
              Submit
            </button>
          </div>
        </form>
        <h1 className='mt-8 text-center'>
          Already have an account?{' '}
          <Link className='text-[#002366]' to={'/login'}>
            Login
          </Link>
        </h1>
      </main>
    </section>
  );
};

export default Signup;
