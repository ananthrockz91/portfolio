import { FloatingNav } from "@/components/FloatingNav";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: `${blog.title} | Ananth's Portfolio`,
        description: blog.description,
    };
}

export async function generateStaticParams() {
    const blogs = getAllBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    // Simple Markdown Renderer
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-neutral-100">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-neutral-100">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-neutral-100">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('- **')) {
                const parts = line.replace('- ', '').split('**: ');
                return (
                    <li key={index} className="text-neutral-300 ml-6 mb-2 list-disc">
                        <strong className="text-neutral-100">{parts[0].replace('**', '')}</strong>: {parts[1]}
                    </li>
                );
            }
            if (line.startsWith('- ')) {
                return <li key={index} className="text-neutral-300 ml-6 mb-2 list-disc">{line.replace('- ', '')}</li>;
            }
            if (line.startsWith('```')) {
                // Naive code block handling - just skipping the markers or rendering simple block
                if (line.trim() === '```') return null;
                return null;
            }
            // Quick hack for code blocks content if it was more complex, but for now straightforward text
            if (line.trim().length === 0) {
                return <div key={index} className="h-4"></div>;
            }

            return <p key={index} className="text-neutral-300 leading-relaxed mb-4 text-lg">{line}</p>;
        });
    };

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <FloatingNav />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-neutral-400">
                        <div className="flex items-center gap-2">
                            <FaUser className="w-4 h-4" />
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="w-4 h-4" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>

                {blog.image && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-neutral-800">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <article className="prose prose-invert prose-lg max-w-none">
                    {renderContent(blog.content)}
                </article>

                <div className="mt-12 pt-8 border-t border-neutral-800">
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-400">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
