import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='m-5'>Difference Between JavaScript and Node Js</h3>
            <h5>Javascript is a programming language<br>
            </br>that is used for writing<br>
            </br>scripts on the website.<br>
            </br>NodeJS is a Javascript runtime environment.</h5>
            <h3 className='m-5'>When Should You Use Node Js and MongoDB</h3>
            <h5>Node Js is a fast growing technology that has been<br>
            </br>overtaking the world of server-side programming<br>
            </br>with a good speed.<br>
            </br>MongoDB is a technology that is<br>
            </br>transfigure database usage.</h5>
            <h3 className='m-5'>Differences between sql and nosql databases</h3>
            <h6>• SQL databases are relational, NoSQL databases are non-relational.</h6>
            <h6 className='mt-3'>• SQL databases use structured query language and have a predefined schema.<br></br>NoSQL databases have dynamic schemas for unstructured data.</h6>
            <h6 className='mt-3'>• SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</h6>
            <h6 className='mt-3'>• SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</h6>
            <h6 className='mt-3 mb-5'>• SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</h6>
        </div>
    );
};

export default Blogs;