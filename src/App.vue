<template>
  
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire" >
        <div class="app-container">
          <toolbar @toggleNavigationBar="drawer = !drawer" />
          <navigation :toggle="drawer" />
          <v-content>
            <!-- <breadcrumbs /> -->
            <router-view />
            <!-- <page-footer /> -->
          </v-content>
        </div>
      </v-app>
    </template>
    <template v-else>
      <v-app id="inspire">
        <div class="app-container">
          <v-content>
            <router-view />
          </v-content>
        </div>
      </v-app>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true,
    };
  }
};
</script>

<style></style>
