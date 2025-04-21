import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
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
    const [formError, setFormError] = useState({});
    const { id } = useParams(); // Task ID from URL
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resTask = await axios.get(`/task/${id}`);
                const task = resTask.data.task;
                setForm({
                    title: task.title,
                    description: task.description,
                    category: task.category_id,
                    due_date: task.due_date,
                    project: task.project_id,
                    user: task.user_id
                });

                const [catRes, projRes] = await Promise.all([
                    axios.get('/categories'),
                    axios.get('/projects')
                ]);

                setCategories(catRes.data);
                setProjects(projRes.data);

                // Set users of the selected project
                const projectRes = await axios.get(`/project/${task.project_id}`);
                setUsers(projectRes.data.project.users);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (form.project) {
            axios.get(`/project/${form.project}`)
                .then(res => {
                    setUsers(res.data.project.users);
                });
        }
    }, [form.project]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError({});
        try {
            await axios.put(`/task/update/${id}`, form);
            navigate('/dashboard/tasks');
        } catch (err) {
            const errors = err.response?.data?.errors || {};
            setFormError(errors);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex-wrap gap-3 w-full md:w-3/5">
                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Edit Task</h5>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-sm">
                    {/* Title */}
                    <div className="col-span-2">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {formError.title && <p className="text-red-500">{formError.title[0]}</p>}
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="5"
                            onChange={handleChange}
                            value={form.description}
                            className="w-full rounded border p-2"
                        />
                        {formError.description && <p className="text-red-500">{formError.description[0]}</p>}
                    </div>

                    {/* Due Date */}
                    <div>
                        <label>Due Date</label>
                        <input
                            type="date"
                            name="due_date"
                            value={form.due_date}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {formError.due_date && <p className="text-red-500">{formError.due_date[0]}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label>Category</label>
                        <select name="category" value={form.category} onChange={handleChange} className="w-full rounded border p-2">
                            <option value="">Select Category</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                        {formError.category && <p className="text-red-500">{formError.category[0]}</p>}
                    </div>

                    {/* Project */}
                    <div>
                        <label>Project</label>
                        <select name="project" value={form.project} onChange={handleChange} className="w-full rounded border p-2">
                            <option value="">Select Project</option>
                            {projects.map(proj => (
                                <option key={proj.id} value={proj.id}>{proj.title}</option>
                            ))}
                        </select>
                        {formError.project && <p className="text-red-500">{formError.project[0]}</p>}
                    </div>

                    {/* User */}
                    <div>
                        <label>User</label>
                        <select name="user" value={form.user} onChange={handleChange} className="w-full rounded border p-2">
                            <option value="">Select User</option>
                            {users.map(user => (
                                <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>
                            ))}
                        </select>
                        {formError.user && <p className="text-red-500">{formError.user[0]}</p>}
                    </div>

                    <div className="col-span-2">
                        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Update Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTask;
