import {getScore} from "../tennisScore";


describe('Tennis Game - getScore function', () => {
    test('0-0 should return "Love-All"', () => {
        expect(getScore(0, 0)).toBe("Love-All");
    });

    test('1-1 should return "Fifteen-All"', () => {
        expect(getScore(1, 1)).toBe("Fifteen-All");
    });

    test('2-2 should return "Thirty-All"', () => {
        expect(getScore(2, 2)).toBe("Thirty-All");
    });

    test('3-3 should return "Deuce"', () => {
        expect(getScore(3, 3)).toBe("Deuce");
    });

    test('4-4 should return "Deuce"', () => {
        expect(getScore(4, 4)).toBe("Deuce");
    });

    test('1-0 should return "Fifteen-Love"', () => {
        expect(getScore(1, 0)).toBe("Fifteen-Love");
    });

    test('2-1 should return "Thirty-Fifteen"', () => {
        expect(getScore(2, 1)).toBe("Thirty-Fifteen");
    });

    test('3-2 should return "Forty-Thirty"', () => {
        expect(getScore(3, 2)).toBe("Forty-Thirty");
    });

    test('4-3 should return "Advantage player1"', () => {
        expect(getScore(4, 3)).toBe("Advantage player1");
    });

    test('3-4 should return "Advantage player2"', () => {
        expect(getScore(3, 4)).toBe("Advantage player2");
    });

    test('5-3 should return "Win for player1"', () => {
        expect(getScore(5, 3)).toBe("Win for player1");
    });

    test('3-5 should return "Win for player2"', () => {
        expect(getScore(3, 5)).toBe("Win for player2");
    });

    test('4-0 should return "Win for player1"', () => {
        expect(getScore(4, 0)).toBe("Win for player1");
    });

    test('0-4 should return "Win for player2"', () => {
        expect(getScore(0, 4)).toBe("Win for player2");
    });

    test('2-3 should return "Thirty-Forty"', () => {
        expect(getScore(2, 3)).toBe("Thirty-Forty");
    });

    test('1-3 should return "Fifteen-Forty"', () => {
        expect(getScore(1, 3)).toBe("Fifteen-Forty");
    });
});
