import { App } from 'vue';

export default function withInstall(component) {
  return {
    install(app: App) {
      app.component(component.name, component);
    }
  };
  // component.install = (app: App) => {
  //   app.component(component.name, component);
  // };

  // return component;
}
