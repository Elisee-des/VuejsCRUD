const checkIfEmptyValue = (obj) => {
  let isEmpty = false;
  for (const prop in obj) {
    if (obj[prop] == "") {
      isEmpty = true;
    }
  }
  return isEmpty;
};

const showSuccessMessage = (message) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

const showErrorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};

const App = {
  data() {
    return {
      showHome: false,
      showCreateFrom: false,
      showStudentsList: false,
      newStudent: {
        nom: "",
        prenom: "",
        dateNaissance: "",
        niveauEtude: "",
      },
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

    submitStudent() {
      if (!checkIfEmptyValue(this.newStudent)) {
        if (!checkIfStudentExist(this.newStudent.nom, this.newStudent.prenom)) {
          addStudent(this.newStudent);
          this.newStudent = {
            nom: "",
            prenom: "",
            dateNaissance: "",
            niveauEtude: "",
          };
          showSuccessMessage("Ajouter avec succes");
        } else {
          showErrorMessage("Cet etudiant existe deja");
        }
      } else {
        showErrorMessage("Veuillez remplir le formaulaire");
      }
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
