import React from "react";
import StudentForm from "./StudentForm";
import StudentsList from "./StudentList";

export default function StudentsPage() {
  return (
    <div className="container">
      <StudentForm />
      <StudentsList />
    </div>
  );
}
