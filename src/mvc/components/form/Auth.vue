<script setup lang="ts">
</script>

<template>
  <el-form class="form-auth">

    <el-form-item>
      <el-input />

      <span class="form-auth__divider">/</span>

      <el-input placeholder="Type your private key" />

      <el-input type="submit" value="Signin" />
    </el-form-item>

    <el-form-item>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="I confirm the license agreement" />
        <el-checkbox checked label="Save session in browser" />
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
  .form-auth {
    @include pm-reset();

    &__divider {
      font-family: 'Lato';
      font-weight: 900;
      color: var(--el-color-primary);
      @include font-size(18px);
    }
  }
</style>