import React from 'react';

import { PlayerFleet } from '../PlayerFleet';
import { PlayerBoard } from './DifficultPlayerBoard';
import { ComputerBoard } from './DifficultComputerBoard';
import { PlayerTips } from '../PlayerTips';

const tipo = 'difficult';

export const DifficultGameView = ({
  availableShips,
  selectShip,
  currentlyPlacing,
  setCurrentlyPlacing,
  rotateShip,
  placeShip,
  placedShips,
  startTurn,
  computerShips,
  gameState,
  changeTurn,
  hitComputer,
  hitsByPlayer,
  setHitsByPlayer,
  hitsByComputer,
  handleComputerTurn,
  checkIfGameOver,
  winner,
  startAgain,
  setComputerShips,
}) => {
  return (
    <>
    <h1 className="games" align='center'>Modo Difícil 💀</h1>
    <br></br>
    <h3 className='election'>
        En este modo de juego se mostrará un tablero de 15x15 en el que tendrás que adivinar la posición de los 6 barcos del oponente (ahora de menor dimensión).
    </h3>
    <section id="game-screen">
      {gameState !== 'placement' ? (
        <PlayerTips
          gameState={gameState}
          hitsbyPlayer={hitsByPlayer}
          hitsByComputer={hitsByComputer}
          winner={winner}
          startAgain={startAgain}
        />
      ) : (
        <PlayerFleet
          availableShips={availableShips}
          selectShip={selectShip}
          currentlyPlacing={currentlyPlacing}
          startTurn={startTurn}
          startAgain={startAgain}
        />
      )}

      <PlayerBoard
        currentlyPlacing={currentlyPlacing}
        setCurrentlyPlacing={setCurrentlyPlacing}
        rotateShip={rotateShip}
        placeShip={placeShip}
        placedShips={placedShips}
        hitsByComputer={hitsByComputer}
        tipo={tipo}
      />
      <ComputerBoard
        computerShips={computerShips}
        changeTurn={changeTurn}
        gameState={gameState}
        hitComputer={hitComputer}
        hitsByPlayer={hitsByPlayer}
        setHitsByPlayer={setHitsByPlayer}
        handleComputerTurn={handleComputerTurn}
        checkIfGameOver={checkIfGameOver}
        setComputerShips={setComputerShips}
      />
    </section>
    </>
  );
};

export default DifficultGameView;