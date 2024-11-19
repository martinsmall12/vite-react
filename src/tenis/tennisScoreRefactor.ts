type PlayerScore = 0 | 1 | 2 | 3 | 4 | number;

// Konstanty pro řetězce
const SCORES: { [key in PlayerScore]?: string } = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty",
};

const TIE_SCORES: { [key in PlayerScore]?: string } = {
    0: "Love-All",
    1: "Fifteen-All",
    2: "Thirty-All",
};

const DEUCE = "Deuce";
const ADVANTAGE_PLAYER1 = "Advantage player1";
const ADVANTAGE_PLAYER2 = "Advantage player2";
const WIN_PLAYER1 = "Win for player1";
const WIN_PLAYER2 = "Win for player2";

export function getScore(player1Score: PlayerScore, player2Score: PlayerScore): string {
    if (player1Score === player2Score) {
        return getTieScore(player1Score);
    }

    if (player1Score >= 4 || player2Score >= 4) {
        return getHighScore(player1Score, player2Score);
    }

    return getStandardScore(player1Score, player2Score);
}

function getTieScore(score: PlayerScore): string {
    return TIE_SCORES[score] || DEUCE;
}

function getHighScore(player1Score: PlayerScore, player2Score: PlayerScore): string {
    const scoreDifference = player1Score - player2Score;

    if (scoreDifference === 1) return ADVANTAGE_PLAYER1;
    if (scoreDifference === -1) return ADVANTAGE_PLAYER2;
    if (scoreDifference >= 2) return WIN_PLAYER1;
    return WIN_PLAYER2;
}

function getStandardScore(player1Score: PlayerScore, player2Score: PlayerScore): string {
    const player1 = SCORES[player1Score] || "";
    const player2 = SCORES[player2Score] || "";

    return `${player1}-${player2}`;
}
