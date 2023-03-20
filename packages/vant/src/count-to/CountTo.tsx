import {
  ref,
  onMounted,
  defineComponent,
  type ExtractPropTypes,
  computed,
} from 'vue';

import {
  makeNumericProp,
  truthProp,
  createNamespace,
  makeStringProp,
  makeNumberProp,
} from '../utils';

import { formatNumber, easingFn } from './utils';

const [name, bem] = createNamespace('count-to');

export const countToProps = {
  autoplay: truthProp,
  useEasing: truthProp,
  separator: makeStringProp(''),
  startValue: makeNumericProp(0),
  currentValue: makeNumericProp(2000),
  decimals: makeNumberProp(0),
  duration: makeNumberProp(2000),
};

export type CountToProps = ExtractPropTypes<typeof countToProps>;

export default defineComponent({
  name,

  props: countToProps,

  emits: ['finish'],

  setup(props, { emit, slots }) {
    const displayValue = ref(props.startValue);
    const countId = ref();
    const lastTime = ref(0); // 上一次的时间
    const printVal = ref();
    const startTime = ref(); // 开始的时间

    const requestAnimationFrame = (callback: any) => {
      const currTime = new Date().getTime();
      // 为了使setTimteout的尽可能的接近每秒60帧的效果
      const timeToCall = Math.max(0, 16 - (currTime - lastTime.value));
      const id = setTimeout(() => {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime.value = currTime + timeToCall;
      return id;
    };

    const countDown = computed(() => props.startValue > props.currentValue);

    const count = (time: any) => {
      if (!startTime.value) startTime.value = time;
      const progress = time - startTime.value;
      if (props.useEasing) {
        if (countDown.value) {
          printVal.value =
            +props.startValue -
            easingFn(
              progress,
              0,
              +props.startValue - +props.currentValue,
              props.duration
            );
        } else {
          printVal.value = easingFn(
            progress,
            +props.startValue,
            +props.currentValue - +props.startValue,
            props.duration
          );
        }
      } else if (countDown.value) {
        printVal.value =
          +props.startValue -
          (+props.startValue - +props.currentValue) *
            (progress / props.duration);
      } else {
        printVal.value =
          +props.startValue +
          (+props.currentValue - +props.startValue) *
            (progress / props.duration);
      }
      if (countDown.value) {
        printVal.value =
          printVal.value < props.currentValue
            ? props.currentValue
            : printVal.value;
      } else {
        printVal.value =
          printVal.value > props.currentValue
            ? props.currentValue
            : printVal.value;
      }
      displayValue.value = formatNumber(
        printVal.value,
        props.separator,
        props.decimals
      );
      if (progress < props.duration) {
        countId.value = requestAnimationFrame(count);
      } else {
        emit('finish');
      }
    };
    const start = () => {
      startTime.value = null;
      countId.value = requestAnimationFrame(count);
    };
    onMounted(() => {
      start();
    });
    return () => (
      <span class={bem()}>
        {slots.default ? slots.default(displayValue.value) : displayValue.value}
      </span>
    );
  },
});
