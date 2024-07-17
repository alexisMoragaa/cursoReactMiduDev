// Componente para construir las celdas del tablero
export  const Square = ({children, isSelected, updateBoard, index}) => {
    // Clase CSS para la celda, añade 'is-selected' si está seleccionada
    const className = `square ${isSelected ? 'is-selected' : '' }` 

    // Maneja el clic en la celda
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}
