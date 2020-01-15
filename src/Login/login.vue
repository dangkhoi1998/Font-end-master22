<template>
    <v-row row>
        <v-col cols="12" sm="2" class="logo1">
            <v-list-item>
                <v-img  style="width:80px; height:80px" src="@/assets/logo.png" contain />
          </v-list-item>
          
        </v-col>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12" sm="2" class="button-1">
            <div class="ico ico-user ico1">
                <input class="mt-3 input1" placeholder="Tên đăng nhập"/>
            </div>
        </v-col>
        <v-col cols="12" sm="2" class="button-2">
            <div class="ico ico-user1 ico2">
                <input class="mt-3 input1" placeholder="Password"/>
            </div>
        </v-col>
        <template>
            <v-spacer></v-spacer>
            <v-btn height="20" class="submit-button1" rounded :to="'/login/Dang-ky'"  style="text-decoration:none; color:#fff" color="#fdb44b"><span style="font-size:11px">Đăng ký</span></v-btn>
            <v-btn height="20"  rounded class="submit-button"  style="text-decoration:none; color:#fff" color="blue"><span style="font-size:11px">Đăng nhập</span></v-btn>
        </template>
    </v-row>
</template>
<style scoped>

@media(max-width: 560px){
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
    }
    .button-2{ margin-top:-15px}
    .logo1{ margin-top: 110px}
    .button-1{ margin-top: -38px}
}
@media(min-width: 905px){
    .ico1{
        font-size: 12px;
        margin-left: 155px
    }
    .submit-button1{
        font-size: 12px;
        position: absolute;
        margin-top: 60px;
        margin-left: 1745px
    }
    .submit-button{
        position: absolute;
        margin-top: 60px;
        margin-left: 1840px
    }
    .ico2{
        font-size: 12px;
    }
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
    }
    .ico-user::before{
        content: "\f007";
    }
    .ico-user1::before{
        content: "\f023";
    }
    .ico::before{
        font-family: FontAwesome;
        position: absolute;
        color:#005792;
        width: 30px;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center
    }
    .ico1::after{
        content: "";
        position: absolute;
        top: 28%;
        left: 194px;
        width: 1px;
        height: 16%;
        background-color: #005792;
    }
    .ico2::after{
        content: "";
        position: absolute;
        top: 28%;
        left: 38px;
        width: 2px;
        height: 16%;
        background-color: #005792;
    }
}

</style>