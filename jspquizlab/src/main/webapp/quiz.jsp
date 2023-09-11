<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>The Number Quiz</title>
</head>
<body>
<h1>The Number Quiz</h1>
<form action="QuizServlet" method="post">
    <p>Your current score is ${score}</p>
    <p>Guess the next number in the sequence:</p>
    <p>${currentQuestion}</p>
    <p>Your answer: <input type="text" name="userAnswer"></p>
    <p><input type="submit" value="Submit"></p>
    <p><input type="hidden" name="questionIndex" value="${questionIndex}"></p>
    <p><input type="hidden" name="tries" value="${tries}"></p>
    <p><input type="hidden" name="age" value="${age}"></p>
    <p>${hint}</p>
</form>
</body>
</html>
