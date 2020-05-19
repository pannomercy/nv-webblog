<template>   
    <div>
          
                <div class="container">       
                    <div class="row">         
                        <div class="col-md-4 col1">           
                            column #1         
                        </div>         
                        <div class="col-md-4 col2">           
                            column #2         
                        </div>         
                        <div class="col-md-4 col3">           
                            column #3         
                        </div>       
                    </div>     
                </div>
           



        <h1>User Login</h1>     
        <form v-on:submit.prevent="onLogin">       
            <p>Username: <input type="text" v-model="email" /></p>       <p>Password: <input type="password" v-model="password" /></p>       <p><button  type="submit">Login</button></p>
        </form>   
    </div>  
</template>  

<script>
    import AuthenService from '@/services/AuthenService'

     export default {
         data () {
            return {
            email: '',
            password: ''
            }
        },
        methods: {
            async onLogin () {       
                try {         
                    const response = await AuthenService.login({           email: this.email,           
                    password: this.password         
                    })
                    // ใน AuthenService จะเป็น api post request โดยส่ง user & email ไปฟังก์เช็ค authen  ที่ Backend โดยในนั้นจะ query sql เทียบค่า email และ password หากมีใน database  จะ gen token ให้กลับมา  ที่ให้กลับมาจะมี user และ token  เพื่อ process ต่อบันทัดล่าง จะเป็น vuex 
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                    console.log(response)               
                } catch (error) {         
                    console.log(error)              
                }     
            }   
        }  
    }  
</script>

<style scoped>
.col1, .col2, .col3 {
    border:solid 1px red;
}
</style>