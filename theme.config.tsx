import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2d6a4f' }}>
      🌿 Tecnologia Takwara
    </span>
  ),
  project: {
    link: 'https://github.com/takwaratec/Mentoria_Tecnologia_Takwara',
  },
  docsRepositoryBase: 'https://github.com/takwaratec/Mentoria_Tecnologia_Takwara/tree/main/docs',
  footer: {
    component: () => <span>© {new Date().getFullYear()} Tecnologia Takwara</span>,
  },
}

export default config
