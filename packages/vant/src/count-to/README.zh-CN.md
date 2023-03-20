# CountTo 数字滚动

### 介绍

用于需要滚动数字到某一个值的场景。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { CountTo } from 'vant';

const app = createApp();
app.use(CountTo);
```

## 代码演示

### 基础用法

`start-value` 从当前值开始滚动，默认从 0 开始滚动， `current-value` 需要滚动的数字。

```html
<van-count-to :start-value="10" :current-value="1024" />
```

### 小数

通过 `decimals` 属性设置小数位。如果 current-value 是带小数的，应该设置 decimals 为 current-value 一样的小数位数值，如 current-value 为 1024.09，那么 decimals 应该设置为 2。

```html
<van-count-to decimals="2" :current-value="1024.09" />
```

### 千分位分隔符

通过 separator 属性设置千分位分隔符，默认为空字符串。可以设置英文逗号","，如 current-value 为 12345，那么滚动后会变成"12,345"。

```html
<van-count-to separator="," :current-value="12345" />
```

### 自定义样式

通过插槽自定义数字滚动的样式

```html
<van-count-to :current-value="10000">
  <template #default="currentValue">
    <span class="block">¥{{ currentValue }}</span>
  </template>
</van-count-to>

<style>
  .block {
    display: inline-block;
    color: #1989fa;
    font-size: 20px;
  }
</style>
```

## API

### Props

| 参数         | 说明             | 类型               | 默认值 |
| ------------ | ---------------- | ------------------ | ------ |
| currentValue | 需要滚动的数字   | _number \| string_ | `0`    |
| startValue   | 开始值           | _number \| string_ | `0`    |
| decimals     | 小数点位数       | _number_           | `2`    |
| separator    | 千分位分隔符     | _string_           | -      |
| useEasing    | 是否开启缓动结尾 | _boolean_          | `true` |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| finish | 滚动结束时触发 | -        |

### Slots

| 名称    | 说明       | 参数                         |
| ------- | ---------- | ---------------------------- |
| default | 自定义内容 | _currentValue: CurrentValue_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { countToProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                       | 默认值                      | 描述 |
| -------------------------- | --------------------------- | ---- |
| --van-count-to-text-color  | _var(--van-text-color)_     | -    |
| --van-count-to-font-size   | _var(--van-font-size-md)_   | -    |
| --van-count-to-line-height | _var(--van-line-height-md)_ | -    |
