const root = ReactDOM.createRoot(document.querySelector('#root'));

const Counter = () => {
  return (
    <div className="counter">
     <button>+</button>
     <button>{0}</button>
     <button>-</button>
     <button>0</button>
     <button>x</button>
    </div>
  )
}

const App = () => {
  return (
    <div >
        <h1 className="Sum">Sum = 0</h1>
        <button className="button"> Add Counter</button>
    <Counter/>
    </div>

  );
}
root.render(<App />)