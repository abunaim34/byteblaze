import { useLoaderData } from "react-router-dom"
import Markdown from 'https://esm.sh/react-markdown@9'
import rehypeRaw from 'https://esm.sh/rehype-raw@7'


const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, tags, url, body_html } = blog
    return (
        <div className=" mx-auto  border-opacity-30 border-primary   group hover:no-underline border-2 p-2 focus:no-underline dark:bg-gray-50 transition">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags && tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                }
            </div>
            <div className="p-6 space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;