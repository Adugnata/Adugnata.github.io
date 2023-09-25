<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Guest List</title>
    <!-- Include jQuery library for AJAX -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Include your JavaScript file for handling AJAX -->
    <script src="your-ajax-handler.js"></script>
</head>
<body>
<h1>Guest List</h1>
<ul id="guestList">
    <!-- Guest list items will be added here dynamically -->
</ul>
<h2>Add a Guest</h2>
<form id="addGuestForm">
    <input type="text" id="first" placeholder="First Name" required>
    <input type="text" id="last" placeholder="Last Name" required>
    <button type="submit">Add Guest</button>
</form>
</body>
</html>
