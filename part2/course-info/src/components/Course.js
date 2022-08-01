import React from "react";

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <b>Total of exercises {total}</b>;
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        console.log(course);
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content course={course} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};
export default Course;
