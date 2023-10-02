
export default function List({item}) {
    return (
      <div>
        <ul>
          {item.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  