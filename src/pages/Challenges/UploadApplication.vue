<template>
<div class="md-layout md-gutter">
    <div class="md-layout-item md-size-66 md-small-size-100">
      <div class="md-layout-item md-size-100">
      <form @submit.prevent="saveApplication">
      <md-card>
        <md-card-header class="md-card-header-icon">
          <div class="card-icon">
            <md-icon>perm_identity</md-icon>
          </div>
          <h4 class="title">
            Apply to the challenge
          </h4>
        </md-card-header>
        <md-card-content>
        <div class="md-layout">
        
          <md-field
            class="form-group md-invalid"
            slot="inputs"
            style="margin-bottom: 28px"
          >
            <md-icon>url</md-icon>
            <label>Url...</label>
            <md-input v-model="application.url" type="text" />
            <!--validation-error :errors="apiValidationErrors.url" /-->
          </md-field>
          <md-card-actions>
            <md-button type="submit">
            Save
            </md-button>
          </md-card-actions>
          </div>
        </md-card-content>
      </md-card>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
import ChallengeService from "../../store/services/challenge-service";
export default {      
  props: ['id'],
  data() {
    return {
      application: {
        user_id: null,
        url: "",        
      },
      submitted: false
    };
  },
  methods: {
    async saveApplication() {
      var data = {
        url: this.application.url,
        user_id: this.$store.getters['profile/me'].id,
        challenge_id: this.$route.params.id
      };
      ChallengeService.saveApplication(data)
        .then(response => {          
          this.tutorial.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          //console.log(e);
        });
        await this.$store.dispatch("alerts/success", "Uploaded successfully.")
        this.application.url = ""
    },
  },
  mounted() {
    
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
