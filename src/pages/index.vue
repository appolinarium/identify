<template>
  <NuxtLayout name="welcome">
    <el-container class="welcome-container">


      <el-main class="welcome-container__content">
        <HeroHeaderSubheader>

          <template #header>
            Registration-free user-oriented<br>social network
          </template>

          <template #subheader>
            <CounterUsers />users already just remembered the
          </template>

          <template #action>
            <FormAuth />
          </template>

        </HeroHeaderSubheader>
      </el-main>


      <el-footer class="welcome-container__footer">
        <el-row justify="space-between">
          <el-col span="8">
            <TextCopyright
              name="Identify"
            />
          </el-col>

          <el-col span="8">
            <ListLanguages :items="['Русский', 'Беларуская (тарашкевiца)', 'English']"/>
          </el-col>
          
          <el-col span="8">
            <el-button link> 
              <TextLabel>
                <IconGithub />Source code
              </TextLabel>
            </el-button>
          </el-col>
          
        </el-row>
      </el-footer>

    </el-container>
  </NuxtLayout>

</template>

<style lang="scss">
  .welcome-container {
    justify-content: space-between;
    @include padding(0 300px);
    @include padding-top(112px);
    
    &__content {
      @include pm-reset();
    }

    &__footer {
      @include pm-reset();
      @include padding(0 100px);
    }
  }
</style>