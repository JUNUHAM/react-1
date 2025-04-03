export default function MyButton(){
    function handleClick() {
        alert('Click Event');
    }

    return (
        <button onClick={handleClick}>I'm a Button</button>
    );
}