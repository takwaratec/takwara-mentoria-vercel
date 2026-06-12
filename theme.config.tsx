import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src="/images/takwara-logo.png" alt="Takwara" style={{ height: '2rem', width: 'auto' }} />
    </span>
  ),
  project: {
    link: 'https://github.com/takwaratec/Mentoria_Tecnologia_Takwara',
  },
  docsRepositoryBase: 'https://github.com/takwaratec/Mentoria_Tecnologia_Takwara/tree/main/docs',
  footer: {
    component: () => <span>© {new Date().getFullYear()} Tecnologia Takwara</span>,
  },
  head: (
    <>
      <link rel="stylesheet" href="/theme-custom.css" />
    </>
  ),
}

export default config
