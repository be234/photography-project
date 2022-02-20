import { useParams } from "react-router-dom";

const SectionDetails1 = () => {
    const { id } = useParams();
 const data = {
          "title": "NATURE",
          "body": "body",
          "pictures": [
            "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
            "https://media.istockphoto.com/photos/big-ocean-waves-hitting-a-coral-reef-view-from-above-picture-id1295770703?b=1&k=20&m=1295770703&s=170667a&w=0&h=XLB25DPwsPoesVs9Gt5H3geYK7Vq7xy0bJRqakrW_7o=",
            "https://media.istockphoto.com/photos/fields-of-lupines-along-a-path-picture-id1341193833?b=1&k=20&m=1341193833&s=170667a&w=0&h=QRjkL2jIZXszCthvkdGyJGqf-tIpVQCoLnhFBVDlXkQ=",
            "https://media.istockphoto.com/photos/first-person-point-of-view-of-a-woman-paddling-on-a-stand-up-paddle-picture-id1288844330?b=1&k=20&m=1288844330&s=170667a&w=0&h=nckXG0H5kPDbgDpC8iTObsiqG7Jwt6CeLuJ2WxdOTp4=",
            "https://media.istockphoto.com/photos/rocky-mountains-and-autumnal-forest-with-colorful-trees-high-mountain-picture-id1282522992?b=1&k=20&m=1282522992&s=170667a&w=0&h=W_7cRAwDTWOqqXF3g9zwOaCMgol1-Vb4rYtlqBbJMYE=",
            "https://media.istockphoto.com/photos/aerial-view-of-green-grass-forest-with-tall-pine-trees-and-blue-bendy-picture-id1280157339?b=1&k=20&m=1280157339&s=170667a&w=0&h=CVCB8TbR2nmimjaGuk-1sEHpTAtzREqXX_WDOnls8iA=",
            "https://media.istockphoto.com/photos/friends-hike-up-grassy-mountain-ridge-at-sunrise-picture-id1340942749?b=1&k=20&m=1340942749&s=170667a&w=0&h=h9Jc0fgU4ktX0Go94Xnz_dfYheKIb1ozty5yoWcl678=",
            "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://media.istockphoto.com/photos/pastel-sunset-sky-over-the-palm-beach-florida-shoreline-picture-id1345168941?b=1&k=20&m=1345168941&s=170667a&w=0&h=bgHUuhIpo8kjdMBgVkQI4ijuCIiZ2M-4Fg46xBAC3-w=",
            "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY=",
            "https://media.istockphoto.com/photos/aerial-view-of-lake-tahoe-shoreline-with-mountains-and-turquoise-blue-picture-id1302742624?b=1&k=20&m=1302742624&s=170667a&w=0&h=10t9qpPCwQ2JIb4N9pA04OWlff7TP8McxSxtqQkcCYM=",
            "https://media.istockphoto.com/photos/moose-at-maroon-lake-a-young-moose-with-only-one-antler-walking-and-picture-id1288537145?b=1&k=20&m=1288537145&s=170667a&w=0&h=DP5AU3_JBwGiCDJellQR6NMmrycDsrjd89yccPlVgJc=",
            "https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g=",
            "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
            "https://media.istockphoto.com/photos/alberta-wilderness-near-banff-picture-id583809524?b=1&k=20&m=583809524&s=170667a&w=0&h=mYDDTesIuWZc0w0iQu0QrHPm7COlBt3QFsHU2vgxfIU=",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://media.istockphoto.com/photos/milky-way-sky-of-stars-picture-id1003153214?k=20&m=1003153214&s=170667a&w=0&h=xAEvb9zRfnklHdYZWkOZfBxmHwZhMzRJKdVKqrxnU2U=",
            "https://i.pinimg.com/564x/46/d4/69/46d4694f915714cc69f1f3fb02031db8.jpg",
            "https://i.pinimg.com/736x/b0/68/e0/b068e07ff3323d222e62a88690c7f51f.jpg",
            "https://i.pinimg.com/564x/46/d4/69/46d4694f915714cc69f1f3fb02031db8.jpg",
            "https://i.pinimg.com/564x/6b/21/3e/6b213ec3b8e4a3216275882ef93f5b51.jpg",
            "https://i.pinimg.com/564x/76/f4/f4/76f4f49c7c4bec365d3a3f902246b5a7.jpg",
            "https://i.pinimg.com/564x/f5/b3/1d/f5b31d7bb4b50b79a227a7bfb7df29d1.jpg",
            "https://i.pinimg.com/564x/eb/b4/6f/ebb46fd338bf7466c8cf321d9a2dba85.jpg",
            "https://i.pinimg.com/564x/68/bd/50/68bd5088e1b5751eb43a55ec05050b93.jpg",
            "https://i.pinimg.com/564x/26/13/e8/2613e8fe0763ab14dec5db12fc93956e.jpg"
          ],
          "mainpic": "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "caption": "Natural And Wonderful Pictures",
          "id": 1
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
 
export default SectionDetails1;
                   
