import Button from './button';
import { Collapse, CollapseItem } from './collapse';
import Icon from './icon';
import Tooltip from './tooltip';
import Dropdown from './dropdown';
import Message from './message';
import { createMessage, closeAll } from './message';
import { App } from 'vue';

const components = [Button, Collapse, CollapseItem, Icon, Tooltip, Dropdown, Message];

const install = (app: App) => {
  components.forEach((component) => component.install(app));
};

export default { install };

export {
  install,
  Button,
  Collapse,
  CollapseItem,
  Icon,
  Tooltip,
  Dropdown,
  Message,
  createMessage,
  closeAll
};
