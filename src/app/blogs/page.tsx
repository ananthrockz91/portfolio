import { FloatingNav } from "@/components/FloatingNav";
import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
    title: "Blogs | Ananth's Portfolio",
    description: "Read my latest thoughts on technology, software architecture, and more.",
};

export default function BlogsPage() {
    const blogs = getAllBlogs();

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <FloatingNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Latest Thoughts
                    </h1>
                    <p className="mt-4 text-neutral-300 text-lg">
                        Insights on software engineering, architecture, and building scalable systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            href={`/blogs/${blog.slug}`}
                            key={blog.id}
                            className="group relative flex flex-col h-full bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors duration-300"
                        >
                            <div className="aspect-video w-full overflow-hidden">
                                {blog.image ? (
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                        <span className="text-neutral-500">No Image</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span>{blog.readTime}</span>
                                </div>

                                <h2 className="text-xl font-semibold text-neutral-100 mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                                    {blog.title}
                                </h2>

                                <p className="text-neutral-400 line-clamp-3 mb-6 flex-1">
                                    {blog.description}
                                </p>

                                <div className="flex items-center text-purple-400 text-sm font-medium mt-auto">
                                    Read Article
                                    <FaArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
