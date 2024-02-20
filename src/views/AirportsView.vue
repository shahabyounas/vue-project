<script setup>
import { ref } from 'vue'
import { useAirportStore } from '../stores/airports'

const store = useAirportStore()
const options = store.options
const search = ref('')
const headers = [
  { title: 'ICAO Code', align: 'left', sortable: false, key: 'icao' },
  { title: 'Name', key: 'name', sortable: false },
  { title: 'City', key: 'city', sortable: false },
  { title: 'State', key: 'state', sortable: false },
  { title: 'Country', key: 'country', sortable: false },
  { title: 'Time Zone', key: 'tz', sortable: false }
]

</script>

<template>
  <v-container fluid>
  <v-card>
    <v-card-title>
      World's Airports
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search Your Favourite Destination...."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="options" :search="search" item-value="name">
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.icao }}</td>
          <td class="text-xs-right">{{ item.name }}</td>
          <td class="text-xs-right">{{ item.city }}</td>
          <td class="text-xs-right">{{ item.state }}</td>
          <td class="text-xs-right">{{ item.country }}</td>
          <td class="text-xs-right">{{ item.tz }}</td>
        </tr>
      </template>

      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</v-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
