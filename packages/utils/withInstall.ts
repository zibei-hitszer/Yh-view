import { App } from 'vue';

export default function withInstall(component) {
  component.install = (app: App) => {
    app.component(component.name, component);
  };
}
