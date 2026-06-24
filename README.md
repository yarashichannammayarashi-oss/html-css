<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attr DOM</title>
</head>
<body>
    <a href="https://www.kodnest.com">Click to visit kodnest</a>
    <br>
    <br>
    <button onclick="setattr()">set attr</button>
    <button onclick="getattr()">get attr</button>
    <button onclick="removeattr()">remove attr</button>
    <script>
        let link = document.querySelector("a");
        function setattr() {
            link.setAttribute("href", "https://www.instagram.com")
            link.innerText = "click to visit instagram";
        }
        function getattr() {
            let url = link.getAttribute("href");
            alert("The url is " + url);
        }
        function removeattr() {
            let url = link.removeAttribute("href");
            alert("The href attr is removed");
        }
    </script>
</body>
</html>
