import React from 'react'

const MoreInfo = () => {
  return (
    <div className='w-full min-h-screen p-5 mt-25 space-y-6'>
      {/* Purpose */}
      <h1 className='p-4 text-center text-2xl font-semibold rounded-lg'>
        What is the purpose of this website? <br />
        यस वेबसाइटको उद्देश्य के हो?
      </h1>

      {/* For Customers */}
      <h2 className='font-bold'>For Customers - ग्राहकहरूका लागि</h2>
      <p>
        From this platform, users can book various services like home cleaning, plumbing, electrical work, and more. 
        This platform helps users easily find and book trusted service providers in their area, ending the hassle of searching for reliable service providers. <br /><br />
        यस प्लेटफर्मबाट ग्राहकहरूले विभिन्न सेवाहरू जस्तै घर सरसफाइ, प्लम्बिङ, इलेक्ट्रिकल काम, र अन्य सेवाहरू बुक गर्न सक्छन्। 
        यस प्लेटफर्मले प्रयोगकर्ताहरूलाई आफ्नो क्षेत्रमा भरपर्दो सेवा प्रदायक सजिलै भेट्न र बुक गर्न सहयोग गर्छ, 
        र भरपर्दो सेवा प्रदायक खोज्ने झन्झट अन्त्य गर्छ।
      </p>

      {/* For Service Providers */}
      <h2 className='font-bold'>For Service Providers - सेवा प्रदायकहरूको लागि</h2>
      <p>
        Service providers can create profiles, showcase their skills, and connect with potential customers. 
        This platform provides a convenient way for service providers to reach a wider audience and grow their business. <br /><br />
        सेवा प्रदायकहरूले प्रोफाइल सिर्जना गर्न, आफ्नो सीप देखाउन, र सम्भावित ग्राहकहरूसँग जडान हुन सक्छन्। 
        यस प्लेटफर्मले सेवा प्रदायकहरूलाई फराकिलो दर्शकसम्म पुग्ने र आफ्नो व्यवसाय बढाउने सुविधा प्रदान गर्छ।
      </p>

      {/* How to Use */}
      <h1 className="p-4 text-center font-bold text-2xl">
        How to use this website? <br />
        यस वेबसाइटलाई कसरी प्रयोग गर्ने?
      </h1>
      <p>
        To use this website, customers can sign up for an account, browse through available services, and book the desired service provider. 
        Service providers can create profiles, list their services, and manage their bookings through the platform. <br /><br />
        यो वेबसाइट प्रयोग गर्न, ग्राहकहरूले खाता सिर्जना गर्न सक्छन्, उपलब्ध सेवाहरू ब्राउज गर्न सक्छन्, 
        र आवश्यक सेवा प्रदायक बुक गर्न सक्छन्। सेवा प्रदायकहरूले प्रोफाइल बनाउन, सेवा सूचीबद्ध गर्न, 
        र आफ्नो बुकिङहरू व्यवस्थापन गर्न सक्छन्।
      </p>

      {/* Benefits */}
      <h1 className='p-5 text-2xl text-center font-bold'>
        Benefits of this website - यस वेबसाइटका फाइदा
      </h1>
      <ul className='list-disc pl-5'>
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
  )
}

export default MoreInfo
