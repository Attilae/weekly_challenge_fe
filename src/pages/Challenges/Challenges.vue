<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>
          </div>
          <h4 class="title">Challenges</h4>
        </md-card-header>
        <md-card-content>
          <md-table table-header-color="green">
            <md-table-row v-for="(challenge, index) in challenges" :key="index">            
              <md-table-cell md-label="ID">{{ challenge.id }}</md-table-cell>
              <md-table-cell md-label="Name">{{ challenge.name }}</md-table-cell>
              <md-table-cell md-label="Start Date">{{
                challenge.start_date
              }}</md-table-cell>
              <md-table-cell md-label="End Date">{{ challenge.end_date }}</md-table-cell>
              <router-link :to="{
        name: 'Challenges Applications',
        params: {
          id: challenge.id
        }
      }" >
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
  data() {
    return {
      challenges: [],
      selected: [],
      tableData: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36.738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,789",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Baileux"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park"
        },
        {
          id: 5,
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kärnten"
        }
      ],
      tableDataPlain: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36.738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,789",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Baileux"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park"
        },
        {
          id: 5,
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kärnten"
        }
      ],
      tableDataColor: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36.738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,789",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Baileux"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park"
        },
        {
          id: 5,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park"
        },
        {
          id: 6,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park"
        },
        {
          id: 7,
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kärnten"
        }
      ]
    };
  },
  methods: {
    getClass: ({ id }) => ({
      "table-success": id === 1,
      "table-info": id === 3,
      "table-danger": id === 5,
      "table-warning": id === 7
    }),
    retrieveChallenges() {
      ChallengeService.list()
        .then(response => {
          this.challenges = response.list.data;
        })
        .catch(e => {
          //console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveChallenges();
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
