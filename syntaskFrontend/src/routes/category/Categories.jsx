import React, { useEffect, useState } from 'react'
import Button from '../../components/ui/Button';
import axios from '../../axios'
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/categories')
            .then(res => {
                setCategories(res.data);
            });
    }, []);

    const deleteCategory = async(id)=>{
        try {
            const res = await axios.delete(`/category/delete/${id}`);
            
            if (res.data.status) {
                setCategories(prev => prev.filter(category => category.id !== id));
            }
        } catch (err) {
            console.error("Delete failed", err);
        }

    }

    return (
        <div>
            <div className="">
                <h5 className="font-bold text-2xl">Categories</h5>
            </div>
            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full  mt-4">

                <div className="flex justify-between items-center mb-5">
                    <h5 className='font-bold'>Categories List</h5>
                    <Button text={'New Category'} path ='/dashboard/addCategory'/>
                </div>
                <div className="overflow-x-auto  w-full">
                <table className="whitespace-nowrap w-full">
                    <thead>
                        <tr className='bg-[#E5E7EB] text-sm text-[#6B7280]'>
                            <th className='py-2'>Category</th>
                            <th className='py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories?.map((category, index) => (
                                <tr key={index} className='text-center'>
                                    <td className="py-2">
                                                    <div className='text-start'>
                                                    <span className='font-semibold'>{category.title}</span>
                                                </div>
                                    </td>
                                    <td className="py-2">
                                        <Link className="text-[#4F46E5] mr-3" to={'/dashboard/editCategory/'+category.id}>Edit</Link>
                                        <p className="text-[#DC2626]" onClick={()=>deleteCategory(category.id)}>Remove</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
                </div>
            </div>


        </div>
    )
}

export default Categories