
const SectionDetails2 = () => {
 const data = {
    "title": "ART",
    "body": "body",
    "pictures": [
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9pbCUyMHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbCUyMHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9pbCUyMHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582562320669-08063a679a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://media.istockphoto.com/photos/egyptian-hieroglyph-picture-id98464453?k=20&m=98464453&s=612x612&w=0&h=c3vo5vldJtM_7E_lM584OJD5HYvEABa7QktVVWaxKs4=",
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1561002515-3aa8c1fdba2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1548811579-017cf2a4268b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1583260955546-40f65311be3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1560303324-3a78782e964b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdHVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RhdHVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=458&q=80",
      "https://images.unsplash.com/photo-1602522393396-3f56815fc1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0YXR1ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://media.istockphoto.com/photos/egyptian-pyramid-statues-in-the-sunset-picture-id157317834?b=1&k=20&m=157317834&s=170667a&w=0&h=qRWmlZ1LFJAqy5b_McaO-Mj-wFDy2HkJKuL3OJR8kkk=",
      "https://images.unsplash.com/photo-1561830608-3bac329162ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhhcm9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1573623473350-372f8fb84838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhhcm9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://i.pinimg.com/564x/55/80/b1/5580b1f3310bf50a93a53a6a29eba1a6.jpg",
      "https://i.pinimg.com/564x/48/87/af/4887afb8ea55d25cb5880739b8963fdd.jpg",
      "https://i.pinimg.com/564x/dc/c3/85/dcc3859d4e2450315ef0f4bec3a435b4.jpg",
      "https://i.pinimg.com/564x/e3/42/b6/e342b690772323bbefd4433486d9901a.jpg",
      "https://i.pinimg.com/564x/15/e1/84/15e18461a9a1965153deaf5611c920d2.jpg",
      "https://i.pinimg.com/564x/37/d4/6e/37d46ebd879fe021e9bc53126a526206.jpg",
      "https://i.pinimg.com/564x/07/16/f6/0716f6591ef2b7c8f18788a0f2090e69.jpg",
      "https://i.pinimg.com/564x/ba/09/2c/ba092c37c78e66f20f06f5a2bcd0122a.jpg",
      "https://i.pinimg.com/736x/0b/11/95/0b11950bcea2acbe871fd1c95b166f1f.jpg"
    ],
    "mainpic": "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0JTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "caption": "Beautiful Paintings, And Statues",
    "id": 2
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
 
export default SectionDetails2;
                   
