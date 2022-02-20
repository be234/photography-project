import BlogList from "./SectionList";

const Home = () => {
    const blogs = [
        {
          "title": "NATURE",
          "mainpic": "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "id": 1
        },
        {
          "title": "ART",
          "mainpic": "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0JTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "id": 2
        },
        {
          "title": "WEDDINGS",
          "mainpic": "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          "id": 3
        },
        {
          "title": "PARTIES",
          "mainpic": "https://images.unsplash.com/photo-1618176581835-d60e9c2567b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          "id": 4
        },
        {
          "title": "FAMILY",
          "mainpic": "https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "id": 5
        },
        {
          "title": "SPORT",
          "mainpic": "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "id": 6
        }
      ]

    return ( 
        <div className="home">
           <BlogList blogs={blogs} />
        </div>
     );
}
 
export default Home;