import { useRef, useState, useEffect } from "react";

const menuData = {
  "Bubble Tea - Tea Base": [
    {
      id: 9,
      name: "Passion Fruit",
      price: "LKR 650",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747442910/Passion_Fruit_tvg28b.png",
    },
    {
      id: 10,
      name: "Mango",
      price: "LKR 650",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747442866/Mango_q1g1fd.jpg",
    },
    {
      id: 11,
      name: "Strawberry",
      price: "LKR 650",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747443850/Strawberry_s40swt.jpg",
    },
    {
      id: 12,
      name: "Honey & Lemon",
      price: "LKR 650",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747444023/Honey_Lemon_xxlbiz.png",
    },
  ],
  "Bubble Tea - Milk Base": [
    {
      id: 1,
      name: "KitKat Shake",
      price: "LKR 840",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439940/KitKat_Shake_ypnjb7.png",
    },
    {
      id: 2,
      name: "Ringo Shake",
      price: "LKR 840",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439931/Ringo_Shake_aqaypc.jpg",
    },
    {
      id: 3,
      name: "Twix Shake",
      price: "LKR 840",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439930/Twix_Shake_kxsplt.jpg",
    },
    {
      id: 4,
      name: "Choco Shake",
      price: "LKR 700",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439928/Choco_Shake_tkbyrs.jpg",
    },
    {
      id: 5,
      name: "Strawberry Shake",
      price: "LKR 790",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439931/Strawberry_Shake_il1wwl.jpg",
    },
    {
      id: 6,
      name: "Blue Berry Shake",
      price: "LKR 750",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439925/Blue_berry_Shake_zqebyn.jpg",
    },
    {
      id: 7,
      name: "Mango Shake",
      price: "LKR 750",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747439932/Mango_Shake_yrvnua.jpg",
    }
  ],
  "Ice Cream": [
    {
      id: 17,
      name: "Pistachio Gelato",
      price: "LKR 450",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747297322/Pistachio_Gelato_icvqo1.png",
    },
    {
      id: 18,
      name: "Choco Nog Gelato",
      price: "LKR 450",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747297322/Choco_Nog_Gelato_blgw5w.jpg",
    },
    {
      id: 19,
      name: "Blueberry Gelato",
      price: "LKR 450",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747297322/Blueberry_Gelato_ycxzk2.jpg",
    },
    {
      id: 20,
      name: "Passion fruit Gelato",
      price: "LKR 450",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747297322/Passion_fruit_Gelato_q6nwwk.png",
    },
    {
      id: 21,
      name: "Red Cookie Crunch Gelato",
      price: "LKR 450",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747297322/Red_Cookie_Crunch_Gelato_j9w3nc.jpg",
    },
    {
      id: 22,
      name: "Coconut Gelato",
      price: "LKR 450",
      image: "https://res.cloudinary.com/dy7vejd0i/image/upload/v1747297322/Coconut_Gelato_jeubme.jpg",
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