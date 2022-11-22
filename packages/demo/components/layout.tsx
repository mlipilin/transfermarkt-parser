import { ReactNode } from 'react'

// Components
import Page from 'components/Page'
import Title from 'components/Title'

// Containers
import Menu from 'containers/Menu'

export type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Page.Page>
      <Page.Container>
        <Title />
        <Menu />
        <Page.Main>{children}</Page.Main>
      </Page.Container>
    </Page.Page>
  )
}
