// import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://cdn.pixabay.com/photo/2023/12/05/18/15/ai-generated-8432244_640.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React development thrives due to a passionate global community of developers. 
                      As an open-source JavaScript library, it offers flexibility with reusable components and an efficient developer experience. 
                      The community continuously shares resources, tools, and innovations, making React a popular choice for building dynamic, high-performance applications.
                      </p>
                      <p className="mt-4 text-gray-600">
                      React’s component-based architecture allows developers to build scalable, maintainable applications. 
                      Its large ecosystem, coupled with strong community support,enables seamless integration with various tools, enhancing development speed and productivity.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}