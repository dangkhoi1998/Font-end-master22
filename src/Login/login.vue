<template>
    <b-navbar toggleable="lg" type="dark">
        

        <b-navbar-toggle target="nav-collapse" class="nut-menu"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="repon" is-nav>
            <b-row row>
                <b-col cols="12" sm="2">
                    <v-list-item>
                        <v-img class="img2"  style="width:80px; height:80px" src="@/assets/logos.png" contain />
                    </v-list-item></b-col>
                <b-col cols="12" sm="10">
                    <v-card-actions class="mt-5 action1">
                        <v-spacer></v-spacer>
                        <div class="ico ico-user ico1">
                            <div class="repon-btn1 repon-1920">
                                <input class="mt-3 mr-3 input1" placeholder="Tên đăng nhập"/>
                            </div>
                            <div class="repon-btn3">
                                <v-btn height="20" class="submit-button2" rounded :to="'/login/Dang-ky'"  style="text-decoration:none; color:#fff" color="#fdb44b"><span style="font-size:11px">Đăng ký</span></v-btn>
                            </div>
                        </div>
                        <div class="ico ico-user1 ico2">
                            <div class="repon-btn2">
                                <input class="mt-3 input2" placeholder="Password"/>
                            </div>
                            <div class="repon-btn4">
                                <v-btn height="20"  rounded class="submit-button1"  style="text-decoration:none; color:#fff" color="blue"><span style="font-size:11px">Đăng nhập</span></v-btn>
                            </div>
                        </div>
                    </v-card-actions>  
                </b-col>
                
            </b-row>
            <b-navbar-toggle target="nav-collapse" class="nut-menu"></b-navbar-toggle>
        </b-collapse> 
    </b-navbar>
    <!-- <v-row row>
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
    </v-row> -->
</template>
<style scoped>

@media(max-width: 360px){
    .repon{
        height: 375px;
    }
    .action1{
        position: absolute;
        padding-top: 20px;
    }
    .repon-btn3{
        margin-top: 18px;
        margin-left: 40px;
        position: absolute;
    }
    .repon-btn4{
        margin-top: 18px;
        margin-left: 135px;
        position: absolute;
    }
    .img2{
        margin-top: 114px;
        margin-left: 0px
    }
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
        
        margin-top: -100px
    }
    .repon-btn1{
        margin-top: -63px;
        margin-left: 45px;
        position: absolute;
    }
    .repon-btn2{
        margin-top: -30px;
        margin-left: 45px;
        position: absolute;
    }
    .input2{
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
@media (max-width: 414px) {
    .repon{
        height: 375px;
    }
    .action1{
        position: absolute;
        padding-top: 20px;
    }
    .repon-btn3{
        margin-top: 18px;
        margin-left: 55px;
        position: absolute;
    }
    .repon-btn4{
        margin-top: 18px;
        margin-left: 155px;
        position: absolute;
    }
    .img2{
        margin-top: 114px;
        margin-left: 0px
    }
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
        
        margin-top: -100px
    }
    .repon-btn1{
        margin-top: -63px;
        margin-left: 65px;
        position: absolute;
    }
    .repon-btn2{
        margin-top: -30px;
        margin-left: 65px;
        position: absolute;
    }
    .input2{
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
@media (max-width: 411px) {
    .repon{
        height: 375px;
    }
    .action1{
        position: absolute;
        padding-top: 20px;
    }
    .repon-btn3{
        margin-top: 18px;
        margin-left: 56px;
        position: absolute;
    }
    .repon-btn4{
        margin-top: 18px;
        margin-left: 153px;
        position: absolute;
    }
    .img2{
        margin-top: 114px;
        margin-left: 0px
    }
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
        
        margin-top: -100px
    }
    .repon-btn1{
        margin-top: -63px;
        margin-left: 68px;
        position: absolute;
    }
    .repon-btn2{
        margin-top: -30px;
        margin-left: 68px;
        position: absolute;
    }
    .input2{
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
@media(max-width: 375px){
    .repon{
        height: 375px;
    }
    .action1{
        position: absolute;
        padding-top: 20px;
    }
    .repon-btn3{
        margin-top: 18px;
        margin-left: 40px;
        position: absolute;
    }
    .repon-btn4{
        margin-top: 18px;
        margin-left: 135px;
        position: absolute;
    }
    .img2{
        margin-top: 114px;
        margin-left: 0px
    }
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
        
        margin-top: -100px
    }
    .repon-btn1{
        margin-top: -63px;
        margin-left: 45px;
        position: absolute;
    }
    .repon-btn2{
        margin-top: -30px;
        margin-left: 45px;
        position: absolute;
    }
    .input2{
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
@media(min-width: 1024px){
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
        
        margin-top: -100px
    }
    .repon-btn1{
        margin-top: -25px;
        margin-left: -350px;
        position: absolute;
    }
    .repon-btn2{
        margin-top: -24px;
        margin-left: -160px;
        position: absolute;
    }
    .repon-btn3{
        margin-left: -185px;
        position: absolute;
        margin-top: 20px;
    }
    .repon-btn4{
        position: absolute;
        margin-left: -91px;
        margin-top: 20px;
    }
    .input2{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        
        padding-left: 35px;
    }
}
@media(min-width: 1920px){
    .ico1{
        font-size: 12px;
        margin-left: 155px;
        margin-top:-30px
    }
    .repon-btn1{
        margin-top: -10px;
        margin-left: -350px;
    }
    .repon-btn2{
        margin-top: -10px;
        margin-left: -160px;
    }
    .repon-btn3{
        margin-left: -356px;
        position: absolute;
        margin-top: 25px;
    }
    .repon-btn4{
        position: absolute;
        margin-left: -160px;
        margin-top: 25px;
    }
     .submit-button1{
         margin-top: 9px;
         position: absolute;
         margin-left:78px
         
    }
     .submit-button2{
         margin-top: 10px;
         position: absolute;
         margin-left: 180px
    }
    .ico2{
        font-size: 12px;
        margin-top: -30px
    }
    .input2{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
    }
    .input1{
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        background: #fff;
        height: 26px;
        width:  185px;
        padding-left: 35px;
        margin-top:-10px
    }

}

</style>