package cs472.miu;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/NumberQuizServlet")
public class NumberQuizServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();

        // Check if the quiz object is already in the session, and if not, create a new one
        Quiz quiz = (Quiz) session.getAttribute("quiz");
        if (quiz == null) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        }

        int currentQuestion = quiz.getCurrentQuestion();
        if (currentQuestion < Quiz.questions.length) {
            String question = Quiz.questions[currentQuestion];
            request.setAttribute("question", question);
            request.getRequestDispatcher("quiz.jsp").forward(request, response);
        } else {
            // Quiz completed, display the result
            int score = quiz.getScore();
            request.setAttribute("score", score);
            request.getRequestDispatcher("result.jsp").forward(request, response);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        // Get the user's answer from the submitted form
        int userAnswer = Integer.parseInt(request.getParameter("userAnswer"));

        // Check if the answer is correct
        if (quiz.checkAnswer(userAnswer)) {
            quiz.incrementScore();
        }

        // Move to the next question
        quiz.nextQuestion();

        response.sendRedirect("NumberQuizServlet");
    }
}
