const subscribe = (navigation, listeners) => {
  const listenersKeys = Object.keys(listeners)
  const listenersList = []
  listenersKeys.map(listener =>
    listenersList.push(navigation.addListener(listener, listeners[listener]))
  )
  return listenersList
}

const unsubscribe = listeners => listeners.map(listener => listener.remove())

export default {
  subscribe,
  unsubscribe
}
