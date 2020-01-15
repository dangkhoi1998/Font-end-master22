<template>
  <div>
    <app-bar
    :links="links"
    :to="to">
      <template v-slot:formNganhNghe="{ itemss }">
        <v-row>
          <v-col cols="12" sm="2">
            <v-list-item>
                <v-img  style="width:80px; height:80px" src="@/assets/logo.png" contain />
          </v-list-item>
          </v-col>
          <v-col cols="12" sm="9"></v-col>
          <v-col cols="12" sm="1" class="mt-7">
              <v-menu bottom center offset-y transition="slide-y-transition" >
                <template v-slot:activator="{ attrs, on }">
                  <v-btn class="toolbar-items " icon to="" v-bind="attrs"
                    v-on="on"
                  >
                    <v-badge
                      color="error"
                      overlap
                    >
                      <v-icon color="tertiary">
                        mdi-account
                      </v-icon>
                    </v-badge>
                  </v-btn>
                </template>
              
                <v-card>
                  <v-list dense v-if="links.levell">
                    <v-list-item v- v-for="(link, i) in links" :key="i"  style="text-decoration:none" @click="$store.state.authenticated = false" :to="link.levell + $route.params.idEmpl + link.to">
                      <v-list-item-action >
                        <v-icon>{{link.icon}}</v-icon>
                      </v-list-item-action>

                      <v-list-item-title >{{link.text}}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                  <v-list dense v-else>
                    <v-list-item v- v-for="(link, i) in links" :key="i"  style="text-decoration:none" @click="$store.state.authenticated = false" :to="link.to">
                      <v-list-item-action >
                        <v-icon>{{link.icon}}</v-icon>
                      </v-list-item-action>

                      <v-list-item-title >{{link.text}}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
          </v-col>
        </v-row>
      </template>
    </app-bar>
  </div>
</template>

<script>
import bar from '../AppBar'
export default {
  data: () => ({
    to: {
      to1: '/admin/ban-tin',
      to2: '/admin/thong-bao'
    },
    links: [
      {
        to: "/login",
        icon: "mdi-logout",
        text: "Đăng xuất"
      },
      {
        to: "/admin/them-cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Thêm công việc"
      },
    ],
  }),
  components: {
    appBar:bar
  },
}
</script>
