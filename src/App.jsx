import { asyncFinallyTryGetQuotes, asyncGetQuotes, asyncTryGetQuotes, thenGetQuotes, thenTryGetQuotes } from "./services/promise-me"



export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  }
  return (
    <>
    <button onClick={async () => handleClick(await asyncGetQuotes)}>Async Get Quotes</button>
    <button onClick={() => handleClick(thenGetQuotes)}>.then() Get Quotes</button>
    <button onClick={() => handleClick(asyncTryGetQuotes)}>Try Get Quotes</button>
    <button onClick={() => handleClick(thenTryGetQuotes)}>Try Get Quotes</button>
    <button onClick={() => handleClick(asyncFinallyTryGetQuotes)}>Try Get Quotes</button>
    </>
  )
}
