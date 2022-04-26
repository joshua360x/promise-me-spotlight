import { asyncGetQuotes, thenGetQuotes } from "./services/promise-me"



export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  }
  return (
    <>
    <button onClick={async () => handleClick(await asyncGetQuotes)}>Async Get Quotes</button>
    <button onClick={() => handleClick(thenGetQuotes)}>.then() Get Quotes</button>
    </>
  )
}
