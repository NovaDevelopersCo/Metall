import { StoreProvider } from '@/store'
import { FC, PropsWithChildren, ReactChildren } from 'react'

const AppProvider: FC<PropsWithChildren<Partial<ReactChildren>>> = ({
	children
}) => <StoreProvider>{children}</StoreProvider>

export default AppProvider
