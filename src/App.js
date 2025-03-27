import logo from './logo.svg';
import './App.css';
import MyB from './MyButton';
import { Button1, Button3 } from './ButtonLib';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyB /><br/>
      <Button1 />&nbsp;
      <Button3 />
      <AboutPage />
    </div>
  );
}

