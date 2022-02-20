import { Link } from "react-router-dom";

const SectionList = ({blogs}) => {

    return ( 
        <div className="main-pics-container">
             {blogs.map((blog) => (
                <div className="flex-items" key={blog.id}>
                    <Link to={`/section${blog.id}`}>
                    <img src={ blog.mainpic } />
                    <h2>{blog.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default SectionList;