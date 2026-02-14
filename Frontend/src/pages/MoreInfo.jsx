import React from "react";

const MoreInfo = () => {
  return (
    <div className="w-full min-h-screen p-5 bg-gray-50 space-y-10">
      
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mt-20">
        About This Website <br />
        <span className="text-lg text-gray-700 font-normal">यस वेबसाइटको बारेमा</span>
      </h1>

      {/* Purpose Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-500">
          Purpose - उद्देश्य
        </h2>
        <p className="text-gray-700 leading-relaxed">
          From this platform, users can book various services like home cleaning, plumbing, electrical work, and more. 
          This platform helps users easily find and book trusted service providers in their area, ending the hassle of searching for reliable service providers. <br /><br />
          यस प्लेटफर्मबाट ग्राहकहरूले विभिन्न सेवाहरू जस्तै घर सरसफाइ, प्लम्बिङ, इलेक्ट्रिकल काम, र अन्य सेवाहरू बुक गर्न सक्छन्। 
          यस प्लेटफर्मले प्रयोगकर्ताहरूलाई आफ्नो क्षेत्रमा भरपर्दो सेवा प्रदायक सजिलै भेट्न र बुक गर्न सहयोग गर्छ, र भरपर्दो सेवा प्रदायक खोज्ने झन्झट अन्त्य गर्छ।
        </p>
      </div>

      {/* For Customers */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-500">For Customers - ग्राहकहरूका लागि</h2>
        <p className="text-gray-700 leading-relaxed">
          Customers can easily browse and book trusted service providers in their area. <br /><br />
          ग्राहकहरूले आफ्नो क्षेत्रमा भरपर्दो सेवा प्रदायक सजिलै ब्राउज र बुक गर्न सक्छन्।
        </p>
      </div>

      {/* For Service Providers */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-500">For Service Providers - सेवा प्रदायकहरूको लागि</h2>
        <p className="text-gray-700 leading-relaxed">
          Service providers can create profiles, showcase skills, and connect with potential customers. <br /><br />
          सेवा प्रदायकहरूले प्रोफाइल सिर्जना गर्न, सीप देखाउन, र सम्भावित ग्राहकहरूसँग जडान हुन सक्छन्।
        </p>
      </div>

      {/* How to Use */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-500">
          How to Use - यस वेबसाइटलाई कसरी प्रयोग गर्ने?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Customers can sign up, browse available services, and book providers. Service providers can create profiles, list services, and manage bookings. <br /><br />
          ग्राहकहरूले खाता सिर्जना गर्न, सेवाहरू ब्राउज गर्न, र आवश्यक सेवा प्रदायक बुक गर्न सक्छन्। सेवा प्रदायकहरूले प्रोफाइल बनाउन, सेवा सूचीबद्ध गर्न, र बुकिङ व्यवस्थापन गर्न सक्छन्।
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-500">
          Benefits - फाइदा
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Easy access to a wide range of services <br />
            विविध सेवाहरूमा सजिलो पहुँच
          </li>
          <li>
            Time-saving and convenient booking process <br />
            समय बचत गर्ने र सजिलो बुकिङ प्रक्रिया
          </li>
          <li>
            Verified and reliable service providers <br />
            सत्यापित र भरपर्दो सेवा प्रदायकहरू
          </li>
          <li>
            Transparent pricing and service details <br />
            पारदर्शी मूल्य र सेवा विवरण
          </li>
        </ul>
      </div>

    </div>
  );
};

export default MoreInfo;
