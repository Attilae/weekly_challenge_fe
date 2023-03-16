<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>            
          </div>
          <h4 class="title">My Applications</h4>
        </md-card-header>
        <md-card-content>
          <md-table table-header-color="green">
            <md-table-row v-for="(application, index) in applications" :key="index">            
              <md-table-cell md-label="ID">{{ application.id }}</md-table-cell>              
              <md-table-cell md-label="Name">{{ application.challenge.name }}</md-table-cell>              
              <md-table-cell md-label="View">
                <router-link :to="{ path: `/challenges/applications/${application.challenge.id}` }">View</router-link>
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
      applications: [],      
    };
  },
  methods: {    
    retrieveApplications() {
      ChallengeService.myApplications(this.$route.params.id)
        .then(response => {
          this.applications = response.applications.data.applications;
          console.log(this.applications)
        })
        .catch(e => {
          //console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveApplications();
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
