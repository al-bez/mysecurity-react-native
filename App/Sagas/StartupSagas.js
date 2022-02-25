// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('App starting. Reactotron enabled.')
    console.tron.display({
      name: 'SECURITE ASSURANCE APP POWERED BY IGNITE 🔥'
    })
    console.tron.display({ name: 'Initializing...' })
  }
}
