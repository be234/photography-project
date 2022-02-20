
const SectionDetails4 = () => {
    const data = {
      "title": "PARTIES",
      "body": "body",
      "pictures": [
        "https://i.pinimg.com/564x/1e/73/38/1e733818f2a9104209cf991a4070ab27.jpg",
        "https://i.pinimg.com/564x/8b/0b/ad/8b0bad128e3ab730db89ea9518ce8a6a.jpg",
        "https://i.pinimg.com/564x/6f/e0/87/6fe087479c7cab21d14fc23f8ddc534e.jpg",
        "https://i.pinimg.com/564x/1e/44/87/1e4487b29cdd547007c93a92496a1753.jpg",
        "https://i.pinimg.com/564x/22/ff/64/22ff64cb86968817b08acc7c2c2ab088.jpg",
        "https://i.pinimg.com/564x/6f/98/1c/6f981ca5f679970836e21e039f5e04d0.jpg",
        "https://i.pinimg.com/564x/ad/2e/0a/ad2e0a57bf4b28c24b1c47c25ac34f6b.jpg",
        "https://i.pinimg.com/564x/10/32/76/103276039eddf3ce3c680e27d9e44ed0.jpg",
        "https://i.pinimg.com/564x/32/cc/4d/32cc4d4fa070551ff259047c9219e4e1.jpg",
        "https://i.pinimg.com/564x/d3/3c/2b/d33c2b58de7141b15967e5f02d4cf6d5.jpg",
        "https://i.pinimg.com/564x/ad/2e/0a/ad2e0a57bf4b28c24b1c47c25ac34f6b.jpg",
        "https://i.pinimg.com/564x/e0/09/29/e00929627ef3bc4584c0cde1d68f8757.jpg",
        "https://i.pinimg.com/564x/c6/2b/c0/c62bc0732b77f9ac390bee97754976c0.jpg",
        "https://i.pinimg.com/564x/fd/13/4d/fd134d27c62da945dd6868f0b6fc1912.jpg",
        "https://i.pinimg.com/564x/49/b8/1f/49b81f5662e1656aa77c7f10636eb87e.jpg",
        "https://i.pinimg.com/564x/0f/05/b7/0f05b75fe6380b1b18d39cd5cd904c37.jpg",
        "https://i.pinimg.com/564x/b9/0a/08/b90a08f402c2b9ec8ac830e4e49cf268.jpg",
        "https://i.pinimg.com/736x/07/04/e6/0704e60147103dce566eca8e73542366.jpg",
        "https://i.pinimg.com/564x/69/61/ff/6961ff38cb43a085c108cffa214bb160.jpg",
        "https://i.pinimg.com/564x/ad/c5/06/adc50689b5414e76877041dfbe146548.jpg",
        "https://i.pinimg.com/736x/2a/e0/6d/2ae06d15f562743b77457ea5f8c48099.jpg",
        "https://i.pinimg.com/564x/06/64/ad/0664ad765a527522f90913c3592c33a7.jpg",
        "https://i.pinimg.com/564x/f1/36/d2/f136d27e2a0e086db542a40faaa25ade.jpg",
        "https://i.pinimg.com/736x/15/9e/4d/159e4dbcab8eb8223ad1c947490624ff.jpg",
        "https://i.pinimg.com/564x/de/06/ae/de06ae1e575c7f1a93cfef27f8f719bc.jpg",
        "https://i.pinimg.com/564x/82/a2/be/82a2bed01dbedb74f751a6ff80da945e.jpg",
        "https://i.pinimg.com/564x/b5/a5/02/b5a5023fbe44f5a0a35ac8e3c19084c3.jpg"
      ],
      "mainpic": "https://images.unsplash.com/photo-1618176581835-d60e9c2567b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      "caption": "Classic Memorable Nights, And Dancing",
      "id": 4
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
    
   export default SectionDetails4;
                      
   