'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CheckCircle } from 'lucide-react';
function Homepage() {
  const slides = [
    'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
    'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png',
    'https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg'
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
            <div className="text-sm text-gray-700 space-y-3">
              {/* কোর্সটি করছেন */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                  alt="Course Participants"
                  className="w-5 h-5"
                />
                <p>কোর্সটি করছেন ৩৯১৯৫ জন</p>
              </div>

              {/* সময় লাগবে */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                  alt="Duration"
                  className="w-5 h-5"
                />
                <p>সময় লাগবে ৫০ ঘণ্টা</p>
              </div>

              {/* ভিডিও সংখ্যা */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
                  alt="Videos"
                  className="w-5 h-5"
                />
                <p>৫৪টি ভিডিও</p>
              </div>

              {/* মডিউল ও মক টেস্ট */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                  alt="Mock Test"
                  className="w-5 h-5"
                />
                <p>১৩টি মডিউল এবং ১০টি লিসেনিং মক টেস্ট</p>
              </div>

              {/* লেকচার শিট */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
                  alt="Lecture Sheets"
                  className="w-5 h-5"
                />
                <p>৩৮টি লেকচার শিট</p>
              </div>

              {/* ভিডিও লেকচার */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
                  alt="Video Lectures"
                  className="w-5 h-5"
                />
                <p>২৫টি ভিডিও লেকচার</p>
              </div>

              {/* হার্ডকপি বই */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                  alt="Hardcopy Book"
                  className="w-5 h-5"
                />
                <p>১টি ফ্রি হার্ডকপি বই</p>
              </div>

              {/* ফেসবুক গ্রুপ */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                  alt="Facebook Support Group"
                  className="w-5 h-5"
                />
                <p>ফেসবুক সাপোর্ট গ্রুপ</p>
              </div>

              {/* কোর্সের মেয়াদ */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                  alt="Lifetime Access"
                  className="w-5 h-5"
                />
                <p>কোর্সের মেয়াদ আজীবন</p>
              </div>
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





      {/* 3rd step  কোর্স এক্সক্লুসিভ ফিচার*/}



      <div className="max-w-7xl mx-auto px-4 py-6 lg:flex gap-6">
        {/* ---------- LEFT SIDE ---------- */}
        {/* Left Side: What You’ll Learn */}
        <div className="lg:w-2/3 space-y-8 bg-white">
          <div className="bg-base-100 border rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-gray-800">কোর্সটি করে যা শিখবেন</h2>

            <ul className="space-y-3 text-gray-800 text-[15px] leading-relaxed">
              {[
                "IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি",
                "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
                "IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি",
                "সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা",
                "IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল",
                "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg mt-1">✔️</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* ---------- RIGHT SIDE (your uploaded card) ---------- */}
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky top-6 bg-white border shadow-lg rounded-xl p-6 space-y-4">
            {/* price + discount */}
            <div className="text-center space-y-1">
              <p className="text-3xl font-bold text-green-600">৳3850</p>
              <p className="line-through text-gray-500">৳5000</p>
              <span className="bg-red-100 text-red-600 font-semibold text-xs px-2 py-1 rounded-full">
                ১১৫০ টাকা ছাড়
              </span>
            </div>

            {/* buy button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-semibold">
              কোর্সটি কিনুন
            </button>

            {/* what’s included */}
            <div className="text-sm text-gray-700 space-y-3">
              {[
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png',
                  text: 'কোর্সটি করছেন ৩৯১৯৫ জন',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png',
                  text: 'সময় লাগবে ৫০ ঘণ্টা',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png',
                  text: '৫৪টি ভিডিও',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png',
                  text: '১৩টি মডিউল এবং ১০টি লিসেনিং মক টেস্ট',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png',
                  text: '৩৮টি লেকচার শিট',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png',
                  text: '২৫টি ভিডিও লেকচার',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png',
                  text: '১টি ফ্রি হার্ডকপি বই',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png',
                  text: 'ফেসবুক সাপোর্ট গ্রুপ',
                },
                {
                  icon:
                    'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png',
                  text: 'কোর্সের মেয়াদ আজীবন',
                },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={icon} alt="" className="w-5 h-5" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>






      {/*  */}






      <div className="max-w-7xl mx-auto p-4 lg:flex gap-6">
        {/* Left section */}

        <div className="lg:w-[66%] bg-base-100 border bg-white border-gray-200 rounded-xl p-4 space-y-6">
          {/* ভিডিও লেকচার */}
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Text */}
            <div className="flex-1 space-y-2">
              <h2 className="text-[16px] font-semibold text-gray-800">ভিডিও লেকচার</h2>
              <ul className="space-y-1 text-[14.5px] text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> IELTS Academic ও General Training নিয়ে আলোচনা
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> Reading, Writing, Listening ও Speaking এর Overview & Format
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> ভিডিওর সাথে প্র্যাকটিসের সুযোগ
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="lg:w-56 w-full">
              <img
                src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                alt="50+ Lectures"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Divider between sections */}
          <div className="divider my-0"></div>

          {/* Mock Tests */}
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Text */}
            <div className="flex-1 space-y-2">
              <h2 className="text-[16px] font-semibold text-gray-800">Reading ও Listening Mock Tests</h2>
              <ul className="space-y-1 text-[14.5px] text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> 10 Reading & 10 Listening Mock Tests
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> উত্তর সাবমিট করার সাথেই রেজাল্ট
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span> যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="lg:w-56 w-full">
              <img
                src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png"
                alt="Mock Tests"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>



        {/* Right Sticky Box */}
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky top-6 bg-white border shadow-lg rounded-xl p-6 space-y-4">
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
            <div className="text-sm text-gray-700 space-y-3">
              {/* কোর্সটি করছেন */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                  alt="Course Participants"
                  className="w-5 h-5"
                />
                <p>কোর্সটি করছেন ৩৯১৯৫ জন</p>
              </div>

              {/* সময় লাগবে */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                  alt="Duration"
                  className="w-5 h-5"
                />
                <p>সময় লাগবে ৫০ ঘণ্টা</p>
              </div>

              {/* ভিডিও সংখ্যা */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
                  alt="Videos"
                  className="w-5 h-5"
                />
                <p>৫৪টি ভিডিও</p>
              </div>

              {/* মডিউল ও মক টেস্ট */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                  alt="Mock Test"
                  className="w-5 h-5"
                />
                <p>১৩টি মডিউল এবং ১০টি লিসেনিং মক টেস্ট</p>
              </div>

              {/* লেকচার শিট */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
                  alt="Lecture Sheets"
                  className="w-5 h-5"
                />
                <p>৩৮টি লেকচার শিট</p>
              </div>

              {/* ভিডিও লেকচার */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
                  alt="Video Lectures"
                  className="w-5 h-5"
                />
                <p>২৫টি ভিডিও লেকচার</p>
              </div>

              {/* হার্ডকপি বই */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                  alt="Hardcopy Book"
                  className="w-5 h-5"
                />
                <p>১টি ফ্রি হার্ডকপি বই</p>
              </div>

              {/* ফেসবুক গ্রুপ */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                  alt="Facebook Support Group"
                  className="w-5 h-5"
                />
                <p>ফেসবুক সাপোর্ট গ্রুপ</p>
              </div>

              {/* কোর্সের মেয়াদ */}
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                  alt="Lifetime Access"
                  className="w-5 h-5"
                />
                <p>কোর্সের মেয়াদ আজীবন</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

      );
}

export default Homepage;
