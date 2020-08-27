const movementChess = "Bishop";

switch (movementChess.toLowerCase()) {
    case 'bishop':
        console.log('diagonals');
        break;
    case 'pawn':
        console.log('a house forward');
        break;
    case 'tower':
        console.log('top, left, right, down');
        break;
    case 'horse':
        console.log('movement L');
        break;
    case 'lady':
        console.log('any direction');
        break;
    case 'king':
        console.log('any direction just one house');
        break;
    default:
        console.log('this piece does not exist')
        break;
}