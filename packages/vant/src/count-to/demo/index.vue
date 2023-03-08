<script setup lang="ts">
import VanCountTo from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {},
  'en-US': {},
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-count-to />
  </demo-block>
</template>

<style lang="less">
.demo-count-to {
  background-color: var(--van-background-2);
}
</style>
