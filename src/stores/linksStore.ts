import { defineStore } from 'pinia'

export const useLinksStore = defineStore('links', {
  state: () => ({
    links: JSON.parse(localStorage.getItem('links') || '[]') as Array<{
      iconClass: string
      link: string
      label: string
    }>,
  }),
  actions: {
    async fetchLinks(gistUrl: string) {
      if (this.links.length > 0) {
        return this.links
      }

      try {
        const response = await fetch(gistUrl)
        this.links = await response.json()
        localStorage.setItem('links', JSON.stringify(this.links))
      } catch (error) {
        console.error('Erro ao carregar os links:', error)
      }

      return this.links
    },
  },
})
