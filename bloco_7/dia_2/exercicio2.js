const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurnoInLesson = () => lesson2.turno = lesson1.turno;
addTurnoInLesson();

const indexKeyLessons = (lesson) => {
  for (key in lesson) {
    console.log(key);
  }
}

const indexLengthLesson = (lesson) => lesson.length;

const indexValuesLesson = (lesson) => {
  for (value of lesson) {
    console.log()
  }
}

const allLessons = {}

Object.assign(allLessons, lesson1, lesson2);

const indexLengthAllLesson = () => indexLengthLesson(allLessons);

