import { ReactNode } from 'react'

// Components
import Page from './Page'
import Title from './Title'

// Containers
import Menu from '../containers/Menu'

export type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Page.Page>
      <Page.Container>
        <Title />
        <Menu />
        <Page.Content>{children}</Page.Content>
      </Page.Container>
    </Page.Page>
  )
}
