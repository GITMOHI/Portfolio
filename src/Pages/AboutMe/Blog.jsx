import React from 'react';

const Blog = ({b}) => {
    const{blog_name,description,image_url}=b;
    return (
        <div>
          <div className="card  glass">
            <figure><img src={image_url} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{blog_name}</h2>
                <p className='max-h-20 overflow-hidden'>{description}</p>
                <p className='mt-8 text-blue-500'>Read More</p> 

                <div className="card-actions justify-end">
                    
            </div>
            </div>
          </div>
        </div>
    );
};

export default Blog;