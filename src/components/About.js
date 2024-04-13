import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-0w4QMU7rXyWV12pzyeXQW3pdi2XVAI-og&usqp=CAU" alt="About Us" className="rounded-lg shadow-lg w-full aspect-video" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">About Master Chief</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Master Chief, where culinary excellence meets passion! We are committed to delivering the finest dining experience to our customers, crafted with love, expertise, and creativity.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple vision: to redefine the art of cooking. From our kitchen to your table, every dish we create is a masterpiece, meticulously prepared by our team of skilled chefs who pour their hearts into every recipe.
              </p>
              <p className="text-gray-700 mb-4">
                At Master Chief, we believe in the power of taste to evoke emotions, create memories, and bring people together. Whether you're a food enthusiast, a casual diner, or someone seeking a gastronomic adventure, we invite you to savor the flavors of excellence with us.
              </p>
              <p className="text-gray-700 mb-4">
                Join us on this culinary voyage, where every bite tells a story, and every meal is a celebration of flavors, textures, and aromas. Experience the magic of Master Chief - where passion meets perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
