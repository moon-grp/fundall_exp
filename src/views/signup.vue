<template>
    <v-container fluid>
        <v-row>
            <v-col
             sm='12'
             md='6'
            >
            <v-row 
             align="center"
             justify="center"
            >
             <v-img
          :src="require('../assets/art.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
        
      <div class="sigu_intr">
       <h3 class="display-1  font-weight-bold mb-3">
          Welcome! Lets get
        </h3>
         <h3 class="display-1  font-weight-bold mb-5">
          To know you.
        </h3>
        <h1 class="body-2 font-weight-CONDENSED LIGHT mb-3">
          Your first step towards a better finacial lifestyle starts here.
        </h1>
             
        </div>
            </v-row>
            </v-col>

            <v-col
             sm='12'
             md='6'
             class="px-12 py-5"
            >
                <v-card
    
  >
    <v-container
      class="pa-12"
      fluid
    >
    <v-row>
   <v-col sm="12" md="6">
          <v-text-field
            color="#4DE897"
            label="First Name"
            outlined
          ></v-text-field>
        </v-col>
         <v-col  sm="12" md="6">
          <v-text-field
            color="#4DE897"
            label="Last Name"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" >
          <v-text-field
            color="#4DE897"
            label="E-mail Address"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>
  
    <v-row>
      <v-col cols="12" >
          <v-text-field
            color="#4DE897"
            label="Enter Password"
            outlined
             :type="show4 ? 'text' : 'password'"
          ></v-text-field>
        </v-col>
    </v-row>
     <v-row>
      <v-col cols="12" >
          <v-text-field
            color="#4DE897"
            label="Confirm Password"
            outlined
             :type="show4 ? 'text' : 'password'"
          ></v-text-field>
        </v-col>
    </v-row>
     <v-row>
       <v-col cols="12">
         <div>
          <v-btn block large color="#4DE897">SIGN UP</v-btn>
         </div>
       </v-col>
     </v-row>
     <v-row
      align="center"
             justify="center">
        <div class="text-center">
         <h6 class="body-2 font-weight-CONDENSED LIGHT mb-3">
          Already have an account? <span class="green--text">Log in</span>
        </h6>
        </div>
     </v-row>
    </v-container>
  </v-card>
   <v-row
    align="center"
    justify="center"
    class="py-7 px-12"
             >
         <h6 class="body-2 font-weight-CONDENSED LIGHT mb-3">
        By Clicking on login, you agree with our <span class="green--text">Terms & conditions and privacy policy</span>
        </h6>
      
     </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name:'Signup'
    
}
</script>

<style scoped>

.sigu_intr{
margin-left: 50px;
margin-top: 50px;
}

.txt_c{
  color: "#4DE897";
}

</style>