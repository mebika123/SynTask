import axios from '../../axios'
    import React, { useEffect, useState } from 'react'
    import { useNavigate } from 'react-router-dom';


    const AddTask = () => {
        const [form, setForm] = useState({
            title: '',
            description: '',
            category: '',
            due_date: '',
            project: '',
            user: ''
        });

        const [users, setUsers] = useState([]);
        const [projects, setProjects] = useState([]);
        const [categories, setCategories] = useState([]);
        const [error, setError] = useState(null);
        const [success, setSuccess] = useState(null);
        const [formError, setFormError] = useState({
            title: [],
            description: [],
            category: [],
            due_date: [],
            project: [],
            user: []
        });

        const navigate = useNavigate();

        // Fetch all users on component mount
        useEffect(() => {
            const fetchDatas = async () => {
                try {
                    // const resUser = await axios.get('/users');
                    // setUsers(resUser.data);
                    const resCategories = await axios.get('/categories');
                    setCategories(resCategories.data);
                    const resProject = await axios.get('/projects');
                    setProjects(resProject.data);
                } catch (err) {

                }
            };

            fetchDatas();
        }, []);

        useEffect(() => {
            if (form.project == '') {
                setUsers([]);
                setForm(prevForm => ({
                    ...prevForm,
                    user: ''
                }))
                return
            };
            axios.get('/project/' + form.project)
                .then(res => {
                    const { users } = res.data.project
                    setUsers(users);
                })
        }, [form.project]);

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
            console.log(form)

            try {
                const res = await axios.post('/task/store', form);
                if (res.data.status) {
                    navigate('/dashboard/tasks')
                }
            } catch (err) {
                const errors = err.response?.data?.errors || {};
                setFormError({
                    title: errors.title||[],
                    description: errors.description||[],
                    category: errors.category||[],
                    due_date: errors.due_date||[],
                    project: errors.project||[],
                    user: errors.user||[]
                });
                setError(err.response?.data?.message || 'Something went wrong');
            }
        }
        return (
            <div className="flex justify-center items-center ">
                <div className="flex-wrap gap-3 w-full md:w-3/5">

                    <div className="mb-6">
                        <h5 className="font-bold text-2xl">Add New Task</h5>
                    </div>

                    <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                        <h5 className='font-bold mb-4'>New Task for Web redesign </h5>
                        <form onSubmit={handleSubmit}>
                            <div className="text-sm grid grid-cols-2 gap-3">
                                <div className=' col-span-2'>
                                    <label htmlFor="title" className='text-[#374151]'>Task Title</label>
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

                                <div className=' col-span-2'>
                                    <label htmlFor="description" className='text-[#374151]'>Description</label>
                                    <textarea
                                        name="description"
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                                        rows="5"
                                    >
                                        {form.description}
                                    </textarea>
                                    {formError.description.length > 0 &&
                                        <p className="text-red-500">
                                            {
                                                formError.description[0]
                                            }
                                        </p>
                                    }
                                </div>
                                <div className=''>
                                    <label htmlFor="due_date" className='text-[#374151]'>Due Date</label>
                                    <input
                                        type="date"
                                        name="due_date"
                                        value={form.due_date}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                                    />
                                    {formError.due_date.length > 0 &&
                                        <p className="text-red-500">
                                            {
                                                formError.due_date[0]
                                            }
                                        </p>
                                    }
                                </div>
                                <div className=''>
                                    <label htmlFor="category" className='text-[#374151]'>Category</label>
                                    <select
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                                    >
                                        <option value=''>Select Category</option>
                                        {
                                            categories.map((category, index) => (
                                                <option value={category.id} key={index}>{category.title}</option>
                                            ))
                                        }
                                    </select>
                                    {formError.category.length > 0 &&
                                        <p className="text-red-500">
                                            {
                                                formError.category[0]
                                            }
                                        </p>
                                    }
                                </div>

                                <div className=''>
                                    <label htmlFor="project" className='text-[#374151]'>Project</label>
                                    <select
                                        name="project"
                                        value={form.project}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                                    >
                                        <option value=''>Select Project</option>

                                        {
                                            projects.map((project, index) => (
                                                <option value={project.id} key={index}>{project.title}</option>
                                            ))
                                        }
                                    </select>
                                    {formError.project.length > 0 &&
                                        <p className="text-red-500">
                                            {
                                                formError.project[0]
                                            }
                                        </p>
                                    }
                                </div>
                                <div className=''>
                                    <label htmlFor="user" className='text-[#374151]'>User</label>
                                    <select
                                        name="user"
                                        value={form.user}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'
                                        disabled={form.project==''}
                                    >
                                        <option value=''>Select User</option>
                                        {
                                            users.map((user, index) => (
                                                <option value={user.id} key={index}>{user.first_name + ' ' + user.last_name}</option>
                                            ))
                                        }
                                    </select>
                                    {formError.user.length > 0 &&
                                        <p className="text-red-500">
                                            {
                                                formError.user[0]
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

                                {success && <p className='text-green-600 mt-3 text-sm'>{success}</p>}
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        )
    }

    export default AddTask