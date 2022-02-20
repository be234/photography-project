
const SectionDetails3 = () => {
    const data =    {
      "title": "WEDDINGS",
      "body": "body",
      "pictures": [
        "https://i.pinimg.com/564x/38/3b/2a/383b2aa96527c585e1debda9f48bd62f.jpg",
        "https://i.pinimg.com/564x/18/53/b5/1853b58e341add7854167cce01f96292.jpg",
        "https://i.pinimg.com/564x/81/eb/50/81eb502e4666462d4efec49e94b2f8c3.jpg",
        "https://i.pinimg.com/564x/2e/1a/cb/2e1acb831c88875bcbd480d790dc45eb.jpg",
        "https://images.unsplash.com/photo-1600973460957-bea3e0ec9ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw=&auto=format&fit=crop&w=500&q=60",
        "https://i.pinimg.com/564x/4a/dc/c1/4adcc1b4f9f97ce72c8f2d001b6d1e5e.jpg",
        "https://i.pinimg.com/564x/c9/7b/da/c97bdaa6158564487e53cfe0e79deb8f.jpg",
        "https://i.pinimg.com/564x/33/61/5a/33615a0185d10289aaa4eb82ff87004f.jpg",
        "https://static.showit.co/800/oGbCnm9-QYyDW5xWkKZaAA/shared/jonathan-borba-nbtkkwd4sgm-unsplash.jpg",
        "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        "https://i.pinimg.com/750x/d3/79/15/d3791577ed5c6c725410b5b9b160601c.jpg",
        "https://images.squarespace-cdn.com/content/v1/5b2cf47431d4dfd1540bb486/1530470273512-I7NY0PRWY35CR553Z8MF/samantha-gades-540949-unsplash.jpg",
        "https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://i.pinimg.com/750x/9c/9b/b2/9c9bb2f5aa56f5c0e618ffa5478322cf.jpg",
        "https://i.pinimg.com/564x/38/3b/2a/383b2aa96527c585e1debda9f48bd62f.jpg",
        "https://i.pinimg.com/750x/9c/9b/b2/9c9bb2f5aa56f5c0e618ffa5478322cf.jpg",
        "https://i.pinimg.com/564x/aa/c2/ea/aac2ea74292d1d48b909fbd31d4fbb91.jpg",
        "https://i.pinimg.com/564x/d8/4c/a2/d84ca2c56ba2725da6e926fbe9fb8da8.jpg",
        "https://i.pinimg.com/564x/59/5c/f7/595cf7a6b9932f293ea258df68ae3865.jpg",
        "https://i.pinimg.com/736x/3f/39/27/3f39277b2f5f20dde11cdb513c934fb0.jpg",
        "https://i.pinimg.com/564x/01/e9/f7/01e9f747892014990bdb11ddc0062e93.jpg",
        "https://i.pinimg.com/564x/de/2a/62/de2a62e236f17d9d16a2346c52347bae.jpg",
        "https://i.pinimg.com/564x/7f/c1/d1/7fc1d19a3431dffe21e55a64aceac8c9.jpg",
        "https://i.pinimg.com/564x/de/45/7c/de457c3ac82e2b315a4bb37bfa381ce9.jpg",
        "https://i.pinimg.com/564x/e3/4f/2e/e34f2e0bdbd3c0d7fd7432e4a3dc6f8d.jpg",
        "https://i.pinimg.com/564x/58/e7/ff/58e7ff28388cb30964c5891ab0e8c8b0.jpg"
      ],
      "mainpic": "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      "caption": "Beautiful Weddings, And Engagements Photos",
      "id": 3
    };
         
         
       return ( 
           <div className="container">
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
    
   export default SectionDetails3;
                      
   