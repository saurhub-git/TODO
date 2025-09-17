export default function Stats({ items }) {
  const completedtasks = items.filter((item) => item.packed).length;
  const percentage = Math.round((completedtasks / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have done it, You're a GOAT 🐐 Now Enjoy!"
          : `🎒 You have ${
              items.length > 0 ? items.length : "no"
            } tasks on your list,
        ${
          items.length > 0
            ? `and you have completed ${completedtasks} tasks (${percentage}%)`
            : " please add something in the list."
        }`}
      </em>
    </footer>
  );
}
