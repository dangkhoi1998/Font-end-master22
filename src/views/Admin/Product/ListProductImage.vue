<template>
  <v-row>
    <v-col v-for="i in 6" :key="i" cols="12" md="4">
      <v-img
        :src="`https://picsum.photos/500/300?image=${i}`"
        :lazy-src="`https://picsum.photos/10/6?image=${i}`"
        aspect-ratio="1"
      ></v-img>
    </v-col>
  </v-row>
</template>