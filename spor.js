const apikey= '495a4edeae8e4b60ad442d4d0725448c';
let con= document.querySelector('.container') ;
let cons= document.querySelector('.containers');
let co= document.querySelector('.containerss') ;
const api= async function(category, pagesize) {

    let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pagesize=${pagesize}&apiKey=${apikey}` ;
    let ap=  await fetch(url)  ; 
    let js= await ap.json();    
    console.log(js);
    return js.articles ;
  }



  hei= function(data){
    html='' ;
    data.forEach(element => {
    
      if(element.title.length<80){
        title= element.title;
      }
      else{
        title=element.title.slice(0,100) ;
      }
           html+= `  <div class="box">
            <div class="im"><img src=${element.urlToImage} alt=""></div>
            <div class="des"><a href=${element.url}>${title}</a></div>
        </div>`;
        con.innerHTML=html ;
    });
  }
  api('sports', 5).then(hei);

heis= function(data){
  html='' ;
  data.forEach(element => {
  
    if(element.title.length<80){
      title= element.title;
    }
    else{
      title=element.title.slice(0,100) ;
    }
         html+= `  <div class="box">
          <div class="im"><img src=${element.urlToImage} alt=""></div>
          <div class="des"><a href=${element.url}>${title}</a></div>
      </div>`;
      cons.innerHTML=html ;
  });
}
api('business', 20).then(heis) ;

he= function(data){
  html='' ;
  data.forEach(element => {
  
    if(element.title.length<80){
      title= element.title;
    }
    else{
      title=element.title.slice(0,100) ;
    }
         html+= `  <div class="box">
          <div class="im"><img src=${element.urlToImage} alt=""></div>
          <div class="des"><a href=${element.url}>${title}</a></div>
      </div>`;
      co.innerHTML=html ;
  });
}
api('technology', 20).then(he) ;