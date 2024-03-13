import React from 'react';
import Image from 'next/image';

const ValuesSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold text-[#061125]">Values</h2>
            <p className="text-sm font-semibold text-[#737373]">
              At Team Finder, our core values underpin every decision and interaction. They guide us in our mission to bring together the most talented programmers with teams that need them.
              <br /><br />
              <span className="font-bold text-[#061125]">Innovation:</span> We believe in the power of innovation to transcend traditional limits of programming and collaboration. We encourage our users to explore new technologies and working methods.
              <br /><br />
              <span className="font-bold text-[#061125]">Integrity:</span> Transparency and honesty are crucial in all our actions. We build trust through sincere and open communication with our community members.
              <br /><br />
              <span className="font-bold text-[#061125]">Diversity:</span> The value added by diverse perspectives and experiences is immeasurable. We support an inclusive environment, where every voice can be heard and appreciated.
              <br /><br />
              <span className="font-bold text-[#061125]">Collaboration:</span> We believe that the greatest achievements come from working together. We facilitate collaborations that overcome geographical and cultural barriers, pushing the limits of what can be achieved together.
              <br /><br />
              These values inspire us to provide a platform where talent meets opportunity, thus creating an environment where every project becomes a chance to excel.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end pt-8 mr-8">
            <Image src="/images/bus-img/Salute.png" alt="Values" width={400} height={300} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
