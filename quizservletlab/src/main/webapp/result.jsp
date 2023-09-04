<!DOCTYPE html>
<html>
<head>
    <title>The Number Quiz - Result</title>
</head>
<body>
<h1>The Number Quiz</h1>
<p>Your current score is <%= request.getAttribute("score") %>.</p>
<p>You have completed the Number Quiz, with a score of <%= request.getAttribute("score") %> out of 5.</p>
<p>Good job!</p>
</body>
</html>
