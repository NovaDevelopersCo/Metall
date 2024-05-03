import { FC, PropsWithChildren, ReactChildren } from 'react'

import { StoreProvider } from '@/store'

const AppProvider: FC<PropsWithChildren<Partial<ReactChildren>>> = ({
	children
}) => <StoreProvider>{children}</StoreProvider>

export default AppProvider