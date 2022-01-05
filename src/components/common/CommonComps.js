

const components = {
  "popUp": () => import('./PopUp.vue')
}


export default {
  install(app) {
    for (var c in components)
    {
      app.component(c, components[c]);
    }
    
  }
}


