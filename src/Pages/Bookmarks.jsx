import { useState } from "react";
import BlogCard from "../Components/BlogCard";
import { useEffect } from "react";
import { deleteBlog, getBlogs } from "../Utils";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, []) 

    const handleDelete = (id) => {
        deleteBlog(id)
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }
    return (
        <section className=' px-4 sm:px-8 lg:px-12 py-8'>
            <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
                <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        blogs.map(blog => <BlogCard key={blog.id} blog={blog} handleDelete={handleDelete} deletable={true}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Bookmarks;