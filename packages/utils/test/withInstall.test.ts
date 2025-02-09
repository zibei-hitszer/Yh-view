import { describe, expect, test } from 'vitest';
import withInstall from '../withInstall';
import Button from '../../components/button/Button.vue';
import { createApp } from 'vue';
import { install } from '../../components';

describe('withInstall', () => {
  test('withInstall', () => {
    const res = withInstall(Button);
    expect(res.install).toBeDefined();
  });

  test('installAll', () => {
    const app = createApp({});
    const componentNames = [
      'YhButton',
      'YhCollapse',
      'YhCollapseItem',
      'YhIcon',
      'YhTooltip',
      'YhDropdown',
      'YhMessage'
    ];
    const components = app._context.components;
    app.use(install);
    for (const name of componentNames) {
      expect(components).toHaveProperty(name);
    }
  });
});
