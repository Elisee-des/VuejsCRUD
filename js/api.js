const STUDENTDB = "StudentDB";

//Retourne la base de donneeslocal
function getLocalDB() {
  if (!localStorage.getItem(STUDENTDB)) {
    localStorage.setItem(STUDENTDB, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(STUDENTDB));
}

//Mettre a jour la bes de donnee
function updateDB(db) {
  localStorage.setItem(STUDENTDB, JSON.stringify(db));
}

//Ajout etudiant
function addStudent(student) {
  const db = getLocalDB();
  student.id = Date.now() + "";
  db.push(student);
  updateDB(db);
}

//Edition d'un Etudiant
function updateStudent(student) {
  const db = getLocalDB();

  const updateDb = db.map(function (curStudent) {
    if (curStudent.id == student.id) {
      return {
        id: student.id,
        nom: student.nom,
        prenom: student.prenom,
        dateNaissance: student.dateNaissance,
        niveauEtude: student.niveauEtude,
      };
    }
    return curStudent;
  });

  updateDB(updateDb);
}

//Suppression d'un Etudiant
function deleteStudent(student) {
  const db = getLocalDB();
  const updateDb = db.filter(function (curStudent) {
    return curStudent.id != student.id;
  });
  updateDB(updateDb);
}

//Retrouver un etudiant en pariculier
function getStudent() {
  const db = getLocalDB();
  let filterDB = db.filter((data) => data.id == id);
  if (filterDB.length > 0) {
    return filterDB[0];
  }
  return null;
}

//Recherche Etudiant
function searcheStudent() {
  const db = getLocalDB();
  const filterDB = db.filter((data) => {
    return (
      data.nom.toLowerCase().includes(name.toLowerCase()) ||
      data.prenom.toLowerCase().includes(name.toLowerCase())
    );
  });

  return filterDB;
}
