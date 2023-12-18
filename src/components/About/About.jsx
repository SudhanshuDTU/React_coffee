import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://img.freepik.com/premium-photo/happy-family-has-tein-cozy-cafe-winter-warmth_85574-14598.jpg"
              alt="image"
              className=" rounded-xl"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Coffee: where warmth meets aroma in every sip
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to Mr Coffee, where coffee isn't just a beverage; it's an
              experience. Immerse yourself in the rich aroma of freshly ground
              beans, meticulously brewed to perfection. Our cozy ambiance
              invites you to unwind, whether you're catching up with friends,
              diving into work, or simply seeking a moment of tranquility.
              Explore a menu curated with passion, featuring artisanal blends
              and delectable treats crafted to complement your coffee journey.
              At BrewMasters, we believe in more than just a cup – we believe in
              creating moments, one sip at a time. Join us and discover the
              artistry behind every pour
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
