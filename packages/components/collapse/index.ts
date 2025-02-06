import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';
import { withInstall } from '@yh-ui/utils';

import '@yh-ui/components/collapse/style';

const CollapseInstall = withInstall(Collapse);
const CollapseItemInstall = withInstall(CollapseItem);
export {
  CollapseInstall as Collapse,
  CollapseItemInstall as CollapseItem,
  Collapse as CollapseComp,
  CollapseItem as CollapseItemComp
};

export * from './type';
