const learning_modules = [
  "Goal Setting Game ...",
  "Wedding Card Game ...",
  "Format Free ...",
  "",
];

export default function Sidebar() {
  return (
    <ul>
      {learning_modules.map((module) => (
        <li className=" ">{module}</li>
      ))}
    </ul>
  );
}
