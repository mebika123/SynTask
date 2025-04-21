import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../axios'

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: ''
  });

  const [formError, setFormError] = useState({
    title: []
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch category by ID
  useEffect(() => {
    axios.get(`/category/${id}`)
      .then(res => {
        setForm(res.data.category);
      })
      .catch(err => {
        console.error('Failed to fetch category:', err);
        setError('Failed to load category');
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.put(`/category/update/${id}`, form);
      if (res.data.status) {
        navigate('/dashboard/categories');
      }
    } catch (err) {
      const errors = err.response?.data?.errors || {};
      setFormError({
        title: errors.title || []
      });
      setError(err.response?.data?.message || 'Something went wrong');
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="flex-wrap gap-3 w-full md:w-3/5">
        <div className="mb-6">
          <h5 className="font-bold text-2xl">Edit Category</h5>
        </div>

        <div className="shadow bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
          <h5 className='mb-3 font-bold'>Edit Category</h5>
          <form onSubmit={handleSubmit}>
            <div className="text-sm">
              <div className='mb-3'>
                <label htmlFor="title" className='text-[#374151]'>Category Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title || ''}
                  onChange={handleChange}
                  className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                />
                {formError.title.length > 0 &&
                  <p className="text-red-500">
                    {formError.title[0]}
                  </p>
                }
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
}

export default EditCategory;
