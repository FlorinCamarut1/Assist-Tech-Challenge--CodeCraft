// ImplicationSection.tsx
import React from 'react';
import Image from 'next/image';

const ImplicationSection = () => {
  return (
    <div className="bg-white py-8 mb-20"> {/* Added mb-20 for margin-bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold text-[#061125]">Collaborate To Innovate</h2>
            <p className="text-sm font-semibold text-[#737373]">
              Now that you know us better, we invite you to join our community of innovative developers and enthusiastic teams. Discover opportunities, connect with professionals in your field, and start collaborating on projects that excite you. If you have any questions or need further information, do not hesitate to contact us; our contact details can be easily found in the footer.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end pt-8 mr-8">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplicationSection;
