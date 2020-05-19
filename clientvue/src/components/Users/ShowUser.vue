<template>
    <div>
        <h1>Show User</h1>
        <p>id : {{user[0].id}}</p>
        <p>ชื่อ สกุล : {{user[0].name}} - {{user[0].surname}}</p>
        <p>วันเกิด : {{user[0].birthday}}</p>
        <p>email : {{user[0].email}}</p>
        <p>password : {{user[0].password}}</p>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data (){
        return {
            user: null
        }
    },
    async created () {
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
            // console.log(userId)
            // console.log(this.user)
        } catch (error) {
            console.log(error)
        }

    }
}

</script>

<style scoped>

</style>