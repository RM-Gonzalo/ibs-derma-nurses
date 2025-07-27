// Minimal React + TS app
declare const React: any;
declare const ReactDOM: any;

function App() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold text-pink-600">IBS Derma Nurses</h1>
      <p className="mt-4">Tu belleza en manos de profesionales</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
