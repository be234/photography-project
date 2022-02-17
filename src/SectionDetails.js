import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const SectionDetails = () => {
    const { id } = useParams();
    const { data: data, isPending, error} = useFetch( "http://localhost:8000/blogs/" + id);
    const history = useHistory();

    // const handleClick = () => {
    //     fetch("http://localhost:8000/blogs/" + blog.id, {
    //         method: "DELETE"
    //     }).then(() => {
    //         history.push("/")
    //     })
    // }


    return ( 
        <div className="container">
            {isPending && <div></div>}
            {/* {isPending && <div>Loading..</div>} */}
            {error && <div>{ error }</div>}

            {data && (data.pictures.map((pic) => (
                <div className="image">
                <a href={pic}  className="fancybox" data-fancybox="gallery1">
                  <img src={pic} alt="picture" />
                  </a>
                 <h1 className="caption">{data.caption}</h1>   
                </div>         
                 ))
            )}
        </div>
     );
}
 
export default SectionDetails;
                   
                    {/* <button disabled onClick={handleClick}>Delete</button> */}
