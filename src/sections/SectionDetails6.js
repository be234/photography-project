
const SectionDetails6 = () => {
    const data = {
      "title": "SPORT",
      "body": "body",
      "pictures": [
        "https://i.pinimg.com/564x/d0/f7/04/d0f7048f321bc3405a9b470dea922a0d.jpg",
        "https://i.pinimg.com/564x/dc/d9/a4/dcd9a4e7a4a3c3badcc6151b66147605.jpg",
        "https://i.pinimg.com/564x/73/77/74/7377746969286518c11cda9d1c0867b2.jpg",
        "https://i.pinimg.com/564x/b2/d7/71/b2d77181f736416616579f1c737e365b.jpg",
        "https://i.pinimg.com/564x/f9/2c/50/f92c50de99be534077af6fd90fc4e83c.jpg",
        "https://i.pinimg.com/564x/cd/c7/8b/cdc78b88a81a6f944211c050c9270224.jpg",
        "https://i.pinimg.com/564x/95/5b/30/955b3046b9871c00bbcf27c9a1e1b390.jpg",
        "https://i.pinimg.com/564x/0e/2f/40/0e2f403523b3b8438d97fc8002c5d93c.jpg",
        "https://i.pinimg.com/564x/cd/ea/44/cdea44a15235f29bc70c9f63148b128d.jpg",
        "https://i.pinimg.com/564x/e4/1a/cd/e41acd8bf586af71ceda1d64bd06d52a.jpg",
        "https://i.pinimg.com/564x/8b/fb/c9/8bfbc902c04c8cfabeb06d30e820e848.jpg",
        "https://i.pinimg.com/564x/b1/c9/0a/b1c90abeca538c4eebabdc6b205e510b.jpg",
        "https://i.pinimg.com/564x/8a/84/e7/8a84e7a6a3b922e9821b50318c704d2f.jpg",
        "https://i.pinimg.com/564x/7f/61/ca/7f61ca887d5ae201a681a8295ea2acd0.jpg",
        "https://i.pinimg.com/564x/22/57/3e/22573e8ae67ecebc545aedfa36654246.jpg",
        "https://i.pinimg.com/564x/5f/0c/7d/5f0c7de8b8b1d05d185100fa0ef51f0d.jpg",
        "https://i.pinimg.com/564x/6d/19/f0/6d19f0cd105fa62326f9959df5ac05d7.jpg",
        "https://i.pinimg.com/564x/9d/54/15/9d541578cce52e4156a8bd03b0fc0b74.jpg",
        "https://i.pinimg.com/564x/3a/f1/68/3af168a8f1c18ee5455547a5aaa08a8a.jpg",
        "https://i.pinimg.com/564x/9d/86/7f/9d867ffb3125f6fa980c714b31a6210a.jpg",
        "https://i.pinimg.com/564x/45/26/a9/4526a95a92136bbfb192b53b449bef2b.jpg"
      ],
      "mainpic": "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "caption": "Sports And Athletic Competitions",
      "id": 6
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
    
   export default SectionDetails6;
                      
   