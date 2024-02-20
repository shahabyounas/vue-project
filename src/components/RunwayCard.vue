<script>
  export default {
    props: ['runways'],
  }
</script>

<template>
    <v-container>
        <v-card width="400">  
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Total Runways
            </div>
  
            <v-timeline density="compact" align="start">
              <v-timeline-item
                v-for="runway in runways"
                :key="runway.id"
                :dot-color="(runway.surface || 'black')"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ runway.surface }}</strong> @{{ runway.airport_ref }}
                  </div>
                  <div>Length ft: {{ runway.length_ft }}</div>
                  <div>Width ft: {{ runway.width_ft }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
    </v-container>
  </template>