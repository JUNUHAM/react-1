import logo from './logo.svg';
import './App.css';
import MyB from './MyButton';
import { Button1, Button3 } from './ButtonLib';
import AboutPage from './AboutPage';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import CountState from './CountState';

export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello React</h1>
      <MyB /><br/>
      <Button1 />&nbsp;
      <Button3 />
      <AboutPage />
      <Profile />
      <ShoppingList/>
      <CountState />
      <CountState />
      <CountState />
    </div>
  );
}

