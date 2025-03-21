import './App.css';
import { Left } from './panel/Left/Left';
import { Body } from './panel/Body/Body';
export const App: React.FC = () => {

  return (
    <div className="app-container">
			<Left/>
			<Body/>
    </div>
  );
};

