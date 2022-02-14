

const components = {
  "popUp": () => import('./PopUp.vue'),
  "Slider": () => import('./Slider.vue')
}


export default {
  app: null,

  appendComponent(componentKey, component)
  {
    this.app.component(componentKey, component);
  },

  initComponents()
  {
    for (let componentKey in components)
    {
      let component = components[componentKey];
      this.appendComponent(component);
    }
  },

  install(app) {
    this.app = app;
    this.initComponents();
  }
}


