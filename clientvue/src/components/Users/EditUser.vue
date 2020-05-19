<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent = "editUser">
            <p>name: <input type="text" v-model="user[0].name"></p>
            <p>surname: <input type="text" v-model="user[0].surname"></p>
            <p>birthday: <input type="date" v-model="user[0].birthday"></p>
            <p>email: <input type="email" v-model="user[0].email"></p>
            <p>sex: <input type="text" v-model="user[0].sex"></p>
            <p>password: <input type="text" v-model="user[0].password"></p>
            <p>update_at: <input type="text" v-model="user[0].update_at"></p>
            <p><button type="submit">edit user</button></p>
        </form>
        <hr>
        <div>
            <p>name: {{user[0].name}}</p>
            <p>surname: {{user[0].surname}}</p>
            <p>birthday: {{user[0].birthday}}</p>
            <p>email: {{user[0].email}}</p>
            <p>password: {{user[0].password}}</p>
            <p>update_at: {{user[0].update_at}}</p>
        </div>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data(){
        return {
            user: {
                name: '',
                surname: '',
                birthday: '',
                email: '',
                sex: '',
                password: ''
            }
        }
    },
    methods:{
        async editUser(){
            try {
                // console.log(this.user[0])
                const {id, name, surname, birthday, email, sex, password} = this.user[0]
                const formData = {
                    id,
                    name,
                    surname,
                    birthday,
                    email,
                    sex,
                    password
                }
                // console.log(formData)
                // ทำ formData เพราะถ้ายัด this.user ใน await UsersService.put ตัวเวลาที่อ่านได้ของ update กับ create เป็น string มันจะ save ไม้ได้ ติดเรื่อง datatypeของ sql
                await UsersService.put(formData)
                this.$router.push({name: 'users'})
            }catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch(error) {
            console.log (error)
        }
    }  
}
</script>

<style scoped>

</style>