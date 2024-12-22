import React from "react";

const returnpolicy = () => {
  return (
    <div className="w-full px-4 py-4 md:py-8">
      <img
        src="/images/heading-banner.jpg"
        alt="Banner"
        className="w-full rounded shadow-md"
      />

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Return Policy:</h3>
        <p className="text-justify text-sm md:text-base leading-relaxed md:leading-loose">
          আমরা সমস্ত অর্ডার কুরিয়ারের মাধ্যমে করে থাকি । <br />
          যদি কোন প্রোডাক্ট হারিয়ে যায় বা সম্পুর্ন নষ্ট হয়ে যায় তাহলে
          প্রোডাক্টের সম্পূর্ন মূল্য ফেরত দেয়া হবে । <br />
          আমের ক্ষেত্রে যত কেজি আম নষ্ট হয়ে যাবে তার মূল্য ফেরত দেয়া হবে ।{" "}
          <br />
          .নিশ্চিন্তে অর্ডার করতে পরবেন। কোন কারনে পন্য নষ্ট বা ক্ষতি হলে আমাদের
          কে জানাবেন আমরা সাধ্যে মত ক্ষতিপূরন করবো।
        </p>
      </div>
    </div>
  );
};

export default returnpolicy;
