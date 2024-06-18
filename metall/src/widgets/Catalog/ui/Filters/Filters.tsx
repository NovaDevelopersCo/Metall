import style from './Filters.module.scss'

const Filters = () => {
	return (
		<>
			<div className={style.FilterContainer}>
				<div className={style.LeftSide}>
					<div className={style.CirclesContainer}>
						<div className={style.Circle}></div>
						<div className={style.Circle}></div>
						<div className={style.Circle}></div>
						<div className={style.Circle}></div>
						<div className={style.Circle}></div>
					</div>
					<h2 className={style.TitleFilter}>Фильтры</h2>
				</div>
				<div className={style.RightSide}>
					<div className={style.Filters}>
						<button className={style.FilterButton}>
							Листы рифленые
						</button>
						<button className={style.FilterButton}>
							Листы оцинкованные
						</button>
						<button className={style.FilterButton}>
							Листы просечно - вытяжной
						</button>
						<button className={style.FilterButton}>
							Листы холоднокатаные
						</button>
						<button className={style.FilterButton}>
							Листы горячекатаные
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Filters
