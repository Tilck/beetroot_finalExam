////////////////////////SLIDERs
$(document).ready(function(){
    initMap();
    $('.works__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        prevArrow: '<img src="img/images/sliderLeftArrow.png" alt="prevArr" class="slider__arrow slider__arrow--prev">',
        nextArrow: '<img src="img/images/sliderRightArrow.png" alt="nextArr" class="slider__arrow slider__arrow--next">',
    });

    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<img src="img/images/teamLeftArrow.png" alt="prevArr" class="slider__arrow slider__arrow--prev">',
        nextArrow: '<img src="img/images/teamRightArrow.png" alt="nextArr" class="slider__arrow slider__arrow--next">'
    });

});

/////////////////////////////////

Vue.component("team-card", {
    template: `
            <div class="team__card card">
                <div class="card__photo">
                    <img :src="user.photo" alt="userPhoto">
                </div>
                <h3 class="card__title"> {{user.name}} </h3>
                <p class="card__position"> {{user.position}} </p>
                <div class="card__footer" >
                    <a v-for="social in user.socials" 
                        :key="social.id" 
                        :href="social[0]">
                        <i :class="social[1]"></i>
                    </a>
                </div>
            </div>`,
    props: ["user"],
})

var vm = new Vue({
    el: "#team",
    data: {
        users: [{
            id: 1,
            photo: 'img/images/team/slide1.jpg',
            name: 'Miguel Obrien',
            position: 'CEO & Founder',
            socials: {
                in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                fb: ['https://fb.com/', "fab fa-facebook-square"],
                tw: ['https://twitter.com/', 'fab fa-twitter-square']
            }
        },
            {
                id: 2,
                photo: 'img/images/team/slide2.jpg',
                name: 'Jackie Carroll',
                position: 'Art Director',
                socials: {
                    be: ['https://www.behance.net/', 'fab fa-behance-square'],
                    in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                    g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                    fb: ['https://fb.com/', "fab fa-facebook-square"],
                    tw: ['https://twitter.com/', 'fab fa-twitter-square']
                }
            },
            {
                id: 3,
                photo: 'img/images/team/slide3.jpg',
                name: 'Ida Morrison',
                position: 'Designer',
                socials: {
                    be: ['https://www.behance.net/', 'fab fa-behance-square'],
                    in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                    g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                    fb: ['https://fb.com/', "fab fa-facebook-square"],
                    tw: ['https://twitter.com/', 'fab fa-twitter-square']
                }
            },
            {
                id: 4,
                photo: 'img/images/team/slide4.jpg',
                name: 'Morrison Carroll',
                position: 'Sensei',
                socials: {
                    in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                    g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                    fb: ['https://fb.com/', "fab fa-facebook-square"],
                    tw: ['https://twitter.com/', 'fab fa-twitter-square']
                }
            },
            {
                id: 5,
                photo: 'img/images/team/slide5.jpg',
                name: 'Mora Miguel',
                position: 'Designer',
                socials: {
                    in: ['https://www.linkedin.com', "fab fa-linkedin"],
                    g: ['https://accounts.google.com', "fab fa-google-plus-square"]
                }
            },

        ]
    }
});


//////////////////////////////////////////map////////////

var map, coordinates, marker;
function initMap() {
    coordinates = {
        lat: -7.947416,
        lng: 112.615161
    },
        markerImage = 'img/images/marker.png',
        zoom = 14.8,
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: zoom,
            center: coordinates,
            disableDefaultUI: true,
        });
    coordinates = {
        lat: -7.943367,
        lng: 112.620067
    },
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: markerImage
        });
    $.getJSON("../js/libs/map-style.json", function (data) {
        map.setOptions({
            styles: data
        });
    });
}

//////////////////////////////////////////contact labels////////////

$('.label__icon').on('click', labelSlick)
function labelSlick(){
    $(this).parent().toggleClass('label__wrap--hidden');
    console.log(this);
}

///////////////////////////////////placeholder////

// $('.form__placeholder').click(function() {
//   $(this).siblings('input').focus();
// });
$('.forPlaceholder').focus(function() {
    $(this).siblings('.form__placeholder').hide();
});
$('.forPlaceholder').blur(function() {
    if ($(this).val().length == 0)
        $(this).siblings('.form__placeholder').show();
});
$('.forPlaceholder').blur();


/////////////////scroll down/////
$("a").on('click', function(event) {

    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

            window.location.hash = hash;
        });
    }
});
