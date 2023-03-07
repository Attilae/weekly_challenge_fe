<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <div class="text-right">
            <md-button class="md-secondary md-dense" @click="upload">
              New Application
            </md-button>
      </div>
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>            
          </div>
          <h4 class="title">Challenges</h4>
        </md-card-header>
        <md-card-content>
          <md-table table-header-color="green">
            <md-table-row v-for="(application, index) in applications" :key="index">            
              <md-table-cell md-label="ID">{{ application.id }}</md-table-cell>              
              <md-table-cell md-label="Name">{{ application.user.name }}</md-table-cell>              
              <router-link :to="{ path: `/challenges/application/${application.id}` }" >
                <md-table-cell md-label="View">View</md-table-cell>
              </router-link>
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
    upload() {
      this.$router.push({ path: `/challenges/applications/${this.$route.params.id}/upload`, replace: true })
    },
    retrieveApplications() {
      ChallengeService.applications(this.$route.params.id)
        .then(response => {
          this.applications = response.list;
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
