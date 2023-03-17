<template>
  <div class="md-layout">
    <div class="md-layout-item md-medium-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>music_note</md-icon>
          </div>
          <h4 class="title">{{application.user.name}}</h4>
        </md-card-header>
        <md-card-content>
          <md-table table-header-color="green">
            <md-table-row>            
              <md-table-cell md-label="Url">
                <vue-friendly-iframe style="width:100%" :src="application.url" @load="onLoad"></vue-friendly-iframe>            
              </md-table-cell>                            
            </md-table-row>
            <md-table-row>            
              <md-table-cell md-label="Url">
                {{application.description}}          
              </md-table-cell>                            
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
    

    <div class="md-layout-item md-medium-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>            
          </div>
          <h4 class="title">Comments</h4>
        </md-card-header>
        <md-card-content>
          <md-table table-header-color="green">
            <md-table-row v-for="(comment, index) in comments" :key="index">            
              <md-table-cell md-label="ID">{{ comment.id }}</md-table-cell>              
              <md-table-cell md-label="Name">{{ comment.user.name }}</md-table-cell>              
              <md-table-cell md-label="Description">
                {{ comment.description }}
              </md-table-cell> 
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  
    <div class="md-layout-item md-medium-size-100">
      
      <form @submit.prevent="saveComment">
      <md-card>
        <md-card-header class="md-card-header-icon">
          <div class="card-icon">
            <md-icon>perm_identity</md-icon>
          </div>
          <h4 class="title">
            Comment
          </h4>
        </md-card-header>
        <md-card-content>
        <div class="md-layout">
          <md-field
            class="form-group md-invalid"
            slot="inputs"
            style="margin-bottom: 28px"
          >
            <md-icon>Description</md-icon>
            <label>Description...</label>
            <md-input v-model="comment.description" type="text" />
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
</template>
<script>
import ChallengeService from "../../store/services/challenge-service";

export default {      
  props: ['id'],
  data() {
    return {
      application: [],
      comment: [],
      comments: [],
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
    retrieveComments() {      
      ChallengeService.comments(this.$route.params.id)
        .then(response => {
          this.comments = response.comments.data;
        })
        .catch(e => {
          //console.log(e);
        });
    },
    async saveComment() {
      var data = {
        description: this.comment.description,
        user_id: this.$store.getters['profile/me'].id,
        application_id: this.$route.params.id
      };
      ChallengeService.saveComment(data)
        .then(response => {          
          this.tutorial.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          //console.log(e);
        });
        await this.$store.dispatch("alerts/success", "Created successfully.")
        this.comment.description = "";
        this.retrieveComments();
    },
  },
  mounted() {
    this.retrieveApplication();
    this.retrieveComments();
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
