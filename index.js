import express from "express";
import fs from "fs";

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Función para leer el archivo JSON
const readData = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

// Ruta para obtener todos los estudiantes
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

// Ruta para obtener un estudiante por ID
app.get("/students/:id", (req, res) => {
  const data = readData();
  const student = data.students.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Ruta para obtener todos los cursos
app.get("/courses", (req, res) => {
  const data = readData();
  res.json(data.courses);
});

// Ruta para obtener un curso por ID
app.get("/courses/:id", (req, res) => {
  const data = readData();
  const course = data.courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
