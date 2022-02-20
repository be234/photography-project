
const SectionDetails5 = () => {
    const data =  {
      "title": "FAMILY",
      "body": "body",
      "pictures": [
        "https://i.pinimg.com/564x/08/0c/87/080c8748261ba75f8d30665faee56992.jpg",
        "https://i.pinimg.com/564x/14/56/8a/14568ad3315c9cad1ed742481b9c516c.jpg",
        "https://i.pinimg.com/564x/5b/7b/7d/5b7b7da435b155c23ebc09d2373f5171.jpg",
        "https://i.pinimg.com/564x/fe/6c/ce/fe6cce296028d2677104f93eafcdc39f.jpg",
        "https://i.pinimg.com/750x/64/cc/38/64cc38a4015c30ebf74bc09c0861681f.jpg",
        "https://i.pinimg.com/564x/73/96/1a/73961a4eb9a9028ce011f0452df12eb2.jpg",
        "https://i.pinimg.com/564x/4d/74/34/4d74340d0530a38ad3919b3b14b4b8b6.jpg",
        "https://i.pinimg.com/564x/d8/06/d9/d806d971067f7e8008dc4e07fdc2ab96.jpg",
        "https://i.pinimg.com/564x/b6/6a/93/b66a935ba3a1fd0d4a9b79f474a0ca7a.jpg",
        "https://i.pinimg.com/564x/fd/81/1c/fd811c88974bdc6862edbe50e89858c9.jpg",
        "https://i.pinimg.com/736x/b8/1c/7f/b81c7fef34d75c8cc200acee3a8000c3.jpg",
        "https://i.pinimg.com/564x/a1/b6/58/a1b6585e067479c499cdc91ab9f2e551.jpg",
        "https://i.pinimg.com/564x/82/2b/b6/822bb6966acd66f27ff42078a9982caa.jpg",
        "https://i.pinimg.com/564x/f0/06/64/f00664557148c898f8ec88614cd569f2.jpg",
        "https://i.pinimg.com/564x/61/27/4f/61274f42afe1a4ec5e74fe420af4fb92.jpg",
        "https://i.pinimg.com/564x/e2/7e/8a/e27e8afc8a73ef7f721003f7d1788513.jpg",
        "https://i.pinimg.com/564x/f1/ba/68/f1ba68f7bd926cc5546dc588917d7a39.jpg",
        "https://i.pinimg.com/564x/f7/d5/bd/f7d5bd5f916d579f787a71716a08fa6c.jpg",
        "https://i.pinimg.com/564x/d9/3d/35/d93d35abc354b155180c1a98dd2d9a60.jpg",
        "https://i.pinimg.com/564x/ba/da/40/bada4017a12def901bceee4154884056.jpg",
        "https://i.pinimg.com/564x/26/64/7c/26647c6a7777573e482eb96edd80bb44.jpg",
        "https://i.pinimg.com/564x/54/f6/2f/54f62f76b8f9982ea9c9bde164c3f56e.jpg",
        "https://i.pinimg.com/564x/b4/7b/cf/b47bcfca5e6143785dd97083733ff055.jpg",
        "https://i.pinimg.com/564x/5a/81/22/5a8122daa5ba8836431c1cd755122570.jpg",
        "https://i.pinimg.com/564x/89/31/ed/8931ed3a4daf5d62f04d02eed30ed97b.jpg"
      ],
      "mainpic": "https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "caption": "Gorgeous Family Sessions",
      "id": 5
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
    
   export default SectionDetails5;
                      
   