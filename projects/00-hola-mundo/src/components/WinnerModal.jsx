import { Square } from './Square'

export function WinnerModal({winner, restartGame}) {

    if(winner === null) return null

    return (
        <section className="winner">
            <div className='text'>
                <h2> 
                {
                    winner === false ? 'Empate' : 'Ganador'
                }
                </h2>

                <header className='win'>
                {winner && <Square> {winner} </Square> }
                </header>
                
                <footer>
                <button onClick={restartGame}>
                    Reiniciar
                </button>
                </footer>
            </div>
        </section>
    )
}
