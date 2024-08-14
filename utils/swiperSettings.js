import { Autoplay, Pagination, Navigation } from 'swiper';
export const SwiperModules = [Autoplay, Pagination, Navigation]

export const relatedProductsSwiper = {
    slidesPerView:6,
    spaceBetween:20,
    loop:true,
    breakpoints:{
            1430: {
                slidesPerView: 6,
            },
            1199: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
            },
            600: {
                slidesPerView: 3,
            },
            0:{
                slidesPerView: 2,

            }
    }
}

export const CategorySwiper2 = {
    slidesPerView: 7,
    spaceBetween:5,
    loop:true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints:{
        1630: {
            slidesPerView: 8,
           
        },
        1470: {
            slidesPerView: 8,
        },
   
        1384: {
            slidesPerView: 7,
        },
  
        1162: {
            slidesPerView: 6,
        },
   
        951: {
            slidesPerView: 5,
        },
   
        743: {
            slidesPerView: 4,
        },
   
        546: {
            slidesPerView: 3,
        },
        0:{
            slidesPerView: 2,
        }
    },

}

export const TopSaveSwiper2 = {
    slidesPerView:5,
    spaceBetween:20,
    loop:true,
    breakpoints:{
        1400: {
            slidesPerView: 4,
        },
    
        1200: {
            slidesPerView: 3,
        },
   
        970: {
            slidesPerView: 4,
        },
   
        617: {
            slidesPerView: 3,
        },
        0:{
            slidesPerView: 2,

        }
    },

}

export const CakeSwiper2 = {
    modules:SwiperModules,
    slidesPerView:3,
    pagination:true,
    autoplay:{
        delay: 3500,
      },
    breakpoints:{
        992: {
            slidesPerView: 3,
           
        },
        690: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },

}

export const TopSellingSwiper2={
    slidesPerView: 4,
    autoplay:{
        delay: 3500,
      },
      spaceBetween:20,
    breakpoints:{
        1092: {
            slidesPerView: 3,
        },
        665: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },

}