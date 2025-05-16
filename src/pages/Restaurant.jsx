import { useRef, useState, useEffect } from "react";

const menuData = {
  "Bubble Tea - Tea Base": [
    {
      id: 1,
      name: "Kottu Roti",
      price: "LKR 500",
      image: "https://limitlessspice.com/wp-content/uploads/2022/02/kottu-g734b601c4_1920.jpg",
    },
    {
      id: 2,
      name: "Fried Rice",
      price: "LKR 400",
      image: "https://cookingchew.com/wp-content/uploads/2023/03/Leftover-Fried-Rice-Recipes-min.jpg",
    },
    {
      id: 3,
      name: "Nasi Goreng",
      price: "LKR 600",
      image: "https://www.chilipeppermadness.com/wp-content/uploads/2020/11/Nasi-Goreng-Indonesian-Fried-Rice-Recipe1-500x500.jpg",
    },
    {
      id: 4,
      name: "Biryani",
      price: "LKR 750",
      image: "https://www.captionsbyte.com/wp-content/uploads/2023/12/Biryani-Captions-for-Instagram.webp",
    },
    {
      id: 5,
      name: "Steamed Rice",
      price: "LKR 300",
      image: "https://bl-i.thgim.com/public/todays-paper/tp-agri-biz-and-commodity/m46vwt/article65916024.ece/alternates/FREE_1200/India%E2%80%99s-steamed%2BG2DAA4A4R.3.jpg.jpg",
    },
    {
      id: 6,
      name: "Pulao Rice",
      price: "LKR 500",
      image: "https://i0.wp.com/thefoodsamaritan.com/wp-content/uploads/2016/05/IMG_1134.jpg?w=5108",
    },
    {
      id: 7,
      name: "Palak Rice",
      price: "LKR 550",
      image: "https://th.bing.com/th/id/OIP.jGfvX9B_fZ5ov7g5CA2paAAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "Lemon Rice",
      price: "LKR 400",
      image: "https://rakskitchen.net/wp-content/uploads/2012/12/lemon-rice-1.jpg",
    },
  ],
  "Bubble Tea - Milk Base": [
    {
      id: 9,
      name: "Chocolate Milkshake",
      price: "LKR 600",
      image: "https://breadsandsweets.com/wp-content/uploads/2022/07/chocolate-milkshake-blog-1-of-1.jpg",
    },
    {
      id: 10,
      name: "Vanilla Milkshake",
      price: "LKR 500",
      image: "https://cookingformysoul.com/wp-content/uploads/2019/07/classic-vanilla-milkshakes-min.jpg",
    },
    {
      id: 11,
      name: "Avocado Smoothie",
      price: "LKR 500",
      image: "https://recipes.net/wp-content/uploads/2023/05/keto-avocado-smoothie-recipe_1989aa748aa35fd424ff5b163f413a73.jpeg",
    },
    {
      id: 12,
      name: "Banana Juice",
      price: "LKR 400",
      image: "https://img6.arthub.ai/6506afa9-465d.webp",
    },
    {
      id: 13,
      name: "Strawberry Milkshake",
      price: "LKR 650",
      image: "https://celebratingsweets.com/wp-content/uploads/2021/05/Strawberry-Milkshake-5-720x1080.jpg",
    },
    {
      id: 14,
      name: "Mango Lassi",
      price: "LKR 550",
      image: "https://parimadretseptid.ee/wp-content/uploads/2023/09/mango-lassi-retsept.jpg",
    },
    {
      id: 15,
      name: "Peanut Butter Milkshake",
      price: "LKR 700",
      image: "https://www.almostsupermom.com/wp-content/uploads/2015/07/Peanut-Butter-Milkshake-4352.jpg",
    },
    {
      id: 16,
      name: "Matcha Latte",
      price: "LKR 750",
      image: "https://www.hungryhuy.com/wp-content/uploads/matcha-latte-vertical-680x1020.jpg",
    },
  ],
  "Ice Cream": [
    {
      id: 17,
      name: "Ice Cream",
      price: "LKR 250",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg",
    },
    {
      id: 18,
      name: "Milkshake",
      price: "LKR 450",
      image: "https://th.bing.com/th/id/OIP.PN2BxoPu1ItRnnsM9r9xXwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 19,
      name: "Lasagna",
      price: "LKR 850",
      image: "https://th.bing.com/th/id/OIP.aM-_C2SO7MjRpJbi282R4gHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 20,
      name: "Gulab Jamun",
      price: "LKR 300",
      image: "https://th.bing.com/th/id/OIP.povaUd1_FMyb0x0mjclU8gHaHY?rs=1&pid=ImgDetMain",
    },
    {
      id: 21,
      name: "Baklava",
      price: "LKR 500",
      image: "https://www.modernhoney.com/wp-content/uploads/2023/03/Baklava-8-crop-scaled.jpg",
    },
    {
      id: 22,
      name: "Cheesecake",
      price: "LKR 600",
      image: "https://th.bing.com/th/id/R.a994541cc0bc8d4258a61d83cdcce6bb?rik=lzw1Fmb8iTPJpQ&riu=http%3a%2f%2fwww.cookyourfood.org%2fwp-content%2fuploads%2f2013%2f05%2fStrawberry.jpg&ehk=Wjghfp7r92U%2fPbU%2fKiAsu69FFFMt74B3ZuoK%2ffcYCYU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 23,
      name: "Brownie",
      price: "LKR 400",
      image: "https://www.recipetineats.com/wp-content/uploads/2020/03/Brownies_0-SQ.jpg",
    },
    {
      id: 24,
      name: "Chocolate Lava Cake",
      price: "LKR 550",
      image: "https://th.bing.com/th/id/OIP.-2P0ncfi4i35dpkiNgyumAHaLI?rs=1&pid=ImgDetMain",
    },
  ],
  "Softdrinks": [
    {
      id: 25,
      name: "Samosa",
      price: "LKR 150",
      image: "https://bunkabab.com/wp-content/uploads/2023/08/Punjabi-Samosa-300x300-1.png",
    },
    {
      id: 26,
      name: "Spring Roll",
      price: "LKR 200",
      image: "https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/Vegetable-Spring-Rolls-2-1.jpg",
    },
    {
      id: 27,
      name: "Pakoras",
      price: "LKR 250",
      image: "https://th.bing.com/th/id/OIP.JvkKHkupSLmlqNQCI_aHDwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 28,
      name: "Onion Rings",
      price: "LKR 350",
      image: "https://th.bing.com/th/id/OIP.qNUmtZzDGDLqPfoGhGl7KgHaEK?rs=1&pid=ImgDetMain",
    },
  ],
  "Sweets": [
    {
      id: 29,
      name: "Lemonade",
      price: "LKR 200",
      image: "https://th.bing.com/th/id/OIP.WJcl6hHARzOK_cRNea5PWAHaKo?rs=1&pid=ImgDetMain",
    },
    {
      id: 30,
      name: "Fresh Lime Soda",
      price: "LKR 250",
      image: "https://thumbs.dreamstime.com/b/fresh-lime-soda-glass-drink-sliced-black-background-131421316.jpg",
    },
    {
      id: 31,
      name: "Iced Tea",
      price: "LKR 150",
      image: "https://th.bing.com/th/id/OIP.qa2REj6lRfmmuD4Tg_2wnQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 32,
      name: "Mango Juice",
      price: "LKR 350",
      image: "https://th.bing.com/th/id/OIP.XHEoHyNNoel330QgV5SRnAHaE8?rs=1&pid=ImgDetMain",
    },
  ],
  "Savouries": [
    {
      id: 33,
      name: "Tomato Soup",
      price: "LKR 300",
      image: "https://www.spoonforkbacon.com/wp-content/uploads/2021/09/tomato-soup-640x853.jpg",
    },
    {
      id: 34,
      name: "Minestrone Soup",
      price: "LKR 400",
      image: "https://familystylefood.com/wp-content/uploads/2012/01/minestrone-soup-familystylefood.jpg",
    },
    {
      id: 35,
      name: "Lentil Soup",
      price: "LKR 350",
      image: "https://www.cookingclassy.com/wp-content/uploads/2017/01/lentil-soup-5.jpg",
    },
    {
      id: 36,
      name: "Chicken Soup",
      price: "LKR 500",
      image: "https://th.bing.com/th/id/OIP.liz05ScTqQLiyvwe-R9MQAHaGM?rs=1&pid=ImgDetMain",
    },
    {
      id: 37,
      name: "Pumpkin Soup",
      price: "LKR 450",
      image: "https://th.bing.com/th/id/OIP.HD0b8yBuEgO-ZNrs_I7WjAHaJ4?rs=1&pid=ImgDetMain",
    },
    {
      id: 38,
      name: "Vegetable Soup",
      price: "LKR 400",
      image: "https://th.bing.com/th/id/OIP.OmS3ZZMfcoQso3VTQIDBIgHaLH?rs=1&pid=ImgDetMain",
    },
    {
      id: 39,
      name: "Hot and Sour Soup",
      price: "LKR 450",
      image: "https://dinnerthendessert.com/wp-content/uploads/2019/02/Hot-and-Sour-Soup.jpg",
    },
    {
      id: 40,
      name: "Mushroom Soup",
      price: "LKR 550",
      image: "https://th.bing.com/th/id/OIP.tNDDZgtb6hH97ns4t8MVPgHaI9?rs=1&pid=ImgDetMain",
    },
  ],
};


export default function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (selectedCategory && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 pt-10 pb-20">
      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dwf8ifbzs/image/upload/v1746528969/logo_on6g4q.png"
        alt="Liquati Bubble Tea Logo"
        className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto mt-10 mb-6"
      />

      {/* Category Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="bg-gradient-to-r from-[#e85aad] to-[#d3408f] text-white font-bold text-base sm:text-lg py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      {selectedCategory && (
        <div
          ref={menuRef}
          className="mt-10 grid grid-cols-2 gap-6 w-full max-w-7xl px-2 sm:px-4"
        >
          {menuData[selectedCategory].map((item) => (
            <div
              key={item.id}
              className="bg-[#f175aa] p-4 rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <h2 className="text-lg font-semibold mt-4 text-white">
                {item.name}
              </h2>
              <p className="text-white opacity-90">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}