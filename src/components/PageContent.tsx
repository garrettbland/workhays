import { ReactNode, FC } from 'react'

interface Props {
    children: ReactNode
}

export const PageContent: FC<Props> = ({ children }) => {
    return <article className="prose prose-indigo">{children}</article>
}
