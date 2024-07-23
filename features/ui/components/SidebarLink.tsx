'use client';

import { cn } from '@/features/shadcn/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ComponentType } from 'react';

interface SidebarLinkProps {
  href: string;
  title: string;
  Icon: ComponentType<{ className?: string }>;
}

const SidebarLink = ({ href, title, Icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  const baseClass = 'relative flex justify-center rounded px-2 py-1.5';
  const linkClasses = pathname.startsWith(href)
    ? cn(baseClass, 'bg-blue-50 text-blue-700')
    : baseClass;

  return (
    <Link href={href} className={linkClasses}>
      <Icon></Icon>
      <span className="font-xs absolute left-full top-1/2 z-50 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
