import { defineComponent } from 'vue';

const vnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.vNode;
  }
});

export default vnode;
