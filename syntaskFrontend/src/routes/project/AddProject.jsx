import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    users: [] // store user IDs here
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formError, setFormError] = useState({
    title: [],
    description: [],
    users: []
  });

  const navigate = useNavigate();

  // Fetch all users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/users');
        setUsers(res.data);
      } catch (err) {
        
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleCheckboxChange = (e) => {
    const userId = parseInt(e.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      users: e.target.checked
        ? [...prevForm.users, userId]
        : prevForm.users.filter((id) => id !== userId)
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.post('/project/store', form);
      if(res.data.status){
        navigate('/dashboard/projects')
      }
    } catch (err) {
      const errors = err.response?.data?.errors || {};
      setFormError({
        title: errors.title || [],
        description: errors.description || [],
        users: errors.users || []
      });
      setError(err.response?.data?.message || 'Something went wrong');
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="flex-wrap gap-3 w-full md:w-3/5">
        <div className="mb-6">
          <h5 className="font-bold text-2xl">Add New Project</h5>
        </div>

        <div className="shadow bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
          <h5 className='mb-3 font-bold'>New Project</h5>
          <form onSubmit={handleSubmit}>
            <div className="text-sm">
              <div className='mb-3'>
                <label htmlFor="title" className='text-[#374151]'>Project Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                />
                {formError.title.length > 0 &&
                  <p className="text-red-500">
                    {
                      formError.title[0]
                    }
                  </p>
                }

              </div>

              <div className='mb-3'>
                <label htmlFor="description" className='text-[#374151]'>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                  rows="5"
                />
                {formError.description.length > 0 &&
                  <p className="text-red-500">
                    {
                      formError.description[0]
                    }
                  </p>
                }


              </div>

              <div className='mb-3'>
                <label className='text-[#374151] block mb-1'>Assign Users</label>
                <div className='flex flex-wrap gap-4'>
                  {users.map(user => (
                    <label key={user.id} className='flex items-center space-x-2'>
                      <input
                        type="checkbox"
                        value={user.id}
                        checked={form.users.includes(user.id)}
                        onChange={handleCheckboxChange}
                      />
                      <span>{user.first_name} {user.last_name}</span>
                    </label>
                  ))}
                </div>
                {formError.users.length > 0 &&
                  <p className="text-red-500">
                    {
                      formError.users[0]
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

              {error && <p className='text-red-500 mt-3 text-sm'>{error}</p>}
              {success && <p className='text-green-600 mt-3 text-sm'>{success}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProject;
