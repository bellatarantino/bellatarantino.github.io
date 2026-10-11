// check for light/dark mode
const systemDarkModeQuery = matchMedia('(prefers-color-scheme: dark)')

document.addEventListener('alpine:init', () => {
  const { Alpine } = window

  Alpine.store('site', {
    chosenTheme: Alpine.$persist('').as('portfolio-theme'),
    systemPrefersDark: systemDarkModeQuery.matches,

    // check current theme
    get theme () {
      if (this.chosenTheme) return this.chosenTheme
      return this.systemPrefersDark ? 'dark' : 'light'
    },

    // switch theme
    toggleTheme () {
      this.chosenTheme = this.theme === 'dark' ? 'light' : 'dark'
    },

    init () {
      // check for system setting if changes
      systemDarkModeQuery.addEventListener('change', event => {
        this.systemPrefersDark = event.matches
      })

      // update
      Alpine.effect(() => {
        document.documentElement.dataset.theme = this.theme
      })
    }
  })
})
