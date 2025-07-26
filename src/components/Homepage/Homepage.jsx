'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Homepage() {
  const slides = [
    'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
    'https://cdn.10minuteschool.com/images/courses/thumbnails/ui-ielts_1660026466946.webp',
    'https://cdn.10minuteschool.com/images/thumbnails/IELTS_Mobile_Thumbnail_1669903491109.webp',
  ];

  return (
    <div className=" text-white min-h-screen">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-8">
        
        {/* Left: Title and Description */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            IELTS Course by Munzereen Shahid
          </h1>
          <div className="flex items-center space-x-2 text-yellow-400 font-semibold text-sm">
            <span>★★★★★</span>
            <span className="text-white">
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই!
            দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে
            আজই জয়েন করুন আমাদের IELTS Course-এ।
          </p>

        
        </div>

        {/* Right: Course Preview + Price (Sticky) */}
        <div className="sticky top-4 self-start">
          <div className="bg-white text-black rounded-xl p-4 shadow-lg space-y-4">
            {/* Carousel */}
            <div className="relative w-full h-44 rounded overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full h-full"
              >
                {slides.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-44">
                      <img
                        src={img}
                        alt={`Slide ${idx}`}
                        className="w-full h-full object-cover rounded"
                      />
                      <button className="absolute inset-0 m-auto w-12 h-12 bg-white bg-opacity-70 rounded-full shadow-md flex items-center justify-center text-xl text-green-600 hover:scale-110 transition-transform duration-200">
                        ▶
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Price Info */}
            <div className="text-center space-y-1">
              <p className="text-3xl font-bold text-green-600">৳3850</p>
              <p className="line-through text-gray-500">৳5000</p>
              <span className="bg-red-100 text-red-600 font-semibold text-xs px-2 py-1 rounded-full">
                ১১৫০ টাকা ছাড়
              </span>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-semibold">
              কোর্সটি কিনুন
            </button>

            {/* What’s included */}
            <div className="text-sm text-gray-700 space-y-2">
              <p>👥 কোর্সটি করছেন ৩৯১৯৫ জন</p>
              <p>⏱️ সময় লাগবে ৫০ ঘণ্টা</p>
              <p>🎥 ৫৪টি ভিডিও</p>
              <p>📝 ১৩টি মডিউল এবং ১০টি লিসেনিং মক টেস্ট</p>
            </div>
          </div>
        </div>
      </div>

 



<div className='mx-auto max-w-7xl'>
    {/* Instructor Box */}
          <div className="bg-white text-black rounded-xl p-4 flex items-center gap-4 shadow-md max-w-md">
            <img
              src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
              alt="Instructor"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="font-bold">Munzereen Shahid</h3>
              <p className="text-sm">
                MSc (English), University of Oxford (UK)<br />
                BA, MA (English), University of Dhaka<br />
                IELTS: 8.5
              </p>
            </div>
          </div>
</div>


      
    </div>





  );
}

export default Homepage;
