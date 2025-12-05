export interface Blog {
    id: string;
    title: string;
    description: string;
    date: string;
    slug: string;
    content: string;
    author: string;
    readTime: string;
    tags: string[];
    image?: string;
}

export const blogs: Blog[] = [
    {
        id: '1',
        title: 'How to Architect Scalable Flutter Applications',
        description: 'A comprehensive guide to building Flutter apps that can scale to millions of users, covering state management, clean architecture, and performance optimization.',
        date: '2025-12-05',
        slug: 'architecting-scalable-flutter-apps',
        author: 'Ananth',
        readTime: '3 min read',
        tags: ['Flutter', 'Architecture', 'Mobile Developement', 'Scalability'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2674&auto=format&fit=crop',
        content: `
# Architecting Scalable Flutter Applications

Building a Flutter application that can scale to millions of users requires more than just writing UI code. It demands a robust architecture, efficient state management, and a focus on performance. In this guide, we'll explore key principles and patterns to help you build world-class Flutter apps.

## 1. Clean Architecture

The foundation of a scalable app is a clean separation of concerns. We typically follow clean architecture principles, dividing the app into layers:

- **Presentation Layer**: UI components, Widgets, and State Management (Bloc, Provider, Riverpod).
- **Domain Layer**: Business logic, Use Cases, and Entities. This layer should be independent of external frameworks.
- **Data Layer**: Repositories, Data Sources (API, Local DB), and Models.

## 2. State Management

Choosing the right state management solution is crucial. for large apps, **Bloc (Business Logic Component)** is a popular choice due to its strict separation of events and states, making it testable and predictable. **Riverpod** is another excellent modern alternative that offers compile-time safety and easy dependency injection.

## 3. Dependency Injection

As your app grows, managing dependencies becomes complex. Use a DI container like \`get_it\` paired with \`injectable\` to automatically generate dependency injection code. This ensures your code remains modular and testable.

## 4. Scalable UI Structure

Organize your UI code by feature rather than by type. For example, instead of having a folder for all "Screens" and another for "Widgets", group them by feature:

\`\`\`
lib/
  features/
    auth/
      presentation/
      domain/
      data/
    profile/
    feed/
\`\`\`

## 5. Performance Optimization

- **const Constructors**: Use \`const\` widgets wherever possible to reduce rebuilds.
- **ListView.builder**: Always use lazy loading for long lists.
- **Image Caching**: Use \`cached_network_image\` to handle image caching efficiently.
- **Background Isolates**: Offload heavy computations to background isolates to keep the UI thread smooth.

## Conclusion

Scalability is a journey, not a destination. By adhering to these principles—Clean Architecture, solid state management, and modularization—you set your Flutter app up for long-term success.
    `,
    },
];

export const getBlogBySlug = (slug: string): Blog | undefined => {
    return blogs.find((blog) => blog.slug === slug);
};

export const getAllBlogs = (): Blog[] => {
    return blogs;
};
