import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: ''
    });
    const [formError, setFormError] = useState({
        first_name: [],
        last_name: [],
        email: [],
        password: [],
        password_confirmation: [],
        role: []
    })

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
            const res = await axios.post('http://localhost:8000/api/user/store', form);
            if (res.data.status) {
                navigate('/dashboard/projects')
            }
        } catch (err) {
            const errors = err.response?.data?.errors || {};
            setFormError({
                first_name: errors.first_name || [],
                last_name: errors.last_name || [],
                email: errors.email || [],
                password: errors.password || [],
                password_confirmation: errors.password_confirmation || [],
                role: errors.role || []
            })
            setError(err.response?.data?.message || 'Something went wrong');
        }
    }

    return (
        <div className="flex justify-center items-center ">
            <div className="flex-wrap gap-3 w-full md:w-3/5">

                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Add User</h5>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='font-bold mb-4'>Add User </h5>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <label htmlFor="first_name" className='text-[#374151]'>First Name</label>
                                <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                                {formError.first_name.length > 0 &&
                                    <p className="text-red-500">
                                        {
                                            formError.first_name[0]
                                        }
                                    </p>
                                }
                            </div>
                            <div>
                                <label htmlFor="last_name" className='text-[#374151]'>Last Name</label>
                                <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                                {formError.last_name.length > 0 &&
                                    <p className="text-red-500">
                                        {
                                            formError.last_name[0]
                                        }
                                    </p>
                                }
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="email" className='text-[#374151]'>Email</label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                                {formError.email.length > 0 &&
                                    <p className="text-red-500">
                                        {
                                            formError.email[0]
                                        }
                                    </p>
                                }
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="password" className='text-[#374151]'>Password</label>
                                <input type="password" name="password" value={form.password} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                                {formError.password.length > 0 &&
                                    <p className="text-red-500">
                                        {
                                            formError.password[0]
                                        }
                                    </p>
                                }
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="password_confirmation" className='text-[#374151]'>Confirm Password</label>
                                <input type="password" name="password_confirmation" value={form.password_confirmation} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                                {formError.password_confirmation.length > 0 &&
                                    <p className="text-red-500">
                                        {
                                            formError.password_confirmation[0]
                                        }
                                    </p>
                                }
                            </div>
                            <div className=''>
                                <label htmlFor="role" className='text-[#374151]'>Role</label>
                                <select name="role" value={form.role} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1'>
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                                {formError.role.length > 0 &&
                                    <p className="text-red-500">
                                        {
                                            formError.role[0]
                                        }
                                    </p>
                                }
                            </div>
                            <div className='col-span-2'>
                                <input
                                    type="submit"
                                    value="Add"
                                    className='w-1/4 rounded-lg bg-[#4F46E5] text-white p-2 mt-1 cursor-pointer'
                                />
                            </div>
                        </div>
                        {error && <p className='text-red-500 mt-3 text-sm'>{error}</p>}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddUsers