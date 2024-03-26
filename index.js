  //js
  let  input=document.getElementById("input");
console.log(input);
let  Search=document.getElementById("Search");
console.log(Search);
Search.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    let per_page=20;
    let  input=document.getElementById("input").value
    window.fetch(`https://pixabay.com/api/?key=40143822-e001cc302df3a27f3d94cf47e&q=${input}&image_type=photo&pretty=true&${per_page}`)
    //.then((data)=>console.log(data))
    .then((data)=>data.json())
    .then((res)=>{
       // console.log(res.hits[0].previewURL);
     res.hits.map((ele)=>{
        console.log(ele);
        let img=`

        <img  src=${ele.previewURL}  height="200px" width="200px" id="img"/>
        `
      let main=document.getElementById("main");
      console.log(main);
      main.innerHTML+=img;
     })

    })
},false)
