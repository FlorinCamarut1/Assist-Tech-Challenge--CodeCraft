'use client';

import LoginForm from '@/components/auth/LoginForm';
import Image from 'next/image';
import React from 'react';

const LoginPage = () => {
  return (
    <div className='relative flex  h-screen w-screen items-center justify-center bg-codeCraft-900 bg-cover bg-no-repeat px-4 sm:bg-codeCraftBg'>
      <LoginForm className='w-full max-w-[400px] rounded-lg bg-white px-6 py-10 sm:max-w-[460px]' />
      <div className='hidden lg:block xl:w-[800px] 2xl:w-auto'>
        <Image
          className='h-auto w-auto'
          src='images/teamFinderText.svg'
          sizes='100%'
          width={1200}
          height={250}
          alt='TeamFinder text'
          priority
        />
      </div>
      <Image
        className=' absolute bottom-0 right-0 m-4 hidden h-auto w-auto lg:block'
        src='images/codeCraftLogo.svg'
        sizes='100%'
        width={130}
        height={50}
        alt='TeamFinder logo'
      />
    </div>
  );
};

export default LoginPage;
