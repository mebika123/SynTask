import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
    const { id } = useParams();
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        role: ''
    });
    const [error, setError] = useState(null);
    const navigate =useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/user/${id}`);
                const { first_name, last_name, email, role } = res.data.user;
    
                setForm({
                    first_name,
                    last_name,
                    email,
                    role
                });
            } catch (err) {
                setError("Failed to fetch user data");
            }
        };
    
        fetchUser();
    }, [id]);
    

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
            const res = await axios.put(`http://localhost:8000/api/user/update/${id}`, form);
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
        <div className="flex justify-center items-center">
            <div className="flex-wrap gap-3 w-full md:w-3/5">
                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Edit User</h5>
                </div>

                <div className="shadow bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='font-bold mb-4'>Edit User</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <label className='text-[#374151]'>First Name</label>
                                <input type="text" name="first_name" value={form.first_name} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                            </div>
                            <div>
                                <label className='text-[#374151]'>Last Name</label>
                                <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                            </div>
                            <div className='col-span-2'>
                                <label className='text-[#374151]'>Email</label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1' />
                            </div>

                            <div className='col-span-2'>
                                <label className='text-[#374151]'>Role</label>
                                <select name="role" value={form.role} onChange={handleChange} className='w-full rounded-lg border p-2 mt-1'>
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <div className='col-span-2'>
                                <input type="submit" value="Update" className='w-full rounded-lg bg-[#4F46E5] text-white p-2 mt-1 cursor-pointer' />
                            </div>
                        </div>
                        {error && <p className='text-red-500 mt-3 text-sm'>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUsers;