
export default function App() {
  const itemList = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'].map(item => <li>{item}</li>)

  return (
    <div>
      <ul>{itemList} </ul>
    </div>
  );
}
