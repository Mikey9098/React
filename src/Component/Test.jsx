// --- 1. Menu Data ---
// This array holds all the content for the menu.
const menuData = [
  {
    type: "Hot Beverages",
    items: [
      { name: "Espresso", desc: "Rich and bold single shot", price: "2.50" },
      {
        name: "Cappuccino",
        desc: "Espresso with steamed milk foam",
        price: "4.25",
      },
      {
        name: "Latte",
        desc: "Smooth espresso with steamed milk",
        price: "4.75",
      },
    ],
  },
  {
    type: "Cold Drinks",
    items: [
      { name: "Iced Coffee", desc: "Cold brew over ice", price: "3.50" },
      { name: "Frappé", desc: "Blended iced coffee drink", price: "5.25" },
      { name: "Cold Brew", desc: "Smooth, less acidic coffee", price: "4.00" },
    ],
  },
  {
    type: "Pastries",
    items: [
      { name: "Croissant", desc: "Buttery, flaky pastry", price: "3.00" },
      {
        name: "Blueberry Muffin",
        desc: "Fresh baked with real blueberries",
        price: "2.75",
      },
      { name: "Chocolate Chip Cookie", desc: "Warm and gooey", price: "2.25" },
    ],
  },
];

// --- 2. MenuItems Component (Smallest Unit: One Item) ---
// Renders a single menu item with its price and description.
function MenuItems({ price, name, desc }) {
  return (
    <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
      {/* Added '$' to the price for clarity */}
      <span className="text-[#d4af37] font-bold">${price}</span>
    </div>
  );
}

// --- 3. Menu Component (Category Container) ---
// Renders one entire category card and maps over its items.
function Menu({ type, items }) {
  return (
    // This is the individual card that takes up one column in the grid
    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition cursor-pointer">
      <h3 className="text-2xl text-[#8b4513] pb-2 border-b-2 border-[#d4af37] mb-4">
        {type}
      </h3>
      <div className="space-y-4 text-left">
        {/* Iterate over the items array passed as a prop */}
        {items.map((item) => (
          <MenuItems
            key={item.name} // Unique key is required when using map
            price={item.price}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

// --- 4. Test Component (The Main Page Section) ---
// Sets up the main layout and uses the data to render all Menu components.
export function Test() {
  return (
    <div id="menu" className="py-24 bg-[#f4e4bc] text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl text-[#8b4513] mb-12 font-bold text-center">
          Our Menu
        </h1>

        {/* This grid structure applies to ALL menu categories */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Iterate over the top-level menu data array */}
          {menuData.map((category) => (
            <Menu
              key={category.type}
              type={category.type}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
