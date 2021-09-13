<template>
  <div class="bill">
    <Navbar />
    <v-container class="flex">
      <v-layout column wrap>
        <v-flex xs12 sm6 md6 lg6 wrap class="justify-center hidden-xs-only">
          <v-card flat class="pa-4" color="black" width="auto" height="auto">
            <span class="text-lg white--text">CART</span>

            <!-- <div v-for="cInfo in cartInfo" :key="cInfo.id"> -->
              <v-card dark flat class="w-auto h-auto my-5" color="#C0C0C0">
                <v-layout wrap>
                  <v-card-text class="justify-start text-sm w-40 truncate white--text">
                    <span>Bill</span>
                  </v-card-text>

                  <v-card-actions>
                    <!-- <v-btn @click="deleteCart(cInfo.id)" color="red darken-4">
                      <v-icon>delete</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-layout>
              </v-card>
            <!-- </div> -->
          </v-card>
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

    }
  },
  components: {
    Navbar


  },
}
</script>