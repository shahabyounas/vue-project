<script setup>
import { ref, reactive, watchEffect, computed } from 'vue'
import { useAirportStore, useAirportDetailsStore } from '../stores/airports'
import { getAirportRunways } from '../services/airportsRunwayService'
import RunwayCard from '../components/RunwayCard.Vue'

// Store
const store = useAirportStore()
const airportDetailStore = useAirportDetailsStore()

const airports = computed(() => {
  return store.options.slice(1, 10)
})

// Reactive vars
const selected = ref(airports.value[0])
const search = ref('')
const airportDetails = reactive({})

function selectionHandler(data) {
  selected.value = data.raw
}

async function updateAirportDetailsHandler(code) {
  const detailFound = airportDetailStore.getAirportDetailsByCode(code)
  if (detailFound) {
    airportDetails.value = detailFound
    return
  }

  await getAirportRunways({ code })
  airportDetails.value = airportDetailStore.getAirportDetailsByCode(code)
}

watchEffect(async () => {
  const code = selected.value['icao']
  await updateAirportDetailsHandler(code)
})
</script>

<template>
  <div class="v-containe px-4 py-5">
    <div class="v-row px-4 py-4">
      <div class="v-col-3 px-0 py-0 list-wrapper">
        <v-card>
          <v-data-iterator :items="store.options" :items-per-page="8" :search="search">
            <template v-slot:header>
              <v-toolbar class="px-2">
                <v-text-field
                  v-model="search"
                  clearable
                  density="comfortable"
                  hide-details
                  placeholder="Search"
                  prepend-inner-icon="mdi-magnify"
                  style="max-width: 400px"
                  variant="solo"
                ></v-text-field>
              </v-toolbar>
            </template>

            <template v-slot:default="{ items }">
              <ul
                v-for="item in items"
                :key="item.icao"
                cols="v-col-3"
                md="4"
                @click="selectionHandler(item)"
              >
                <li>
                  <p>
                    <strong>{{ item.raw.name }}</strong> {{ item.raw.icao }}
                  </p>
                  <p>{{ item.raw.state }} {{ item.raw.country }}</p>
                </li>
              </ul>
            </template>

            <template v-slot:no-data>
              <li>
                <v-alert :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </li>
            </template>
          </v-data-iterator>
        </v-card>
      </div>

      <div class="v-col-auto">
        <div>
          <h2 class="px-4">
            <strong> {{ selected['name'] }} Airport </strong> - ICAO Code {{ selected['icao'] }}
          </h2>
        </div>
        <RunwayCard v-if="airportDetails.value" :runways="airportDetails.value.runways" />
        <div v-else>No Runways record exists</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.runways {
  display: flex;
}

.list-wrapper {
  min-height: 45rem;
  border: 1px solid gainsboro;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
}

ul {
  border: 1px solid gainsboro;
  border-radius: 5px;
}

li {
  border-top: 1px solid gainsboro;
  padding: 1rem 1rem;
}

li:hover {
  background-color: aliceblue;
}

@media (min-width: 1024px) {
  .venu {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

li {
  list-style-type: none;
}
</style>
