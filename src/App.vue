<template>
  <v-app style=" background: #FCFBFC;">
    <v-app-bar 
      color="#FCFBFC"
      position: absolute
      elevate-on-scroll
      app
    >
    <v-toolbar-title class="logo">  
      <router-link to='/'>
  <v-img
          :src="require('../src/assets/new.png')"
          contain
          
         
        ></v-img>
      </router-link>

    </v-toolbar-title>
            
   
      <v-spacer></v-spacer>

        <v-btn
      text
      rounded
      class="custom-btn"
      to='/dashboard'
      >
        <span >Dashboard</span>
      </v-btn>

      <v-btn
      text
      to='/signin'
      rounded
      class="custom-btn"
      >
      <span >Sign in</span>
      </v-btn>

      <v-btn
      text
      to='/signup'
      rounded
      class="custom-btn"
      >
        <span >Sign Up</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';


export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>


<style scoped>
.logo{
 margin-left: 20px;
 margin-top: 50px;
 margin-bottom: 50px;
}

.custom-btn::before {
    color: transparent
}

.custom-btn:hover {
    background-color:#4CE895;
}

.bg_color{
  background-color: red;
}
</style>