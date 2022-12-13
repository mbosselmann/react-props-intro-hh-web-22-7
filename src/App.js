import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Animal />
      <Animal />
      <Animal />
    </main>
  );
}

function Animal() {
  return <div>Meow 🐈</div>;
}
