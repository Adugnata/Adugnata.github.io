package cs472.miu;

public class Quiz {
    private int currentQuestion;
    private int score;
    public static final String[] questions = {
            "3, 1, 4, 1, 5", // pi
            "1, 1, 2, 3, 5", // fibonacci
            "1, 4, 9, 16, 25", // squares
            "2, 3, 5, 7, 11", // primes
            "1, 2, 4, 8, 16" // powers of 2
    };
    public static final int[] answers = {9, 8, 36, 13, 32};

    public Quiz() {
        this.currentQuestion = 0;
        this.score = 0;
    }

    public int getCurrentQuestion() {
        return currentQuestion;
    }

    public int getScore() {
        return score;
    }

    public void incrementScore() {
        score++;
    }

    public void nextQuestion() {
        currentQuestion++;
    }

    public boolean checkAnswer(int userAnswer) {
        int correctAnswer = answers[currentQuestion];
        return userAnswer == correctAnswer;
    }
}
