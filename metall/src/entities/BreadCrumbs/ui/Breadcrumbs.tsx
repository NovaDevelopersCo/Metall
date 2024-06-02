'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
    text: string;
    href: string;
    isLink?: boolean;
}

interface BreadcrumbsProps {
    breadcrumbs?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => {
    const pathname = usePathname();

    return (
        <nav className="text-sm" aria-label="Breadcrumb">
            <ol>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    {breadcrumbs.map((item, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <span className="h-0 w-22 my-0 mx-4" />
                            )}
                            {item.isLink !== false ? (
                                <Link href={item.href}>
                                    <span className={`text-base ${pathname && pathname.includes(item.href) ? 'text-yellow-500' : 'text-gray-700'}`} style={{ fontSize: '18px', fontWeight: 400, lineHeight: '21px', letterSpacing: '-1.5%', textAlign: 'left', color: pathname && pathname.includes(item.href) ? '#0D0D0D' : '#FFC824' }}>
                                        {item.text}
                                    </span>
                                </Link>
                            ) : (
                                <span className="text-base text-gray-700" style={{ fontSize: '18px', fontWeight: 400, lineHeight: '21px', letterSpacing: '-1.5%', textAlign: 'left', color: '#FFC824' }}>
                                    {item.text}
                                </span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <hr style={{ border: "1px solid #000", height: "1px", width: "22px", margin: "0 10px 0 10px" }} />
                            )}
                        </React.Fragment>
                    ))}

                </li>
            </ol >
        </nav >
    );
};

export default Breadcrumbs;