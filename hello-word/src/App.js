
import List from "./components/List";
export default function App() {
  const itemList = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    return (
       <div>
        <List  item = {itemList} />
       </div>
    )
}