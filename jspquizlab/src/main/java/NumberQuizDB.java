import java.util.ArrayList;
import java.util.List;

public class NumberQuizDB {
    private static List<String> questions = new ArrayList<>();
    private static List<Integer> answers = new ArrayList<>();

    static {
        questions.add("3, 1, 4, 1, 5"); // pi
        questions.add("1, 1, 2, 3, 5"); // fibonacci
        questions.add("1, 4, 9, 16, 25"); // squares
        questions.add("2, 3, 5, 7, 11"); // primes
        questions.add("1, 2, 4, 8, 16"); // powers of 2

        answers.add(9);
        answers.add(8);
        answers.add(36);
        answers.add(13);
        answers.add(32);
    }

    public static List<String> getQuestions() {
        return questions;
    }

    public static List<Integer> getAnswers() {
        return answers;
    }
}
