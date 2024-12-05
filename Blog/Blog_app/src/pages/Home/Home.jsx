 

// import React from 'react'

// const Home = () => {
//   return (
//     <div><Banner></Banner></div>
//   )
// }

// export default Home






// import React from 'react';
// import './Home.css';
// import Banner from '../../components/Banner/Banner';

// const Home = () => {
// //   const recentBlogs = [
// //     {
// //       id: 1,
// //       title: "UX review presentations",
// //       description:
// //         "How do you create compelling presentations that wow your colleagues and impress your managers?",
// //       tags: ["Design", "Research", "Presentation"],
// //       image: "https://via.placeholder.com/600x300",
// //       author: "Olivia Rhye",
// //       date: "1 Jan 2023",
// //     },
// //     {
// //       id: 2,
// //       title: "Migrating to Linear 101",
// //       description:
// //         "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
// //       tags: ["Design", "Research"],
// //       image: "https://via.placeholder.com/600x300",
// //       author: "Phoenix Baker",
// //       date: "1 Jan 2023",
// //     },
// //     {
// //       id: 3,
// //       title: "Building your API Stack",
// //       description:
// //         "The role of RESTful APIs has been a key in the rise of tools for creating, testing, and managing APIs.",
// //       tags: ["Design", "Research"],
// //       image: "https://via.placeholder.com/600x300",
// //       author: "Lena Steiner",
// //       date: "1 Jan 2023",
// //     },
// //     // {
// //     //   id: 4,
// //     //   title: "Grid system for better Design User Interface",
// //     //   description:
// //     //     "A grid system is a design tool to arrange content on a webpage effectively.",
// //     //   tags: ["Design", "Interaction"],
// //     //   image: "https://via.placeholder.com/600x300",
// //     //   author: "Olivia Rhye",
// //     //   date: "1 Jan 2023",
// //     // },

// //     // {
// //     //     id: 5,
// //     //     title: "How collaboration makes us better designers",
// //     //     description: "Collaboration can make our teams stronger, and our individual designs better.",
// //     //     tags: ["Teamwork", "Design"],
// //     //     image: "https://via.placeholder.com/600x300",
// //     //     author: "Natalie Craig",
// //     //     date: "1 Jan 2023",
// //     //   },
// //     //   {
// //     //     id: 6,
// //     //     title: "Our top 10 JavaScript frameworks to use",
// //     //     description: "JavaScript frameworks make development easy with extensive features and functionalities.",
// //     //     tags: ["JavaScript", "Development"],
// //     //     image: "https://via.placeholder.com/600x300",
// //     //     author: "Drew Cano",
// //     //     date: "1 Jan 2023",
// //     //   },
// //   ];

// //   return (
// //     <div className="home">
// //       <Banner></Banner>

// //       <section className="recent-section">
// //         <h2 className="section-title">Recent blog posts</h2>
// //         <div className="recent-grid">
// //           {recentBlogs.map((blog) => (
// //             <div className="blog-card" key={blog.id}>
// //               <img src={blog.image} alt={blog.title} className="blog-image" />
// //               <div className="blog-content">
// //                 <p className="blog-meta">
// //                   {blog.author} • {blog.date}
// //                 </p>
// //                 <h3 className="blog-title">{blog.title}</h3>
// //                 <p className="blog-description">{blog.description}</p>
// //                 <div className="blog-tags">
// //                   {blog.tags.map((tag, index) => (
// //                     <span key = {index} className={`tag tag-${tag.toLowerCase()}`}
// //                     >{tag}</span>

// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>

// return (
//   );
// };

// export default Home;



import React from 'react'
import Banner from '../../components/Banner/Banner'
import RecentBlogs from '../../components/Recent/RecentBlogs'
import Allblogs from '../../components/Allblogs/Allblogs'

const Home = () => {
  return (
    <div className='home'>
        <Banner></Banner>
        <RecentBlogs></RecentBlogs>
        <Allblogs></Allblogs>
    </div>
  )
}

export default Home