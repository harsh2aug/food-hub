import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kSXyIxnsIzLxo_LF9HCnMSNQ7m6OCuUGKw&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};
const cardList = [
  {
    info: {
      id: "368179",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/74a92c2e-0bfc-4be1-841b-c6402916e4a8_368179.JPG",
      locality: "Garh Road",
      areaName: "Shastri Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.5,
      parentId: "721",
      avgRatingString: "4.5",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-08 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/pizza-hut-garh-road-shastri-nagar-rest368179",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "656187",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/1ec7d410-5bdf-4d89-b4fb-6bbb37dad2e8_656187.jpg",
      locality: "Down town",
      areaName: "Meerut",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "5.5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-08 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/burger-king-down-town-meerut-rest656187",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "820159",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/b971ff95-70c4-467c-9b8d-4167f4c0a467_820159.JPG",
      locality: "Subharti Puram",
      areaName: "Mars Resort",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "391",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹589",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/kfc-subharti-puram-mars-resort-rest820159",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "608806",
      name: "Ghar Se Rasoi ( Pure Veg )",
      cloudinaryImageId: "fwgofzubbhshpy4r37os",
      locality: "Bombay Bazar",
      areaName: "Meerut Cantt",
      costForTwo: "₹349 for two",
      cuisines: [
        "North Indian",
        "Tandoor",
        "Indian",
        "Chinese",
        "Fast Food",
        "Snacks",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "375093",
      avgRatingString: "4.4",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹130",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/ghar-se-rasoi-pure-veg-bombay-bazar-meerut-cantt-rest608806",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "776228",
      name: "Feast mood",
      cloudinaryImageId: "bf4e7d8ca73c6232ec3886595d0b7572",
      locality: "Hapur Road",
      areaName: "Shastri Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Mughlai", "Chinese", "Kebabs", "pizza"],
      avgRating: 4.3,
      parentId: "462900",
      avgRatingString: "4.3",
      totalRatingsString: "7.2K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-08 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/feast-mood-hapur-road-shastri-nagar-rest776228",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "292123",
      name: "Veer Ji Malai Chaap Wale",
      cloudinaryImageId: "gbt5roo58kwvw35wsror",
      locality: "Brook street",
      areaName: "Meerut Cantt",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Rolls", "Fast Food"],
      avgRating: 4.4,
      veg: true,
      parentId: "12056",
      avgRatingString: "4.4",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/veer-ji-malai-chaap-wale-brook-street-meerut-cantt-rest292123",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "697904",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/687bea41-29dc-49e1-82ff-e631795e4a04_697904.JPG",
      locality: "Roorkee",
      areaName: "Partapur",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 7.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-08 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹54",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/mcdonalds-roorkee-partapur-rest697904",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "136960",
      name: "Papa Ji Dal Wale (Since 1948)",
      cloudinaryImageId: "xhujurpudhohrdcljasv",
      locality: "Devpuri",
      areaName: "Metro plaza",
      costForTwo: "₹249 for two",
      cuisines: ["Indian", "Tandoor"],
      avgRating: 4.3,
      veg: true,
      parentId: "15379",
      avgRatingString: "4.3",
      totalRatingsString: "6.2K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/papa-ji-dal-wale-since-1948-devpuri-metro-plaza-rest136960",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "232016",
      name: "Son Of Swad",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/23/c2c76be9-995a-4670-9d66-d233ac734de8_232016.JPG",
      locality: "Devpuri",
      areaName: "Meerut Mall",
      costForTwo: "₹350 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "15041",
      avgRatingString: "4.1",
      totalRatingsString: "9.0K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-08 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/son-of-swad-devpuri-meerut-mall-rest232016",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "94873",
      name: "Chulha Chowka",
      cloudinaryImageId: "cshzm5iagytcohurd3wj",
      locality: "Abu Lane\n",
      areaName: "Abulane",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      veg: true,
      parentId: "438711",
      avgRatingString: "4.3",
      totalRatingsString: "4.9K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/chulha-chowka-abu-lane-abulane-rest94873",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "267779",
      name: "Biggies Pizza",
      cloudinaryImageId: "i5ihljm5pwwfbtwaosaj",
      locality: "Meerut Cantt",
      areaName: "Sadar Bazaar",
      costForTwo: "₹269 for two",
      cuisines: ["Italian", "Continental", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "10299",
      avgRatingString: "4.3",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/biggies-pizza-cantt-sadar-bazaar-rest267779",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "359294",
      name: "Ghar Se Rasoi",
      cloudinaryImageId: "qfyk9p6wiuop4l7ihoyz",
      locality: "Pallavpuram",
      areaName: "Meerut Cantt",
      costForTwo: "₹399 for two",
      cuisines: [
        "North Indian",
        "Tandoor",
        "Indian",
        "Mughlai",
        "Snacks",
        "Biryani",
      ],
      avgRating: 4.4,
      parentId: "87186",
      avgRatingString: "4.4",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/ghar-se-rasoi-pallavpuram-meerut-cantt-rest359294",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "345150",
      name: "Nazeer Foods",
      cloudinaryImageId: "6aa38b251b1ee1662961a6dc19e41e95",
      locality: "Sotiganj",
      areaName: "Meerut Cantt",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Mughlai"],
      avgRating: 3.8,
      parentId: "2351",
      avgRatingString: "3.8",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹70",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/nazeer-foods-sotiganj-meerut-cantt-rest345150",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "402107",
      name: "Punjabi Tadka",
      cloudinaryImageId: "mqtzsv4qr7cspnsgksmx",
      locality: "Cantt Area",
      areaName: "Meerut Cantt",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Mughlai"],
      avgRating: 4,
      parentId: "435887",
      avgRatingString: "4.0",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/punjabi-tadka-cantt-area-meerut-cantt-rest402107",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "564501",
      name: "Vadilal Ice Creams",
      cloudinaryImageId: "rf1ugowdrlu2ozublq4i",
      locality: "Sadar Bazaar",
      areaName: "Meerut Cantt",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Cakes", "Beverages", "Bakery"],
      avgRating: 4.8,
      veg: true,
      parentId: "11745",
      avgRatingString: "4.8",
      totalRatingsString: "187",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/vadilal-ice-creams-sadar-bazaar-meerut-cantt-rest564501",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "844764",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/572cc1e1-ddd6-43f1-a37d-0002e1bb9bfd_844764.JPG",
      locality: "NEAR AURELIA SADAR BAZAR",
      areaName: "ASHOK ROAD",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "349",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/the-belgian-waffle-co-near-aurelia-sadar-bazar-ashok-road-rest844764",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "709560",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/e3d889a3-b1ad-41d2-b73c-0eecb9715c87_709560.JPG",
      locality: "Defence Colony",
      areaName: "Defence Colony",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "268",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "519",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/starbucks-coffee-defence-colony-rest709560",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "386420",
      name: "Hira Sweets",
      cloudinaryImageId: "h5sl5hm2wzd8tqdhtphd",
      locality: "Civil Line",
      areaName: "Civil Line",
      costForTwo: "₹400 for two",
      cuisines: ["Sweets", "North Indian"],
      avgRating: 4.4,
      parentId: "5155",
      avgRatingString: "4.4",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "3.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/hira-sweets-civil-line-rest386420",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "574665",
      name: "Burger Singh(Big Punjabi Burgers)",
      cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
      locality: "Abu Lane",
      areaName: "Meerut Cantt",
      costForTwo: "₹300 for two",
      cuisines: [
        "Burgers",
        "Snacks",
        "Desserts",
        "Beverages",
        "Fast Food",
        "American",
        "Indian",
      ],
      avgRating: 4.3,
      parentId: "375065",
      avgRatingString: "4.3",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/burger-singh-big-punjabi-burgers-abu-lane-meerut-cantt-rest574665",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "459235",
      name: "Sardar G Malai Chaap Junction",
      cloudinaryImageId: "nsn92s2rl4zhjoik9ntc",
      locality: "Vardhman Fortune Plaza \n",
      areaName: "Mohkam Pur",
      costForTwo: "₹359 for two",
      cuisines: ["Tandoor", "Indian", "Chinese", "Fast Food", "Snacks"],
      avgRating: 4.1,
      veg: true,
      parentId: "14511",
      avgRatingString: "4.1",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c5c91d34-e06a-4e77-8c0f-af0ab68fda66",
    },
    cta: {
      link: "https://www.swiggy.com/city/meerut/sardar-g-malai-chaap-junction-vardhman-fortune-plaza-mohkam-pur-rest459235",
      type: "WEBLINK",
    },
  },
];
const Card = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    resData.info;
  return (
    <div className="card">
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{avgRating} STAR</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {cardList.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
