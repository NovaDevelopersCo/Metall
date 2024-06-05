import { CallModal, SubmitApplication } from '@/entities'
import Main from '@/widgets/Main/ui/Main'

export default function Home() {
	return (
		<>
			<Main />
			<CallModal />
			<SubmitApplication />
		</>
	)
}
