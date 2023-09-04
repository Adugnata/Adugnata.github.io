<!DOCTYPE html>
<html>
<head>
    <title>The Number Quiz</title>
</head>
<body>
<h1>The Number Quiz</h1>
<p>Your current score is <%= request.getAttribute("score") %>.</p>
<p>Guess the next number in the sequence:</p>
<p><%= request.getAttribute("question") %></p>
<form action="NumberQuizServlet" method="post">
    <label>Your answer: <input type="text" name="userAnswer"></label>
    <input type="submit" value="Submit">
</form>
</body>
</html>
