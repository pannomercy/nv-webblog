<template>
    <div>
        <h1>Create User</h1>
        <form v-on:submit.prevent = "createUser">
            <p>name: <input type="text" v-model="user.name"></p>
            <p>surname: <input type="text" v-model="user.surname"></p>
            <p>birthday: <input type="date" v-model="user.birthday"></p>
            <p>email: <input type="email" v-model="user.email"></p>
            <p>sex: <input type="text" v-model="user.sex"></p>
            <p>password: <input type="text" v-model="user.password"></p>
            <p><button type="submit">create user</button></p>
        </form>
        <hr>
        <div>
            <p>name: {{user.name}}</p>
            <p>surname: {{user.surname}}</p>
            <p>birthday: {{user.birthday}}</p>
            <p>email: {{user.email}}</p>
            <p>password: {{user.password}}</p>
        </div>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data (){
        return {
            user: {
                name: '',
                surname: '',
                birthday: '',
                email: '',
                sex: '',
                password: ''
            },
            string:'ss'
        }
    },
    methods:{
        async createUser () {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name:'users'
                })
            } catch (err){
                console.log(err)
            }
        }
            // createUser () {
            //     console.log(this.user)
                // this.$router.push({
                //     name:'users'
                // })
  
        // }



    }

}
</script>

<style scoped>

</style>


