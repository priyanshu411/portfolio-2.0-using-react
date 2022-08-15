import PreLoader from "../PreLoader";
import BlogCard from "./BlogCard";
import blog from "../../portfolioData/blogData";
import React, { useState, useEffect } from "react";
function Blog() {

    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 500);
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <PreLoader myStyle={style} />
            <section className="container" id="blog">
                <h4 className="center-align txt-col1 heading">MY Blogs</h4>
                <div className="row">
                    {
                        blog.map((data, index) => {
                            return <BlogCard blog={data} key={index}></BlogCard>
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    );
}
export default Blog;