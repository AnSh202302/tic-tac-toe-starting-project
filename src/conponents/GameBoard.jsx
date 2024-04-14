const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((pleyerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{pleyerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
export default GameBoard;
