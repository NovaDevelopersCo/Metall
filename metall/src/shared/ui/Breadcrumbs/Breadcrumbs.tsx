'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const Breadcrumbs: React.FC<BreadcrumbsProps & { router: any }> = ({
	items,
	router
}) => {
	const [breadcrumbs, setBreadcrumbs] = useState(items)

	useEffect(() => {
		if (router && router.asPath) {
			const pathSegments = router.asPath
				.split('/')
				.filter(segment => segment !== '')
			const updatedBreadcrumbs = pathSegments.map((segment, index) => {
				return {
					text: segment.charAt(0).toUpperCase() + segment.slice(1),
					href: `/${pathSegments.slice(0, index + 1).join('/')}`
				}
			})
			setBreadcrumbs(updatedBreadcrumbs)
		}
	}, [router])

	return (
		<nav className='text-sm' aria-label='Breadcrumb'>
			<ol className='flex'>
				{breadcrumbs.map((item, index) => (
					<li key={index} className='flex items-center'>
						{index > 0 && (
							<hr className='border-solid border border-gray-800 h-0 w-22 my-0 mx-4' />
						)}
						<Link href={item.href}>
							<p
								className={`text-base ${router && router.asPath && router.asPath.includes(item.href) ? 'text-yellow-500' : 'text-gray-700'} `}
								style={{
									fontSize: '18px',
									color:
										router &&
										router.asPath &&
										router.asPath.includes(item.href)
											? '#FFC824'
											: '#0D0D0D'
								}}
							>
								{item.text}
							</p>
						</Link>
					</li>
				))}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
