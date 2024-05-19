import style from './NotFoundwid.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundwid = () => {
	return (
		<div className={style.main}>
			<div className={style.imgcon}>
				<Image
					src='/assets/image404.png'
					alt='404'
					width={560}
					height={313}
				/>
			</div>
			<div>
				<h3 className={style.slg404}>
					К сожалению, страница не найдена
				</h3>
			</div>
			<div className={style.btncon}>
				<Link href={'/'} className={style.btn404}>
					Вернутся на главную страницу
				</Link>
			</div>
		</div>
	)
}

export default NotFoundwid
