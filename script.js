window.onload = function () {
    $.ajax({ 
        url : "https://newsapi.org/v2/top-headlines?sources=news-com-au&apiKey=1ec0dd5242314496a1c4b271818a3838",
        success: function(data)
        {
            document.querySelector('#headlin1').style["background-image"] = `url(${data.articles[0].urlToImage})`; 
            document.querySelector("#headlin1-title").innerHTML= data.articles[0].title; 
            document.querySelector("#headlin1-text").innerHTML= data.articles[0].description;
            
            document.querySelector('#headlin2').style["background-image"] = `url(${data.articles[1].urlToImage})`; 
            document.querySelector("#headlin2-title").innerHTML= data.articles[1].title; 
            document.querySelector("#headlin2-text").innerHTML= data.articles[1].description;

            document.querySelector('#headlin3').style["background-image"] = `url(${data.articles[2].urlToImage})`; 
            document.querySelector("#headlin3-title").innerHTML= data.articles[2].title; 
            document.querySelector("#headlin3-text").innerHTML= data.articles[2].description;
        },

        error: function(error){
            alert(error.responseJSON.message);
          }

    });

    var swiper = new Swiper('.swiper-container', {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
                    
          },
          
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      });

    swiper = document.querySelector('.swiper-container').swiper;
    swiper.slideNext();

    $.ajax({ 
        url : "https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=1ec0dd5242314496a1c4b271818a3838",
        success: function(data)
        {
            document.querySelector('#card-img-top1').src = `${data.articles[0].urlToImage}`; 
            document.querySelector("#card-title1").innerHTML= data.articles[0].title; 
            document.querySelector("#card-text1").innerHTML= data.articles[0].description;
            document.querySelector("#more-detail1").href= data.articles[0].url;
            
            document.querySelector('#card-img-top2').src = `${data.articles[1].urlToImage}`; 
            document.querySelector("#card-title2").innerHTML= data.articles[1].title; 
            document.querySelector("#card-text2").innerHTML= data.articles[1].description;
            document.querySelector("#more-detail2").href= data.articles[1].url;

            document.querySelector('#card-img-top3').src = `${data.articles[2].urlToImage}`; 
            document.querySelector("#card-title3").innerHTML= data.articles[2].title; 
            document.querySelector("#card-text3").innerHTML= data.articles[2].description;
            document.querySelector("#more-detail3").href= data.articles[2].url;
        },

        error: function(error){
            alert(error.responseJSON.message);
          }

    });
}

