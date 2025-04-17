function Square({value, onSquareClick}) {
    /**
   * TODO : 버튼 및 클릭 이벤트 리스너 구현
   */

    return (<button className='square' onClick={onSquareClick}>{value}</button>);
}

export default Square;