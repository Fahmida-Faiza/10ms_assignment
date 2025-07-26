import React from 'react';

const Course = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-6 lg:flex gap-6">
  {/* ---------- LEFT SIDE ---------- */}
  <div className="lg:w-2/3 space-y-6">
    {/* What You'll Learn */}
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

    {/* ভিডিও লেকচার */}
    <div className="bg-base-100 border rounded-xl p-6 shadow-sm flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-1 space-y-2">
        <h2 className="text-[16px] font-semibold text-gray-800">ভিডিও লেকচার</h2>
        <ul className="space-y-1 text-[14.5px] text-gray-800">
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> IELTS Academic ও General Training নিয়ে আলোচনা</li>
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> Reading, Writing, Listening ও Speaking এর Overview & Format</li>
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি</li>
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> ভিডিওর সাথে প্র্যাকটিসের সুযোগ</li>
        </ul>
      </div>
      <img
        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
        alt="Video"
        className="lg:w-56 w-full rounded-lg"
      />
    </div>

    {/* Mock Tests */}
    <div className="bg-base-100 border rounded-xl p-6 shadow-sm flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-1 space-y-2">
        <h2 className="text-[16px] font-semibold text-gray-800">Reading ও Listening Mock Tests</h2>
        <ul className="space-y-1 text-[14.5px] text-gray-800">
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> 10 Reading & 10 Listening Mock Tests</li>
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</li>
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> উত্তর সাবমিট করার সাথেই রেজাল্ট</li>
          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✔️</span> যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</li>
        </ul>
      </div>
      <img
        src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png"
        alt="Mock Test"
        className="lg:w-56 w-full rounded-lg"
      />
    </div>
  </div>

  {/* ---------- RIGHT SIDE ---------- */}
  <div className="lg:w-1/3 relative">
    <div className="lg:sticky top-6 bg-white border shadow-lg rounded-xl p-6 space-y-4">
      <div className="text-center space-y-1">
        <p className="text-3xl font-bold text-green-600">৳3850</p>
        <p className="line-through text-gray-500">৳5000</p>
        <span className="bg-red-100 text-red-600 font-semibold text-xs px-2 py-1 rounded-full">১১৫০ টাকা ছাড়</span>
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-semibold">কোর্সটি কিনুন</button>

      <div className="text-sm text-gray-700 space-y-3">
        {[
          ['course_participants.png', 'কোর্সটি করছেন ৩৯১৯৫ জন'],
          ['time.png', 'সময় লাগবে ৫০ ঘণ্টা'],
          ['video.png', '৫৪টি ভিডিও'],
          ['mock_test.png', '১৩টি মডিউল এবং ১০টি লিসেনিং মক টেস্ট'],
          ['cheatsheet-projectfile-exercisefile-sourcefile-resource.png', '৩৮টি লেকচার শিট'],
          ['video-lecture.png', '২৫টি ভিডিও লেকচার'],
          ['digital-book_work-book.png', '১টি ফ্রি হার্ডকপি বই'],
          ['facebook-community.png', 'ফেসবুক সাপোর্ট গ্রুপ'],
          ['time-limit.png', 'কোর্সের মেয়াদ আজীবন'],
        ].map(([icon, text], i) => (
          <div key={i} className="flex items-center gap-2">
            <img src={`https://cdn.10minuteschool.com/images/PDP/course-fact-icons/${icon}`} alt="" className="w-5 h-5" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Course;