export function Section_2() {
  return (
    <div id="menu" className="py-24 bg-[#f4e4bc] text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl text-[#8b4513] mb-12 font-bold text-center">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hot Beverages */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition cursor-pointer">
            <h3 className="text-2xl text-[#8b4513] pb-2 border-b-2 border-[#d4af37] mb-4">
              Hot Beverages
            </h3>

            <div className="space-y-4 text-left">
              {/* Espresso */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Espresso</h4>
                  <p className="text-gray-600 text-sm">
                    Rich and bold single shot
                  </p>
                </div>
                <span className="text-[#d4af37] font-bold">$2.50</span>
              </div>

              {/* Cappuccino */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Cappuccino</h4>
                  <p className="text-gray-600 text-sm">
                    Espresso with steamed milk foam
                  </p>
                </div>
                <span className="text-[#d4af37] font-bold">$4.25</span>
              </div>

              {/* Latte */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Latte</h4>
                  <p className="text-gray-600 text-sm">
                    Smooth espresso with steamed milk
                  </p>
                </div>
                <span className="text-[#d4af37] font-bold">$4.75</span>
              </div>
            </div>
          </div>

          {/* Cold Beverages */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition cursor-pointer">
            <h3 className="text-2xl text-[#8b4513] pb-2 border-b-2 border-[#d4af37] mb-4">
              Cold Beverages
            </h3>

            <div className="space-y-4 text-left">
              {/* Iced Coffee */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Iced Coffee</h4>
                  <p className="text-gray-600 text-sm">Cold brew over ice</p>
                </div>
                <span className="text-[#d4af37] font-bold">$3.50</span>
              </div>

              {/* Frappe */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Frappé</h4>
                  <p className="text-gray-600 text-sm">
                    Blended iced coffee drink
                  </p>
                </div>
                <span className="text-[#d4af37] font-bold">$5.25</span>
              </div>

              {/* Cold Brew */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Cold Brew</h4>
                  <p className="text-gray-600 text-sm">
                    Smooth, less acidic coffee
                  </p>
                </div>
                <span className="text-[#d4af37] font-bold">$4.00</span>
              </div>
            </div>
          </div>

          {/* Pastries */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition cursor-pointer">
            <h3 className="text-2xl text-[#8b4513] pb-2 border-b-2 border-[#d4af37] mb-4">
              Pastries
            </h3>

            <div className="space-y-4 text-left">
              {/* Croissant */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Croissant</h4>
                  <p className="text-gray-600 text-sm">Buttery, flaky pastry</p>
                </div>
                <span className="text-[#d4af37] font-bold">$3.00</span>
              </div>

              {/* Blueberry Muffin */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">Blueberry Muffin</h4>
                  <p className="text-gray-600 text-sm">
                    Fresh baked with real blueberries
                  </p>
                </div>
                <span className="text-[#d4af37] font-bold">$2.75</span>
              </div>

              {/* Chocolate Chip Cookie */}
              <div className="flex justify-between border-b pb-2 hover:bg-gray-100 p-2 rounded transition">
                <div>
                  <h4 className="font-semibold text-lg">
                    Chocolate Chip Cookie
                  </h4>
                  <p className="text-gray-600 text-sm">Warm and gooey</p>
                </div>
                <span className="text-[#d4af37] font-bold">$2.25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
