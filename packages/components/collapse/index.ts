import { withInstall } from '@yh-ui/utils';
import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';

withInstall(Collapse);
withInstall(CollapseItem);

export { Collapse, CollapseItem as Item };

export * from './type';
