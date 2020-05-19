<template>

    <div>
        <h2>Get All Users</h2>
        <h4>จำนวนวนผู้ใช้งาน {{users.length}}</h4>
        <p><button v-on:click="navigateTo('user/create')">เพิ่ม user</button></p>
        <div v-for="user in users" v-bind:key="user.id">
            <p>id : {{user.id}}</p>
            <p>ชื่อ สกุล : {{user.name}} - {{user.surname}}</p>
            <!-- <p>วันเกิด : {{user.birthday}}</p>
            <p>email : {{user.email}}</p> -->
            <button v-on:click="navigateTo('/user/'+user.id)">ดูรายละเอียด</button>
            <button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
        </div>

    </div>

</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
        return{
            users:[]
        }
    },
    async created () {
        this.users = (await UsersService.index()).data
        console.log(this.users)
    },
    methods: {
        navigateTo (route){
            this.$router.push(route)
        },
        async deleteUser(user){
            let result = confirm("wanna delete this user???")
            if(result){
                try{
                    await UsersService.delete(user)
                    this.refreshData()
                }catch(err){
                    console.log(err)
                }
            }
        },
        async refreshData() {
            console.log("moo")
            this.users= (await UsersService.index()).data
        }
    }
}

</script>

<style scoped>

</style>