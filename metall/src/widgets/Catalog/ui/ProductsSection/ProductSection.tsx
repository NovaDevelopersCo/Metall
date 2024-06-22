import LeftSideFilters from '../LeftSideFilters/LeftSideFilters'
import RightSideProducts from '../RightSideProducts/RightSideProducts'
import style from './ProductSection.module.scss'

const ProductSection = () => {
	return (
		<div className={style.Container}>
			<LeftSideFilters />
			<RightSideProducts />
		</div>
	)
}

export default ProductSection
