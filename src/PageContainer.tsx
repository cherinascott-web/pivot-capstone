import { ReactNode } from 'react'

function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {children}
    </div>
  )
}

export default PageContainer