import Slider from './Slider.vue'
import PopUp from './PopUp.vue'

const components = {
  "PopUp": PopUp,
  "ImagesSlider": Slider
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
      this.appendComponent(componentKey, component);
    }
  },

  install(app) {
    this.app = app;
    this.initComponents();
  }
}


