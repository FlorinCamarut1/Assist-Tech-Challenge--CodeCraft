'use client';

import { useSearchParams } from 'next/navigation';

import RegisterAdminForm from '@/components/auth/RegisterAdminForm';
import Image from 'next/image';
import React from 'react';
import RegisterEmployeeForm from '@/components/auth/RegisterEmployeeForm';

const RegisterPage = () => {
  const params = useSearchParams();
  const employeeRegister = params.get('invite');

  return (
    <div className='relative flex  h-screen w-screen items-center justify-center bg-codeCraft-900 bg-cover bg-no-repeat px-4 sm:bg-codeCraftBg'>
      {employeeRegister !== null ? (
        <RegisterEmployeeForm className='w-full max-w-[400px] rounded-lg bg-white px-6 py-10 sm:max-w-[460px]' />
      ) : (
        <RegisterAdminForm className='w-full max-w-[400px] rounded-lg bg-white px-6 py-10 sm:max-w-[460px]' />
      )}
      <div className='hidden lg:block xl:w-[800px] 2xl:w-auto'>
        <Image
          className=' h-auto w-auto'
          src='images/teamFinderText.svg'
          width={1200}
          height={200}
          alt='TeamFinder text'
          sizes='100%'
          priority
        />
      </div>
      <Image
        sizes='100%'
        className=' absolute bottom-0 right-0 m-4 hidden h-auto w-auto lg:block'
        src='images/codeCraftLogo.svg'
        width={130}
        height={50}
        alt='TeamFinder logo'
      />
    </div>
  );
};

export default RegisterPage;
