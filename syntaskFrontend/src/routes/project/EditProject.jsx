import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    description: '',
    users: []
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Fetch all users
    axios.get('http://localhost:8000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));

    // Fetch project details
    axios.get(`http://localhost:8000/api/project/${id}`)
      .then(res => {
        const { title, description, users } = res.data.project;
        setForm({
          title,
          description,
          users: users.map(user => user.id)
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    const userId = parseInt(e.target.value);
    setForm(prevForm => ({
      ...prevForm,
      users: e.target.checked
        ? [...prevForm.users, userId]
        : prevForm.users.filter(id => id !== userId)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await axios.put(`http://localhost:8000/api/project/update/${id}`, form);
      setSuccess('Project updated successfully!');
      navigate('/dashboard/projects'); // Navigate to project list or detail view
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex-wrap gap-3 w-full md:w-3/5">
        <div className="mb-6">
          <h5 className="font-bold text-2xl">Edit Project</h5>
        </div>

        <div className="shadow bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
          <h5 className='mb-3 font-bold'>Project Info</h5>
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
              </div>

              <div className='col-span-2'>
                <input
                  type="submit"
                  value="Update"
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
  );
};

export default EditProject;
