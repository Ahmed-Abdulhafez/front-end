import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="h-115 bg-gradient-to-br from-slate-50 to-gray-100 py-8 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🔹 شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white overflow-hidden transition-all duration-500"
            >
              {/* 🔹 محتوى الكارت */}
              <div className="flex flex-col h-full">
                
                {/* 🔹 صورة المنتج */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 aspect-square">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* 🔹 علامة الزاوية */}
                  <div className="absolute top-4 right-4 w-12 h-6 bg-slate-400/50 rounded-full"></div>
                </div>

                {/* 🔹 معلومات المنتج */}
                <div className="flex-1 p-6 space-y-4">
                  
                 

                  {/* 🔹 التقييم */}
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <div key={starIndex} className="w-4 h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded"></div>
                      ))}
                    </div>
                    <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-8"></div>
                  </div>

                  {/* 🔹 السعر */}
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="h-6 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-16"></div>
                    <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-12"></div>
                  </div>

                 
                </div>
              </div>
            </div>
          ))}
        </div>




        
      </div>
    </div>
  );
};

export default ProductSkeleton;