"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

interface BreadcrumbItem {
    text: string;
    href: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [] }) => {
    const segments = useSelectedLayoutSegments();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>(items);

    useEffect(() => {
        const updatedBreadcrumbs = segments.map((segment, index) => ({
            text: segment.charAt(0).toUpperCase() + segment.slice(1),
            href: `/${segments.slice(0, index + 1).join('/')}`,
        }));
        setBreadcrumbs(updatedBreadcrumbs);
    }, [segments]);

    return (
        <nav className="text-sm" aria-label="Breadcrumb">
            <ol className="flex">
                {breadcrumbs.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <hr className="border-solid border border-gray-800 h-0 w-22 my-0 mx-4" />}
                        <Link href={item.href}>
                            <a
                                className={`text-base ${segments.some((segment) => segment === item.href.split('/').pop()) ? 'text-yellow-500' : 'text-gray-700'}`}
                                style={{ fontSize: '18px', color: segments.some((segment) => segment === item.href.split('/').pop()) ? '#FFC824' : '#0D0D0D' }}
                            >
                                {item.text}
                            </a>
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;