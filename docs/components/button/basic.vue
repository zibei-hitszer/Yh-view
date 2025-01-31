<template>
  <!-- default -->
  <div class="row">
    <Button>Default</Button>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="info">info</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
  </div>
  <!-- plain -->
  <div class="row">
    <Button plain>plain</Button>
    <Button plain type="primary">primary</Button>
    <Button plain type="success">success</Button>
    <Button plain type="info">info</Button>
    <Button plain type="warning">warning</Button>
    <Button plain type="danger">danger</Button>
  </div>
  <!-- round -->
  <div class="row">
    <Button round>Default</Button>
    <Button round type="primary">primary</Button>
    <Button round type="success">success</Button>
    <Button round type="info">info</Button>
    <Button round type="warning">warning</Button>
    <Button round type="danger">danger</Button>
  </div>
  <!-- circle -->
  <div class="row">
    <Button circle></Button>
    <Button circle type="primary"></Button>
    <Button circle type="success"></Button>
    <Button circle type="info"></Button>
    <Button circle type="warning"></Button>
    <Button circle type="danger"></Button>
  </div>
  <!-- loading -->
  <div class="row">
    <Button loading>loading</Button>
  </div>
</template>

<script setup>
  import { Button } from '@yh-ui/components';
</script>

<style>
  .row {
    margin-bottom: 8px;
  }
</style>
