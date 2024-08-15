// src/components/Testimonials

import React from "react";
import {UsersIcon } from "@heroicons/react/solid";
import { FaUniversity } from "react-icons/fa";
import { Education } from "../data";

export default function Educations() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Educations
        </h1>
        <div className="flex flex-wrap m-4">
          {Education.map((education,index) =>{
            const {id,name,quote,image,place}=education
            return (
              <div className="p-4 md:w-1/2 w-full" key={id}>
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-2xl">
                  <FaUniversity className="block w-14 text-yellow-400 mb-4" />
                  <p className="leading-relaxed mb-6">{quote}</p>
                  <div className="inline-flex items-center ">
                    <img
                      alt="education"
                      src={image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center "
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
                        {name}
                      </span>
                      <span className="text-gray-500 text-sm uppercase">
                        {place}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}