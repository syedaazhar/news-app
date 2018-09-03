window.onload = function () {
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=news-com-au&apiKey=1ec0dd5242314496a1c4b271818a3838",
        success: function (data) {
            document.querySelector('#headlin1').style["background-image"] = `url(${data.articles[0].urlToImage})`;
            document.querySelector("#headlin1-title").innerHTML = data.articles[0].title;
            document.querySelector("#headlin1-text").innerHTML = data.articles[0].description;

            document.querySelector('#headlin2').style["background-image"] = `url(${data.articles[1].urlToImage})`;
            document.querySelector("#headlin2-title").innerHTML = data.articles[1].title;
            document.querySelector("#headlin2-text").innerHTML = data.articles[1].description;

            document.querySelector('#headlin3').style["background-image"] = `url(${data.articles[2].urlToImage})`;
            document.querySelector("#headlin3-title").innerHTML = data.articles[2].title;
            document.querySelector("#headlin3-text").innerHTML = data.articles[2].description;
        },

        error: function (error) {
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
}



$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=1ec0dd5242314496a1c4b271818a3838",
    success: function (data) {

        for (let i = 0; i < 6; i++) {
            let contain1El = document.querySelector("#contain1");
            contain1El.innerHTML += `<div>
            <div class="card" id="card1" style="width: 18rem;">
                <img class="card-img-top" id="card-img-top1" src="${data.articles[i].urlToImage}" 
                alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title" id="card-title1">${data.articles[i].title}</h5>
                    <p class="card-text" id="card-text1">${data.articles[i].description}</p>
                    <a href="${data.articles[i].url}" class="more-detail" id="more-detail1">More Details</a>
                </div>
            </div>
        </div>`;
        }
    },

    error: function (error) {
        alert(error.responseJSON.message);
    }

});

$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=1ec0dd5242314496a1c4b271818a3838",
    success: function (data) {

        for (let i = 0; i < 6; i++) {
            let contain2El = document.querySelector("#contain2");
            contain2El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 18rem;">
                                            <img class="card-img-top" id="technology-img1" 
                                            src="${data.articles[i].urlToImage}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title" id="technology-title1">
                                                    ${data.articles[i].title}
                                                </h5>
                                                <p class="card-text" id="technology-text1">
                                                    ${data.articles[i].description}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="technology-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }
    },

    error: function (error) {
        alert(error.responseJSON.message);
    }

});

$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=1ec0dd5242314496a1c4b271818a3838",
    success: function (data) {

        for (let i = 0; i < 6; i++) {
            let contain3El = document.querySelector("#contain3");
            contain3El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 18rem;">
                                            <img class="card-img-top" id="entertainment-img1" 
                                            src="${data.articles[i].urlToImage}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title" id="entertainment-title1">
                                                    ${data.articles[i].title}
                                                </h5>
                                                <p class="card-text" id="entertainment-text1">
                                                    ${data.articles[i].description}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="entertainment-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }

    },

    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=1ec0dd5242314496a1c4b271818a3838",
    success: function (data) {

        for (let i = 0; i < 6; i++) {
            let contain4El = document.querySelector("#contain4");
            contain4El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 18rem;">
                                            <img class="card-img-top" id="nature-img1" 
                                            src="${data.articles[i].urlToImage}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title" id="nature-title1">
                                                    ${data.articles[i].title}
                                                </h5>
                                                <p class="card-text" id="nature-text1">
                                                    ${data.articles[i].description}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="nature-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }

    },

    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=1ec0dd5242314496a1c4b271818a3838",
    success: function (data) {

        for (let i = 0; i < 6; i++) {
            let contain5El = document.querySelector("#contain5");
            contain5El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 18rem;">
                                            <img class="card-img-top" id="sport-img1" 
                                            src="${data.articles[i].urlToImage}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title" id="sport-title1">
                                                    ${data.articles[i].title}
                                                </h5>
                                                <p class="card-text" id="sport-text1">
                                                    ${data.articles[i].description}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="sport-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }

    },

    error: function (error) {
        alert(error.responseJSON.message);
    }
});
