import "./App.css";
import Course from "./Components/Course";
import Header from "./Components/Header";
import { courses } from "./Data";

function App() {
  return (
    <>
      <Header />
      {courses?.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </>
  );
}

export default App;
