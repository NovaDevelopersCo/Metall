import style from './Catalog.module.scss'
import Filters from './Filters/Filters'
import Breadcrumbs from '@/entities/BreadCrumbs/ui/Breadcrumbs'

const Catalog: React.FC = () => {
	return (
		<>
			<div className={style.CatalogContainer}>
				<Breadcrumbs
					breadcrumbs={[
						{ text: 'Главная', href: '/' },
						{
							text: 'Каталог товаров',
							href: '/catalog',
							isLink: false
						}
					]}
				/>
				<h1 className={style.Title}>Листы</h1>
				<Filters />
			</div>
		</>
	)
}
export default Catalog