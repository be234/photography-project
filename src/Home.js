import BlogList from "./SectionList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && ""}
            {/* {isPending && "Loading..."} */}
           {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default Home;