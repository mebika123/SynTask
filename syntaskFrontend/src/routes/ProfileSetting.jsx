import React, { useState } from 'react'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../context/AuthContext'
import axios from '../axios'


const ProfileSetting = () => {
    const { user } = useAuth();
    const [form, setForm] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    });
    const [passwordForm, setPasswordForm] = useState({
        old_password: '',
        password: '',
        password_confirmation: ''
    });
    const [passwordError, setPasswordError] = useState({
        old_password: [],
        password: [],
    });
    const [formError, setFormError] = useState({
        first_name: [],
        last_name: [],
        email: [],
    })
    const [error, setError] = useState(null);
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
            const res = await axios.put(`/userInfo/update`, form);
            if (res.data.status) {
                alert('Your info has been updated')
            }
        } catch (err) {
            const errors = err.response?.data?.errors || {};
            setFormError({
                first_name: errors.first_name || [],
                last_name: errors.last_name || [],
                email: errors.email || [],
            })
            setError(err.response?.data?.message || 'Something went wrong');
        }
    }
    const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: '' });


    const evaluatePasswordStrength = (pwd) => {
        let score = 0;
        if (pwd.length >= 8) score += 1;
        if (/[a-z]/.test(pwd)) score += 1;
        if (/[A-Z]/.test(pwd)) score += 1;
        if (/[0-9]/.test(pwd)) score += 1;
        if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
        let label = 'Too Short';
        if (score <= 2) label = 'Weak';
        else if (score === 3 || score === 4) label = 'Medium';
        else if (score === 5) label = 'Strong';
        return { score: (score / 5) * 100, label };
    };

    const passwordChange = (e) => {
        setPasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'password') {
            setPasswordStrength(evaluatePasswordStrength(e.target.value));
        }
    }

    const passwordSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setPasswordError({ old_password: [], password: [] });

        try {
            const res = await axios.put('/userInfo/password', passwordForm);
            if (res.data.status) {
                alert('Your password has been updated');
                setPasswordForm({ old_password: '', password: '', password_confirmation: '' });
                setPasswordStrength({ score: 0, label: '' });

            }
            
        } catch (err) {
            // Validation errors come in err.response.data.errors
            const errors = err.response?.data?.errors || {};
            setPasswordError({
                old_password: errors.old_password || [],
                password: errors.password || [],
            });
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="flex justify-center items-center ">
            <div className="flex-wrap gap-3 w-full md:w-3/5">

                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Profile Settings</h5>
                    <p className="text-xs text-[#9CA3AF]">Manage your account settings and preferences</p>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='mb-3 font-bold'>Profile Photo</h5>
                    <div className="flex items-center mb-3 flex-wrap gap-4 ">

                        <div className='relative'>
                            <img src="/bg-img.png" alt="" className='h-14 min-w-14 w-14 rounded-full' />
                            <div className="w-6 h-6 text-[white] rounded-full bg-[#4F46E5] absolute bottom-0 -right-0 flex items-center justify-center">
                                <FontAwesomeIcon icon={faCamera} />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Link to='' className='rounded-lg border border-[#E5E7EB] py-2 px-5'>+ New Task</Link>
                            <Button />
                        </div>

                    </div>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='mb-3 font-bold'>Personal Information</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <label htmlFor="old_password" className='text-[#374151]'>First Name</label>
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
                                <input type="submit" value="Save Changes" className='w-1/4 rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='mb-3 font-bold'>Security Settings</h5>
                    <form action="" onSubmit={passwordSubmit}>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className='col-span-2'>
                                <label htmlFor="old_password" className="text-[#374151]">Current Password</label>
                                <input
                                    type="password"
                                    name="old_password"
                                    value={passwordForm.old_password}
                                    onChange={passwordChange}
                                    className="w-full rounded-lg border p-2 mt-1"
                                />
                                {passwordError.old_password.length>0 &&
                                    <p className="text-red-500 text-xs">{passwordError.old_password[0]}</p>
                                }
                            </div>
                            <div className='col-span-2'>
                                <div className="col-span-2">
                                    <label htmlFor="password" className="text-[#374151]">New Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={passwordForm.password}
                                        onChange={passwordChange}
                                        className="w-full rounded-lg border p-2 mt-1"
                                    />
                                     {passwordError.password.length>0 &&
                                    <p className="text-red-500 text-xs">{passwordError.password[0]}</p>
                                }
                                </div>

                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="password_confirmation" className="text-[#374151]">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={passwordForm.password_confirmation}
                                    onChange={passwordChange}
                                    className="w-full rounded-lg border p-2 mt-1"
                                />

                            </div>
                            <div className='col-span-2 bg-[#f5f6f9] p-1 rounded-md'>
                            {passwordStrength.label && (
                                    <div className="mt-2">
                                        <p className="text-xs">Strength: {passwordStrength.label}</p>
                                        <div className="w-full bg-[#E5E7EB] h-1 rounded-sm mt-1">
                                            <div
                                                className="h-1 rounded-sm"
                                                style={{ width: `${passwordStrength.score}%`, backgroundColor:
                                                    passwordStrength.score < 40 ? '#EF4444' :
                                                    passwordStrength.score < 80 ? '#F59E0B' :
                                                    '#10B981'
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

                            </div>
                            <div className='col-span-2'>
                                <input type="submit" value="Update Security Settings" className='w-full rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
                            </div>

                        </div>
                            <p className="text-red-500 text-xs">{error}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting