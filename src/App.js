import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thank you!");
  }

  return (
    <main>
      <Animal sound="Meow" emoji="🐈" onPet={handlePet} isHungry />
      <Animal sound="Woof" emoji="🐕" onPet={handlePet} />
      <Animal sound="Squeak" emoji="🐁" onPet={handlePet} isHungry />
    </main>
  );
}

function Animal({ sound, emoji, onPet, isHungry }) {
  return (
    <button onClick={onPet} type="button">
      {isHungry ? "Feed me!" : sound} {emoji}
    </button>
  );
}

// function Animal(props) {
//   return (
//     <div>
//       {props.sound} {props.emoji}
//     </div>
//   );
// }

// destructuring props

// function Animal({ sound, emoji }) {
// console.log(props);
// const { sound, emoji } = props;
// console.log(sound);
// console.log(emoji);

//   return (
//     <div>
//       {sound} {emoji}
//     </div>
//   );
// }
