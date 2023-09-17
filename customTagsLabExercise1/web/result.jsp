<%@ page import="java.util.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>

	<c:forEach var="style" items="${styles}">
	<br>try: ${style}
	</c:forEach>

	<br>email ${adminEmail}

</body>
</html>
