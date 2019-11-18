<template>
    <div>
        <v-container fluid>
            <v-row>
                 <v-col
             sm='12'
             md='4'
             class="pa-12"
            >
            <v-row>
                <v-col 
                sm='12'
                md='4'
                
                >
                    <v-avatar class="pa-10 ml-8" color="grey" size="90" >
       <v-icon large>fas fa-user</v-icon>
    </v-avatar>
                </v-col>
                <v-col col='8'>
                    <h2 class="mt-4">Babatunde Fashola</h2>
                    <h6>baba2@gmail.com</h6>
                </v-col>
            </v-row>
            <v-row class="mt-2">
                <h3>Target Monthly Expense</h3>
            </v-row>
             <v-row  class="my-1">
                <h3>₦ {{this.monthly_expense}}</h3>
            </v-row>
             <v-row  class="my-3">
                <v-progress-linear  color="#4DE897 " height="15" value="10"></v-progress-linear>
            </v-row>
            <v-row  class="mt-10">
                     <v-card
                     width="500"
  >
    <v-simple-table>
      <thead>
      <tr>
         <th class="text-left"></th> 
        <th class="text-left">Date</th>
        <th class="text-left">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td> <v-icon color="green" x-small>fas fa-circle</v-icon></td>
        <td>rat</td>
        <td>bot</td>
      </tr>
    </tbody>
  </v-simple-table>
  </v-card>


            </v-row>

                 </v-col>
             <v-col
             sm='12'
             md='8'
           class="pa-12"
            >
            <v-row>
                  <v-card
    width="100%"
    class="mx-auto"
  >
    <v-card-title>Welcome babatunde</v-card-title>
    <v-card-text>Now lets get your expenses for the month</v-card-text>
  </v-card>
            </v-row>
            <v-row class="mt-4">
      <v-col cols="12">
          <v-text-field
            v-model="monthly_expense"
            color="#4DE897 "
            label="Target Monthly Expense"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row class="mt-n5"> 
      <v-col cols="12">
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              outlined
               color="#4DE897 "
              v-model="dateFormatted"
              label="Date"
              persistent-hint
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <h3>Today's Expenses</h3>
    </v-row>
    <v-row class="mt-1">
         <v-col cols="6" >
          <v-text-field
             color="#4DE897 "
            placeholder="item1"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6" >
          <v-text-field
             color="#4DE897 "
            placeholder="30,000"
            outlined
          ></v-text-field>
        </v-col>
    </v-row >
     <v-row class="mt-n6">
         <v-col cols="6" >
          <v-text-field
             color="#4DE897 "
            placeholder="item1"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6" >
          <v-text-field
             color="#4DE897 "
            placeholder="30,000"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>
     <v-row class="mt-n6">
         <v-col cols="6" >
          <v-text-field
             color="#4DE897 "
            placeholder="item1"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6" >
          <v-text-field
           color="#4DE897 "
            placeholder="30,000"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row class="mt-n6">
      <h4>Total Actual Expenses:</h4> <v-text-field
             color="#4DE897 "
            placeholder="30,000"
            outlined
            max-width="20px"
          ></v-text-field>
    </v-row>
    <v-row
    align="center"
    justify="center">
     <div class="text-center">
    <v-btn rounded color="#4DE897" text-color >Save Today's expenses</v-btn>
  </div>
    </v-row>
        </v-col>
          </v-row>
        </v-container>
    </div>
</template>


<script>
export default {
    name:'dashboard',
    data(){
      return{
          monthly_expense:""
      }
    },
     data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),
      computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      mounted() {
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
      },
    },
    
}
</script>

<style scoped>

.custom-btn::before {
    color: transparent
}

.custom-btn:hover {
    background-color:#4CE895;
}
</style>