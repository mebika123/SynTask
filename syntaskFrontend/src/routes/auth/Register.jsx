import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'



const Register = () => {

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Register the user
      const response = await axios.post('/register', form);
      // Redirect or reload
      if(response.data.user.role=='admin'){
        navigate('/dashboard');
      }
      else if(response.data.user.role=='user'){
        navigate('/user');
      }
      
    } catch (err) {
      if (err.response?.data?.errors) {
        // Show first validation error
        const firstError = Object.values(err.response.data.errors)[0][0];
        setError(firstError);
      } else {
        setError(err.response?.data?.message || 'Registration failed');
      }
    }
  }
    return (
      <div className='h-screen flex'>
        <div className="w-1/2 bg-gradient flex items-center">
          <div className="text-white ms-12 text-lg ">
            <h4 className="font-bold text-4xl mb-3">SynTask</h4>
            <p>Smart Task and Project Management Platform</p>
            <ul className='list-disc mt-5 list-inside'>
              <li>Advanced API Infrastructure</li>
              <li>User-friendly Interface</li>
              <li>Powerful Integrations</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-[#E5E7EB] px-28">
          <div className="w-full">
            <h4 className="font-bold mb-2 text-3xl text-center text-[#111827]">Create your account</h4>
            <p className="mb-6 text-center text-[#4B5563]">Start managing your tasks efficiently</p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <label htmlFor="first_name" className='text-[#374151]'>First Name</label>
                  <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                </div>
                <div>
                  <label htmlFor="last_name" className='text-[#374151]'>Last Name</label>
                  <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                </div>
                <div className='col-span-2'>
                  <label htmlFor="email" className='text-[#374151]'>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                </div>
                <div className='col-span-2'>
                  <label htmlFor="password" className='text-[#374151]'>Password</label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                </div>
                <div className='col-span-2'>
                  <label htmlFor="password_confirmation" className='text-[#374151]'>Confirm Password</label>
                  <input type="password" name="password_confirmation" value={form.password_confirmation} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                </div>
                <div className='col-span-2'>
                  <input type="submit" value="Sign Up" className='w-full rounded-lg bg-[#4F46E5] text-white p-2 mt-1 cursor-pointer' />
                </div>
              </div>
              {error && <p className='text-red-500 mt-3 text-sm'>{error}</p>}
            </form>

            <p className="text-[#4B5563] text-center mt-5">Already have an account? <Link to='/login' className='text-[#4F46E5]'>Log in</Link></p>
          </div>

        </div>
      </div>
    )
  }

  export default Register