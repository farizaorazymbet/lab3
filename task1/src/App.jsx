import StepCounter from './StepCounter';
function App() {
  return (
    <div>
      <h1>Step Counter 1</h1>
      <StepCounter initialValue={0} step={1} />
      <h1>Step Counter 2</h1>
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default App;