import { Url } from 'next/dist/shared/lib/router/router';

import Link from 'next/link';

interface FormFooterProps {
  linkName?: string;
  message?: string;
  href: Url;
}

const FormFooter = ({ message, href, linkName }: FormFooterProps) => {
  return (
    <div className=' border-codeCraft-100 flex justify-center gap-2 rounded-md border-[1px] p-2'>
      <p>{message}</p>
      <Link href={href} className=' font-bold'>
        {linkName}
      </Link>
    </div>
  );
};

export default FormFooter;
