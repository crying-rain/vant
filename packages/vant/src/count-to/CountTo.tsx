import { ref, onMounted, defineComponent, type ExtractPropTypes } from 'vue';

import { makeNumericProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('count-to');

export const countToProps = {
  startVal: makeNumericProp(1000),
  endVal: makeNumericProp(0),
};

export type CountToProps = ExtractPropTypes<typeof countToProps>;

export default defineComponent({
  name,

  props: countToProps,

  emits: ['end'],

  setup(props, { emit }) {
    const displayValue = ref(props.startVal);

    const count = () => {
      emit('end');
    };

    onMounted(() => {
      console.log(displayValue.value, count);
    });

    return () => <span class={bem()}>{displayValue.value}</span>;
  },
});
