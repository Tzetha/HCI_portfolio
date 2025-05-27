import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay + Icon: only shows on hover */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 
                     flex items-center justify-center transition-opacity duration-500"
        >
          <Link
            href="/"
            className="h-14 w-14 mr-3 relative border-2 rounded-full border-[#ADB7BE] hover:border-white 
                       flex items-center justify-center group/link"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          <Link
            href="/"
            className="h-14 w-14 mr-2 relative border-2 rounded-full border-[#ADB7BE] hover:border-white 
                       flex items-center justify-center group/link"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Card text section */}
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
