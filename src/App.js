import logo from './logo.svg';
import './App.css';
import MyB from './MyButton';
import {Button1, Button3} from './ButtonLib';
import AboutPage from './AboutPage';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import CountState from './CountState';
import {useState} from 'react';

function CountState2({count, onClick}) {

  return(
      <div onClick={onClick}>
          <button>Clicked {count} Button</button>
      </div>
  );
}

export default function App() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <div className="wrapper">
                <h1>Hello React</h1>
                <MyB/><br/>
                <Button1/>&nbsp;
                <Button3/>
                <AboutPage/>
                <Profile/>
                <ShoppingList/>
            </div>
            <div className='container'>
                <CountState/>
                <CountState/>
                <CountState/>
            </div>
            <div>
                <p>Sharing data between components</p>
                <CountState2 count={count} onClick={handleClick}/>
                <CountState2 count={count} onClick={handleClick}/>
            </div>
        </div>
    );
}
