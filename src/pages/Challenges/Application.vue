<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>
          </div>
          <h4 class="title">{{application.user.name}}</h4>
        </md-card-header>
        <md-card-content>
          <md-table table-header-color="green">
            <md-table-row>            
              <md-table-cell md-label="ID">{{ application.id }}</md-table-cell>              
              <md-table-cell md-label="Name">
              <vue-friendly-iframe :src="application.url" @load="onLoad"></vue-friendly-iframe>            
              </md-table-cell>              
            </md-table-row>
            
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
import ChallengeService from "../../store/services/challenge-service";

export default {      
  props: ['id'],
  data() {
    return {
      application: [],      
    };
  },
  methods: {
    getClass: ({ id }) => ({
      "table-success": id === 1,
      "table-info": id === 3,
      "table-danger": id === 5,
      "table-warning": id === 7
    }),
    retrieveApplication() {      
      ChallengeService.application(this.$route.params.id)
        .then(response => {
          this.application = response.application.data;
        })
        .catch(e => {
          //console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveApplication();
  }
};
</script>
<style scoped>
.table-transparent {
  background-color: transparent !important;
}

.mt-0 {
  margin-top: 0 !important;
}
</style>
