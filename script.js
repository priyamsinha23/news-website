const apikey= '8bdf4ad491144cad8976aee98b9c2f13' ;

let se= document.querySelector('.page2 #sports  .title .tr') ;
let to= document.querySelector('.left .text .tit');
let de= document.querySelector('.left .text .des') ;
let breaks= document.querySelector('#breakn'); 
let topnn= document.querySelector('.topnews');
let nvv= document.querySelector('#sports .newsbox');
let bs= document.querySelector(' #busi .newsbox');
let ts= document.querySelector(' .te .newsbox');
let te= document.querySelector('.page2 #busi  .title .tr');
let tes= document.querySelector('.page2 .te  .title .tr');
let nab= document.querySelector('.nav ');
let dog= document.querySelector('.bi') ;
let he= document.querySelector('.header');
let mob= document.querySelector('.mobile');
let clos= document.querySelector('#close .bi') ;
let hmu= document.querySelector('.mobile .bi') ;
se.addEventListener('click', function(){
  window.location.href='spor.html' ;
})


clos.addEventListener('click', function(e){
    nab.classList.remove('bj');
})
if(hmu){
hmu.addEventListener('click', function(e){
    nab.classList.add('bj') ;
})
}
te.addEventListener('click', function(){
  window.location.href='buis.html' ;
})

 tes.addEventListener('click', function(){
  window.location.href='tech.html' ;
})


let spi= async function(category, pagesize){
let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pagesize=${pagesize}&apiKey=${apikey}` ;
let ap=  await fetch(url)  ; 
let js= await ap.json();  
console.log(js);
return js.articles ;
}




let bre= function(data){
   breaks.innerHTML= `<img src=${data[0].urlToImage} alt="">` ;
  to.innerHTML= ` <h2>${data[0].title}</h2>` ; 
  de.innerHTML=` <a href=${data[0].url}>${data[0].description}</a>` ;
}
spi('general', 5).then(bre);


top20= function(data)  {
    html='';
    data.forEach(element => {
        if(element.title.length<80) {
            title= element.title;
        }
        else{
            title= element.title.slice(0,80) +"..." ;
        }

  html+= ` <div class="news">
                    <div class="img"> <img src=${element.urlToImage} alt=""></div>
                    <div class="des"> <a href=${element.url}>${title}</a></div>
                </div>` ;

topnn.innerHTML=html ;
    });
}
spi('general', 20).then(top20); 


let sp =function(data){
    html='' ;
    data.forEach(element => {
        if(element.title.length<100) {
                        title= element.title;
                    }
                    else{
                        title= element.title.slice(0,100) +"..." ;
                    }

                    html+=  ` <div class="newscard">
                    <div class="img"> <img src=${element.urlToImage}></div>
                    <div class="des"><a href=${element.url}>${title}</a></div>
                </div>` ;

                nvv.innerHTML= html ;
                
            
    });
}
spi('sports', 10).then(sp);

let sps =function(data){
    htmls='';
    data.forEach(element => {
        if(element.title.length<100) {
                        title= element.title;
                    }
                    else{
                        // title= element.title.slice(0,100) +"..." ;
                    }
                    htmls+= `<div class="newscard">
                                <div class="img"> <img src=${element.urlToImage}></div>
                                <div class="des"> <a href=${element.url}>${title}</a></div>
                             </div>` ;

                bs.innerHTML= htmls ;
            
    });
}
spi('business', 10).then(sps);


let spa =function(data){
    html='' ;
    data.forEach(element => {
        if(element.title.length<100) {
                        title= element.title;
                    }
                    else{
                        // title= element.title.slice(0,100) +"..." ;
                    }
                    html+=  ` <div class="newscard">
                    <div class="img"> <img src=${element.urlToImage}></div>
                    <div class="des"><a href=${element.url}>${title}</a></div>
                </div>` ;

                ts.innerHTML= html ;
            
    });
}
spi('technology', 10).then(spa);


