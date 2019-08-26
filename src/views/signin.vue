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
            <v-col 
            cols="12"
            class="mt-12">
             <v-img
          :src="require('../assets/signin.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
            </v-col>
            
             <v-col 
             cols="12"
             align="center"
             justify="center"
             >
       <h3 class="display-1  font-weight-bold mb-3">
          Welcome back!
        </h3>
             </v-col>
              <v-col 
              cols="12"
              align="center"
              justify="center"
              >
         <h3 class="display-1  font-weight-bold mb-5">
          We miss you.
        </h3> 
              </v-col>
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
     <v-card-title>Holla</v-card-title>
     <v-card-text>Sign in to the vibe</v-card-text>
     <v-form ref="form">
    <v-row>
      
      <v-col cols="12" >
          <v-text-field
            ref="username"
            v-model="username"
            color="#4DE897"
            label="E-mail or Username"
            outlined
             required
             :rules="[() => !!username || 'username is required!!']"
          ></v-text-field>
        </v-col>
    </v-row>
  
    <v-row>
      <v-col cols="12" >
          <v-text-field
             :type="show4 ? 'text' : 'password'"
            v-model="password"
            ref="password"
            :rules="[() => !!password || 'password is required!!']"
            color="#4DE897"
            label="Enter Password"
            outlined
            required
          ></v-text-field>
        </v-col>
    </v-row>
     <v-row>
       <v-col cols="12">
         <div>
          <v-btn 
          block
           large
            color="#4DE897"
            :disabled="!valid"
            @click="onsubmit"
            >LOGIN</v-btn>
         </div>
       <v-alert  :value="alert" type="warning">
      wrong details.
    </v-alert>
       </v-col>
     </v-row>
     </v-form>
     <v-row
      align="center"
             justify="center">
        <div class="text-center">
         <h6 class="body-2 font-weight-CONDENSED LIGHT mb-3">
          Don't have an account? <span class="green--text">Register Here</span>
        </h6>
        </div>
     </v-row>
       <v-row
    align="center"
    justify="center"
    class="py-7 px-12"
             >
         <h6 class="body-2 font-weight-CONDENSED LIGHT mb-3">
        By Clicking on login, you agree with our <span class="green--text">Terms & conditions and privacy policy</span>
        </h6>
      
     </v-row>
    </v-container>
  </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name:'Signin',
    data(){
      return{
        alert: false,
        valid: true,
        username:'',
        password:''
      }
    },
     methods:{
        onsubmit(){
      if (this.$refs.form.validate()) {
            this.$refs.form.resetValidation()
                      axios({
  method: 'post',
  header:{
'Accept':'application/json'
  },
  url: 'https://test.fundall.io/api/v1/login',
  data: {
    "email": this.username,
	"password": this.password
  }
}).then(
  res=>{
    console.log(res.data)
     this.$router.push('/dashboard')
  }
)
.catch(
  err=>{
    console.log(err)
    this.alert=true
  }
)
           
            this.username=""
            this.password=''
        }
        },
    },

  /*  mounted() {
      axios({
  method: 'post',
  header:{
'Accept':'application/json'
  },
  url: 'https://test.fundall.io/api/v1/login',
  data: {
    "email": "test@gmail.com",
	"password": '123456'
  }
}).then(
  res=>{
    console.log(res.data)
  }
)

    }, */
    
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