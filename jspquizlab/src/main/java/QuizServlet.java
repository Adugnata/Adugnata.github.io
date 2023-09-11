import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet("/QuizServlet")
public class QuizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        List<String> questions = NumberQuizDB.getQuestions();
        List<Integer> answers = NumberQuizDB.getAnswers();
        int questionIndex = (int) session.getAttribute("questionIndex");
        int score = (int) session.getAttribute("score");
        int tries = (int) session.getAttribute("tries");
        String hint = "";

        // Get user input
        String userAnswerStr = request.getParameter("userAnswer");

        // Validate and convert user's age input
        String ageStr = request.getParameter("age");
        int age = -1;
        try {
            age = Integer.parseInt(ageStr);
            if (age < 4 || age > 100) {
                throw new NumberFormatException();
            }
        } catch (NumberFormatException e) {
            response.sendRedirect("quiz.jsp?error=InvalidAge");
            return;
        }

        // Check if the user answer is correct
        if (userAnswerStr != null && !userAnswerStr.isEmpty()) {
            int userAnswer = Integer.parseInt(userAnswerStr);
            if (userAnswer == answers.get(questionIndex)) {
                if (tries == 0) {
                    score += 10;
                } else if (tries == 1) {
                    score += 5;
                } else if (tries == 2) {
                    score += 2;
                }
                questionIndex++;
                tries = 0;
            } else {
                tries++;
            }
        }

        // Provide a hint (optional)
        if (request.getParameter("hint") != null) {
            // Add hint logic here (e.g., based on the current question)
            hint = "Hint: This is a hint for the current question.";
        }

        // Check if the quiz is completed
        if (questionIndex >= questions.size()) {
            String finalGrade;
            if (score >= 45) {
                finalGrade = "A";
            } else if (score >= 35) {
                finalGrade = "B";
            } else if (score >= 25) {
                finalGrade = "C";
            } else {
                finalGrade = "NC";
            }

            session.invalidate(); // Clear session data
            request.setAttribute("finalGrade", finalGrade);
            request.getRequestDispatcher("quiz_completed.jsp").forward(request, response);
            return;
        }

        session.setAttribute("questionIndex", questionIndex);
        session.setAttribute("score", score);
        session.setAttribute("tries", tries);
        session.setAttribute("age", age);
        session.setAttribute("currentQuestion", questions.get(questionIndex));
        session.setAttribute("hint", hint);

        request.getRequestDispatcher("quiz.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.setAttribute("questionIndex", 0);
        session.setAttribute("score", 0);
        session.setAttribute("tries", 0);
        session.setAttribute("age", 0);
        session.setAttribute("currentQuestion", NumberQuizDB.getQuestions().get(0));
        session.setAttribute("hint", "");

        request.getRequestDispatcher("quiz.jsp").forward(request, response);
    }
}
