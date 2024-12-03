import { defineStore } from 'pinia';
export const useLinksStore = defineStore('links', {
    state: () => ({
        links: JSON.parse(localStorage.getItem('links') || '[]'),
    }),
    actions: {
        async fetchLinks(gistUrl) {
            if (this.links.length > 0) {
                return this.links;
            }
            try {
                const response = await fetch(gistUrl);
                this.links = await response.json();
                localStorage.setItem('links', JSON.stringify(this.links));
            }
            catch (error) {
                console.error('Erro ao carregar os links:', error);
            }
            return this.links;
        },
    },
});
