import "./NewHome.css";
import { useState } from "react";

const NewHome = () => {
  const clicked = (e) => {
    console.log("button clicked fam", e.target);
  };

  const handleClick = (name, e) => {
    console.log("hi " + name, e.type);
  };

  const [name, setName] = useState("Brittany");
  const [age, setAge] = useState(2);

  const [blogs, setBlogs] = useState([
    { title: "My new cite", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "My middle cite", body: "lorem ipsum", author: "luigi", id: 2 },
    { title: "My last cite", body: "lorem ipsum", author: "peach", id: 3 },
  ]);

  function printStuff() {
    for (let blog of blogs) {
      console.log(blog);
    }
  }

  return (
    <div className="newhome">
      <h2>Homepage</h2>
      <button onClick={clicked}>Click me</button>
      <button onClick={(e) => handleClick("Paul", e)}>click me again</button>
      <p>{name}</p>
      <button onClick={() => setName("Tiny Tim")}>Change name</button>
      <br />
      <button onClick={() => setAge(50)}>Set the age</button>
      <p>{age}</p>
      <button onClick={printStuff}>Print blogs </button>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>

          <br />
        </div>
      ))}
    </div>
  );
};

export default NewHome;
