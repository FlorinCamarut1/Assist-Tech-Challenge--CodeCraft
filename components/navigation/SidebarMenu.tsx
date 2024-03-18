import { sidebarNavigationData } from '@/data/sidebarNavigationData';
import { useState } from 'react';

import SidebarNavItem from './SidebarNavItem';

const SidebarMenu = () => {
  const [navData, setNavData] = useState(sidebarNavigationData);
  return (
    <div className=' overflow-hidden rounded-sm border-[1px] border-codeCraft-100 bg-white shadow-md'>
      <h2 className=' border-b-[1px] border-codeCraft-100 px-5 py-6 text-lg font-semibold text-codeCraft-500'>
        My organization
      </h2>
      {navData.map((item) => (
        <SidebarNavItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default SidebarMenu;
