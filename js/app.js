const App = {
  data() {
    return {
      showHome: false,
      showCreateFrom: false,
      showStudentsList: false,
    };
  },
 
  mounted() {
    this.changeNavigationState("home");
  },

  methods: {
    goToHome() {
      this.changeNavigationState("home");
    },
    goToCreateFrom() {
      this.changeNavigationState("create");
    },
    goToStudentsList() {
      this.changeNavigationState("list");
    },

    changeNavigationState(destination) {
      this.showHome = false;
      this.showCreateFrom = false;
      this.showStudentsList = false;

      switch (destination) {
        case "home":
          this.showHome = true;
          break;
        case "create":
          this.showCreateFrom = true;
          break;
        case "list":
          this.showStudentsList = true;
          break;

        default:
          this.showHome = true;
          break;
      }
    },
  },
};

Vue.createApp(App).mount("#app");
