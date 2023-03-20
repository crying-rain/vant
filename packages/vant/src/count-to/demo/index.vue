<script setup lang="ts">
import VanCountTo from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    decimals: '小数',
    thousandsSeparator: '千分位分隔符',
    customStyle: '自定义样式',
  },
  'en-US': {
    decimals: 'Decimals',
    thousandsSeparator: 'Thousands Separator',
    customStyle: 'Custom Style',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-count-to :start-value="1" :current-value="1024" />
  </demo-block>
  <demo-block :title="t('decimals')">
    <van-count-to :decimals="2" :current-value="1024.09" />
  </demo-block>
  <demo-block :title="t('thousandsSeparator')">
    <van-count-to separator="," :current-value="12345" />
  </demo-block>
  <demo-block :title="t('customStyle')">
    <van-count-to :current-value="10000">
      <template #default="currentValue">
        <span class="block">¥{{ currentValue }}</span>
      </template>
    </van-count-to>
  </demo-block>
</template>

<style lang="less">
.demo-count-to {
  background-color: var(--van-background-2);

  .van-count-to {
    margin-left: var(--van-padding-md);
  }
  .block {
    display: inline-block;
    color: #1989fa;
    font-size: 20px;
  }
}
</style>
