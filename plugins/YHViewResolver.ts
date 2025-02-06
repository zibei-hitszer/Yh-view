import type { ComponentResolver } from 'unplugin-vue-components';
export interface YHVIEWResolverOptions {
  /**
   * 组件样式文件路径前缀
   * @default 'yh-ui/theme'
   */
  importStyle?: boolean | string;
}

export * from '../packages/utils/index';
export function YHVIEWResolver(options: YHVIEWResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Yh')) {
        // 组件名前缀，如 YhButton
        let partialName = name.slice(2);
        let dir = partialName.toLowerCase();
        let sideEffect;
        if (partialName === 'CollapseItem' || partialName === 'Collapse') {
          partialName += 'Comp';
          dir = 'collapse';
        } else {
          sideEffect = options.importStyle
            ? `yh-view/${partialName.charAt(0).toLowerCase() + partialName.slice(1)}/index.css`
            : undefined;
        }
        return {
          name: partialName,
          from: `yh-view/${dir}/index.js`,
          sideEffects: sideEffect
        };
      }
    }
  };
}
