// import { MetaInfo } from "@/json/metaInfo";
import { MetaInfo } from '@/json/metaInfo'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { MetallBlock } from '@/widgets'
import Contacts from '@/widgets/ui/Contacts/Contacts'
import Feedback from '@/widgets/ui/Feedback/Feedback'
import MapLocation from '@/widgets/ui/MapLocation/MapLocation'

// const breadcrumbsData: BreadcrumbItem[] = [
//   { text: 'Главная', href: '/' },
//   { text: 'Контакты', href: '/contacts' },
// ];

export default function Home() {
	return (
		<>
			<MetallBlock metallInfo={MetaInfo} />
		</>
	)
}
