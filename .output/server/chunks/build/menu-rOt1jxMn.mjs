const Menu = [
  {
    id: 1,
    title: "Home",
    type: "sub",
    megaMenu: true,
    megaMenuType: "image",
    active: false,
    children: [
      // {
      //   title: "Paris",
      //   path: "/theme/paris",
      //   type: "link",
      //   image: "/images/themes/01.png",
      // },
      // {
      //   title: "Tokyo",
      //   path: "/theme/tokyo",
      //   type: "link",
      //   image: "/images/themes/02.png",
      // },
      {
        title: "Osaka",
        path: "/theme/osaka",
        type: "link",
        image: "/images/themes/03.png"
      }
      // {
      //   title: "Rome",
      //   path: "/theme/rome",
      //   type: "link",
      //   image: "/images/themes/04.png",
      // },
      // {
      //   title: "Madrid",
      //   path: "/theme/madrid",
      //   type: "link",
      //   image: "/images/themes/05.png",
      // },
      // {
      //   title: "Berlin",
      //   path: "/theme/berlin",
      //   type: "link",
      //   image: "/images/themes/06.png",
      // },
      // {
      //   title: "Denver",
      //   path: "/theme/denver",
      //   type: "link",
      //   image: "/images/themes/07.png",
      // },
      // {
      //   title: "",
      //   path: "theme/paris",
      //   type: "link",
      //   image: "/images/themes/08.png",
      // },
    ]
  },
  {
    id: 2,
    title: "Collections",
    type: "sub",
    megaMenu: true,
    megaMenuType: "link",
    path: "/collections",
    active: false,
    slider: "product",
    children: [
      {
        children: [
          {
            title: "Collection Layouts",
            type: "sub"
          },
          {
            title: "Collection Left Sidebar",
            path: "/collections",
            params: { layout: "collection_left_sidebar" },
            type: "link",
            label: "Hot",
            labelClass: "warning-label"
          }
          // {
          //   title: "Collection Right Sidebar",
          //   path: "/collections",
          //   params: { layout: "collection_right_sidebar" },
          //   type: "link",
          // },
          // {
          //   title: "Collection No Sidebar",
          //   path: "/collections",
          //   params: { layout: "collection_no_sidebar" },
          //   type: "link",
          // },
          // {
          //   title: "Collection 3 Grid",
          //   path: "/collections",
          //   params: { layout: "collection_3_grid" },
          //   type: "link",
          // },
          // {
          //   title: "Collection 4 Grid",
          //   path: "/collections",
          //   params: { layout: "collection_4_grid" },
          //   type: "link",
          //   label: "New",
          // },
          // {
          //   title: "Collection 5 Grid",
          //   path: "/collections",
          //   params: { layout: "collection_5_grid" },
          //   type: "link",
          //   label: "New",
          // },
          // {
          //   title: "Collection List View",
          //   path: "/collections",
          //   params: { layout: "collection_list_view" },
          //   type: "link",
          // },
        ]
      }
      // {
      //   children: [
      //     {
      //       title: "Collection Layouts",
      //       type: "sub",
      //     },
      //     {
      //       title: "Category Slider",
      //       path: "/collections",
      //       params: { layout: "collection_category_slider" },
      //       type: "link",
      //     },
      //     {
      //       title: "Category Sidebar",
      //       path: "/collections",
      //       params: { layout: "collection_category_sidebar" },
      //       type: "link",
      //       label: "New",
      //     },
      //     {
      //       title: "Category Banner",
      //       path: "/collections",
      //       params: { layout: "collection_banner" },
      //       type: "link",
      //       labelClass: "",
      //     },
      //     {
      //       title: "Offcanvas Filter",
      //       path: "/collections",
      //       params: { layout: "collection_offcanvas_filter" },
      //       type: "link",
      //     },
      //   ],
      // },
    ]
  },
  {
    id: 3,
    title: "Product",
    type: "sub",
    megaMenu: true,
    megaMenuType: "link",
    slider: "banner",
    active: false,
    children: [
      {
        children: [
          {
            title: "Product Pages",
            type: "sub"
          },
          {
            title: "Product Thumbnail",
            path: "/product/deliciously-sweet-watermelon",
            params: { layout: "product_thumbnail" },
            type: "link"
          }
          // {
          //   title: 'Product Images',
          //   path: '/product/deliciously-sweet-watermelon',
          //   params: { layout: 'product_images' },
          //   type: 'link'
          // },
          // {
          //   title: 'Product Slider',
          //   type: 'link',
          //   path: '/product/deliciously-sweet-watermelon',
          //   params: { layout: 'product_slider' },
          //   labelClass: 'warning-label',
          // },
          // {
          //   title: 'Product Sticky',
          //   type: 'link',
          //   path: '/product/deliciously-sweet-watermelon',
          //   params: { layout: 'product_sticky' },
          //   labelClass: 'warning-label'
          // },
          // {
          //   title: 'Product Accordion',
          //   path: '/product/deliciously-sweet-watermelon',
          //   params: { layout: 'product_accordion' },
          //   type: 'link'
          // },
          // {
          //   title: 'Product Tab',
          //   path: '/product/deliciously-sweet-watermelon',
          //   type: 'link',
          // },
          // {
          //   title: 'Product Features',
          //   type: 'sub',
          //   class: 'custom-mt'
          // },
          // {
          //   title: 'Bundle (Cross Sale)',
          //   path: '/product/high-quality-bookshelves',
          //   type: 'link'
          // },
          // {
          //   title: 'Hot Stock Progress',
          //   path: '/product/mini-bodycon-dress',
          //   type: 'link',
          //   label: 'New',
          // },
          // {
          //   title: 'Sold Out',
          //   path: '/product/solid-collared-tshirts',
          //   type: 'link'
          // },
          // {
          //   title: 'Sale Countdown',
          //   path: '/product/men-gym-co-ord-set',
          //   type: 'link'
          // },
          // {
          //   title: 'Product Zoom',
          //   path: '/product/deliciously-sweet-watermelon',
          //   type: 'link',
          // },
        ]
      },
      {
        children: [
          // {
          //   title: "Product Variants Style",
          //   type: "sub",
          // },
          // {
          //   title: "Variant Rectangle",
          //   path: "/product/organic-oranges",
          //   type: "link",
          // },
          // {
          //   title: "Variant Circle",
          //   type: "link",
          //   path: "/product/solid-hooded-sweatshirt",
          //   label: "New",
          // },
          // {
          //   title: "Variant Image Swatch",
          //   path: "/product/relaxed-fit-hoodie",
          //   type: "link",
          // },
          // {
          //   title: "Variant Color",
          //   path: "/product/premium-blazer",
          //   type: "link",
          // },
          // {
          //   title: "Variant Radio Button",
          //   path: "/product/women-flared-jeans",
          //   type: "link",
          // },
          // {
          //   title: "Variant Dropdown",
          //   path: "/product/fresh-and-pure-oil",
          //   type: "link",
          // },
          // {
          //   title: "Product Features",
          //   type: "sub",
          //   class: "custom-mt",
          // },
          // {
          //   title: "Sticky Checkout",
          //   path: "/product/elegant-and-durable-bed",
          //   type: "link",
          // },
          // {
          //   title: "Dynamic Checkout",
          //   type: "link",
          //   path: "/product/solid-polo-tshirt",
          //   labelClass: "warning-label",
          // },
          // {
          //   title: "Secure Checkout",
          //   path: "/product/premium-dumbbells",
          //   type: "link",
          // },
          // {
          //   title: "Active Product view",
          //   path: "/product/organic-long-grain-rice",
          //   type: "link",
          // },
          // {
          //   title: "Active Last Orders",
          //   path: "/product/delicious-cupcakes",
          //   type: "link",
          // },
        ]
      },
      {
        children: [
          // {
          //   title: "Product Features",
          //   type: "sub",
          // },
          // {
          //   title: "Product Simple",
          //   path: "/product/deliciously-sweet-strawberry",
          //   type: "link",
          // },
          // {
          //   title: "Product Classified",
          //   path: "/product/deliciously-sweet-watermelon?layout=product_thumbnail",
          //   type: "link",
          //   label: "New",
          // },
          // {
          //   title: "Size Chart",
          //   path: "/product/solid-hooded-sweatshirt",
          //   type: "link",
          //   label: "New",
          // },
          // {
          //   title: "Delivery & Return",
          //   path: "/product/relaxed-fit-hoodie",
          //   type: "link",
          // },
          // {
          //   title: "Product Review",
          //   path: "/product/deliciously-sweet-watermelon",
          //   type: "link",
          // },
          // {
          //   title: "Ask an Expert",
          //   path: "/product/premium-blazer",
          //   type: "link",
          // },
          // {
          //   title: "Product Features",
          //   type: "sub",
          //   class: "custom-mt",
          // },
          // {
          //   title: "Product Tags",
          //   path: "/product/solid-hooded-sweatshirt",
          //   type: "link",
          // },
          // {
          //   title: "Product Information",
          //   path: "/product/solid-cotton-tshirts",
          //   type: "link",
          // },
          // {
          //   title: "Social Share",
          //   type: "link",
          //   path: "/product/pointed-toe-kitten-heeled-sandals",
          //   label: "Hot",
          //   labelClass: "warning-label",
          // },
          // {
          //   title: "Related Products",
          //   type: "link",
          //   label: "Hot",
          //   path: "/product/delicious-biscuits",
          //   labelClass: "warning-label",
          // },
          // {
          //   title: "Wishlist & Compare",
          //   path: "/product/crispy-potato-chips",
          //   type: "link",
          // },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Mega Menu",
    type: "sub",
    badge: "New",
    megaMenu: true,
    megaMenuType: "link",
    path: "collection",
    active: false,
    slider: "banner_landscape",
    children: [
      {
        children: [
          {
            title: "Popular Categories",
            type: "sub"
          },
          {
            title: "Vegetables & Fruits",
            type: "link",
            path: "/collections",
            params: { category: "vegetables-fruits" }
          },
          {
            title: "Biscuits & Snacks",
            type: "link",
            label: "New",
            path: "/collections",
            params: { category: "biscuits-snacks" }
          },
          {
            title: "Daily Breakfast",
            type: "link",
            label: "New",
            path: "/collections",
            params: { category: "daily-breakfast" }
          },
          {
            title: "Trendy Fashion",
            type: "link",
            path: "/collections",
            params: { category: "fashion" }
          },
          {
            title: "Furniture & Decore",
            type: "link",
            path: "/collections",
            params: { category: "furniture" }
          }
        ]
      },
      {
        children: [
          {
            title: "Popular Tags",
            type: "sub"
          },
          {
            title: "Beauty Products",
            type: "link",
            path: "/collections",
            params: { tag: "beauty" }
          },
          {
            title: "Electronics & Accessories",
            type: "link",
            label: "Hot",
            labelClass: "warning-label",
            path: "/collections",
            params: { tag: "electronics" }
          },
          {
            title: "Pet Shop",
            type: "link",
            path: "/collections",
            params: { tag: "pet-shop" }
          },
          {
            title: "Milk & Dairy Products",
            type: "link",
            path: "/collections",
            params: { tag: "milk-dairy-products" }
          },
          {
            title: "Sports",
            type: "link",
            path: "/collections",
            params: { tag: "sports" }
          }
        ]
      },
      {
        children: [
          {
            title: "Email Template",
            type: "sub"
          },
          {
            title: "Welcome Template",
            type: "external_link",
            path: "https://themes.pixelstrap.com/fastkart/email-templete/welcome.html"
          },
          {
            title: "Abondonment",
            type: "external_link",
            label: "Hot",
            labelClass: "warning-label",
            path: "https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html"
          },
          {
            title: "Offer Template",
            type: "external_link",
            path: "https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html"
          },
          {
            title: "Order Success",
            type: "external_link",
            label: "New",
            path: "https://themes.pixelstrap.com/fastkart/email-templete/order-success.html"
          },
          {
            title: "Reset Password",
            type: "external_link",
            path: "https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html"
          }
        ]
      },
      {
        children: [
          {
            title: "Invoice Template",
            type: "sub"
          },
          {
            title: "Invoice Template 1",
            type: "external_link",
            path: "https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html"
          },
          {
            title: "Invoice Template 2",
            type: "external_link",
            label: "Hot",
            path: "https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html"
          },
          {
            title: "Invoice Template 3",
            type: "external_link",
            path: "https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html"
          }
        ]
      }
    ]
  },
  // {
  //   id: 4,
  //   title: "Blog",
  //   type: "sub",
  //   megaMenu: true,
  //   megaMenuType: "link",
  //   slider: "blog",
  //   active: false,
  //   children: [
  //     {
  //       children: [
  //         {
  //           title: "Blog Pages",
  //           type: "sub",
  //         },
  //         {
  //           title: "Blog List",
  //           type: "link",
  //           label: "New",
  //           path: "/blog",
  //           params: { style: "list_view", sidebar: "left_sidebar" },
  //         },
  //         {
  //           title: "Grid Left Sidebar",
  //           type: "link",
  //           label: "Hot",
  //           path: "/blog",
  //           params: { style: "grid_view", sidebar: "left_sidebar" },
  //           labelClass: "warning-label",
  //         },
  //         {
  //           title: "Grid Right Sidebar",
  //           type: "link",
  //           path: "/blog",
  //           params: { style: "grid_view", sidebar: "right_sidebar" },
  //         },
  //         {
  //           title: "Grid No Sidebar",
  //           type: "link",
  //           path: "/blog",
  //           params: { style: "grid_view", sidebar: "no_sidebar" },
  //         },
  //         {
  //           title: "Blog Details",
  //           type: "link",
  //           path: "/blog/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Pages",
    active: false,
    type: "sub",
    children: [
      {
        title: "Authentication",
        type: "sub",
        children: [
          {
            title: "Sign In",
            path: "/auth/login",
            type: "link"
          },
          {
            title: "Sign Up",
            path: "/auth/register",
            type: "link"
          },
          {
            title: "Forgot Password",
            path: "/auth/forgot-password",
            type: "link"
          },
          {
            title: "Verify OTP",
            path: "/auth/otp",
            type: "link"
          },
          {
            title: "Update Password",
            path: "/auth/update-password",
            type: "link"
          }
        ]
      },
      {
        title: "Account",
        type: "sub",
        children: [
          {
            title: "My Dashboard",
            path: "/account/dashboard",
            type: "link"
          },
          {
            title: "My Notifications",
            path: "/account/notifications",
            type: "link"
          },
          {
            title: "My Addresses",
            path: "/account/addresses",
            type: "link"
          },
          {
            title: "My Wallet",
            path: "/account/wallet",
            type: "link"
          },
          {
            title: "My Points",
            path: "/account/point",
            type: "link"
          },
          {
            title: "My Orders",
            path: "/account/order",
            type: "link"
          },
          {
            title: "Order Details",
            path: "/account/order/details/1000",
            type: "link"
          },
          {
            title: "Refund History",
            path: "/account/refund",
            type: "link"
          },
          {
            title: "Payout Details",
            path: "/account/bank-details",
            type: "link"
          }
        ]
      },
      {
        title: "About Us",
        type: "link",
        path: "/about-us"
      },
      {
        title: "Browse Faqs",
        type: "link",
        path: "/faq",
        label: "Hot",
        labelClass: "warning-label"
      },
      {
        title: "Cart",
        type: "link",
        path: "/cart"
      },
      {
        title: "Checkout",
        type: "link",
        path: "/checkout"
      },
      {
        title: "Compare",
        type: "link",
        path: "/compare"
      },
      {
        title: "Contact Us",
        path: "/contact-us",
        type: "link"
      },
      {
        title: "Maintenance",
        type: "link",
        path: "/maintenance"
      },
      {
        title: "Offers",
        type: "link",
        path: "/offers",
        label: "New"
      },
      {
        title: "Search",
        type: "link",
        path: "/search",
        label: "Hot",
        labelClass: "warning-label"
      },
      {
        title: "Wishlist",
        type: "link",
        path: "/wishlist"
      },
      {
        title: "404",
        type: "link",
        path: "/404"
      }
    ]
  },
  {
    id: 6,
    title: "Seller",
    type: "sub",
    active: false,
    children: [
      {
        title: "Become Seller",
        type: "link",
        path: "/seller/become-seller"
      },
      {
        title: "Seller Stores (Basic)",
        type: "link",
        label: "Hot",
        path: "/seller/stores",
        params: { layout: "basic_store" },
        labelClass: "warning-label"
      },
      {
        title: "Seller Stores (Classic)",
        path: "/seller/stores",
        params: { layout: "classic_store" },
        type: "link"
      },
      {
        title: "Store Details (Basic)",
        path: "/seller/store/fruits-market",
        params: { layout: "basic_store_details" },
        type: "link"
      },
      {
        title: "Store Details (Classic)",
        path: "/seller/store/fruits-market",
        params: { layout: "classic_store_details" },
        type: "link"
      }
    ]
  }
];

export { Menu as M };
