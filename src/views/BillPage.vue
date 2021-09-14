<template>
  <div class="bill">
    <Navbar />
    <v-container class="flex">
      <v-layout column>
        <v-flex xs12 sm12 md12 lg12 class="justify-center">
          <v-card flat class="pa-4 mt-10" color="black" width="auto" height="auto">
            <span class="text-lg white--text">SUMMARY</span>

            <div v-for="cInfo in cartInfo" :key="cInfo.id">
            <v-card dark flat class="w-80 h-auto my-5" color="#C0C0C0">
              <v-layout wrap>
                <v-card-text class="justify-center text-sm w-40 truncate white--text">
                  <span class=""> {{ cInfo.name }}</span>
                </v-card-text>

                <v-card-actions>
                  <!-- <v-btn @click="deleteCart(cInfo.id)" color="red darken-4">
                      <v-icon>delete</v-icon>
                  </v-btn>-->
                </v-card-actions>
              </v-layout>
            </v-card>
            </div>

            <v-card-text class="text-sm truncate white--text">
              <ul>
                <li class="mb-2 justify-end">
                  <span>Total Quantity:  Piece</span>
                </li>
                <li>
                  <span>Total price: yen</span>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md12 lg12 class="justify-center">
          <v-btn no-gutter dark @click="$router.push('/')" class="mt-10">
            <v-icon left>reply</v-icon>
            <span>BACK TO HOME</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Bill',
  data() {
    return {
      cartInfo: []
    }
  },
  components: {
    Navbar

  },
  methods: {

  }
}
</script>