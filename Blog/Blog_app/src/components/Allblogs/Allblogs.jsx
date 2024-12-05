import React from 'react'
import "./Allblogs.css"
import Image1 from "../../assets/Images/Image-1.svg";
import Image2 from "../../assets/Images/Image-2.svg";
import Image3 from "../../assets/Images/Image-3.svg";
import Image4 from "../../assets/Images/Image-4.svg";
import Image5 from "../../assets/Images/Image-5.svg";
import Image6 from "../../assets/Images/Image-6.svg";
import Image7 from "../../assets/Images/Image-7.svg";
import Image8 from "../../assets/Images/Image-8.svg";
import Image9 from "../../assets/Images/Image-9.svg";
import Image10 from "../../assets/Images/Image-10.svg";
import Image11 from "../../assets/Images/Image-11.svg";
import Image12 from "../../assets/Images/Image-12.svg";
import Image13 from "../../assets/Images/Image-13.svg";
import Image14 from "../../assets/Images/Image-14.svg";
import Image15 from "../../assets/Images/Image-15.svg";
import Image16 from "../../assets/Images/Image-16.svg";


const Allblogs = () => {
    const allBlogs = [
        {
          id: 1,
          title: "The Future of AI in Education",
          description:
            "How AI is transforming classrooms and creating new opportunities for learning.",
          image: Image1,
          author: "Sophia Carter",
          date: "20 Jan 2023",
        },
        {
          id: 2,
          title: "Exploring the Metaverse",
          description:
            "Dive into the metaverse and explore how it’s changing the way we interact online.",
          image: Image2,
          author: "Liam Walker",
          date: "25 Jan 2023",
        },
        {
          id: 3,
          title: "Mastering Responsive Design",
          description:
            "Best practices for creating websites that look great on any device.",
          image: Image3,
          author: "Emma Wilson",
          date: "30 Jan 2023",
        },
        {
          id: 4,
          title: "Introduction to Blockchain",
          description:
            "Learn the basics of blockchain technology and its potential applications.",
          image: Image4,
          author: "Oliver Brown",
          date: "2 Feb 2023",
        },
        {
          id: 5,
          title: "Cybersecurity Essentials",
          description:
            "Protect yourself and your business with these key cybersecurity tips.",
          image: Image5,
          author: "Mia Johnson",
          date: "5 Feb 2023",
        },
        {
          id: 6,
          title: "The Rise of No-Code Platforms",
          description:
            "How no-code tools are democratizing software development for everyone.",
          image: Image6,
          author: "Ethan Davis",
          date: "10 Feb 2023",
        },
        {
          id: 7,
          title: "Climate Change and Technology",
          description:
            "Exploring the role of technology in combating climate change.",
          image: Image7,
          author: "Amelia Martinez",
          date: "15 Feb 2023",
        },
        {
          id: 8,
          title: "Data Science for Beginners",
          description:
            "Everything you need to know to get started in the field of data science.",
          image: Image8,
          author: "James Rodriguez",
          date: "20 Feb 2023",
        },
        {
          id: 9,
          title: "Tips for Better Work-Life Balance",
          description:
            "Simple strategies to find balance and avoid burnout in your professional life.",
          image: Image9,
          author: "Isabella Garcia",
          date: "25 Feb 2023",
        },
        {
          id: 10,
          title: "Augmented Reality in Retail",
          description:
            "How AR is changing the shopping experience for consumers and retailers alike.",
          image: Image10,
          author: "Mason Lee",
          date: "1 Mar 2023",
        },
        {
          id: 11,
          title: "Understanding Machine Learning",
          description:
            "A beginner-friendly guide to the concepts and applications of machine learning.",
          image: Image11,
          author: "Charlotte Young",
          date: "5 Mar 2023",
        },
        {
          id: 12,
          title: "The Importance of Mental Health",
          description:
            "Why mental health should be a priority in your personal and professional life.",
          image: Image12,
          author: "Elijah Moore",
          date: "10 Mar 2023",
        },
        {
          id: 13,
          title: "Cloud Computing Basics",
          description:
            "Everything you need to know about cloud computing and its benefits.",
          image: Image13,
          author: "Harper Martinez",
          date: "15 Mar 2023",
        },
        {
          id: 14,
          title: "Future Trends in Mobile App Development",
          description:
            "What’s next for mobile app developers? Insights and predictions for the future.",
          image: Image14,
          author: "Henry Perez",
          date: "20 Mar 2023",
        },
        {
          id: 15,
          title: "The Role of Ethics in AI",
          description:
            "Why ethical considerations are crucial in the development of AI technologies.",
          image: Image15,
          author: "Victoria Scott",
          date: "25 Mar 2023",
        },
        {
          id: 16,
          title: "Big Data Analytics for Business",
          description:
            "How businesses are leveraging big data to gain insights and improve performance.",
          image: Image16,
          author: "Daniel Adams",
          date: "30 Mar 2023",
        },
      ];
      
  return (
    <div>
<section className="all-blogs-section">
  <h2 className="section-title">All Blogs</h2>
  <div className="all-blogs-grid">
    {allBlogs.map((blog) => (
      <div className="blog-card" key={blog.id}>
        <img
          src={blog.image}
          alt={`Blog ${blog.title}`}
          className="blog-image"
        />
        <div className="blog-content">
          <p className="blog-meta">
            {blog.author} • {blog.date}
          </p>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-description">{blog.description}</p>
        </div>
      </div> 
    ))}






  </div> 
</section>


          </div>
  )
}

export default Allblogs