<template>
    <v-row row>
        <v-col cols="12" sm="2" class="logo1">
            <v-list-item>
                <v-img  style="width:80px; height:80px" src="@/assets/logo.png" contain />
          </v-list-item>
          
        </v-col>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12" sm="2">
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="ico ico-user ico1">
                    <input class="mt-3 mr-3 input1" placeholder="Tên đăng nhập"/>
                    <v-btn height="20" class="submit-button2" rounded :to="'/login/Dang-ky'"  style="text-decoration:none; color:#fff" color="#fdb44b"><span style="font-size:11px">Đăng ký</span></v-btn>
                </div>
                <div class="ico ico-user1 ico2">
                    <input class="mt-3 input1" placeholder="Password"/>
                    <v-btn height="20"  rounded class="submit-button1"  style="text-decoration:none; color:#fff" color="blue"><span style="font-size:11px">Đăng nhập</span></v-btn>
                </div>
            </v-card-actions>
        </v-col>
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
@media(min-width: 1100px){
    .ico1{
        font-size: 12px;
        margin-left: 155px;
        margin-top:-30px
    }
     .submit-button1{
         margin-top: 10px;
         position: relative;
         margin-left: 80px
    }
     .submit-button2{
         margin-top: 48px;
         position: absolute;
         margin-left: -15px
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
}

</style>