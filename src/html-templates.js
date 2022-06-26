const makeTeam = team => {

  const generateManagerCard = manager => {
    return `
      <div class = "col col-lg-4 d-flex justify-content-center">
        <div class="card personalshadow mb-5 bg-white" style="width: 20rem;">
        <div class="card-body text-white bg-primary" style = "height: 8rem;">
          <h5 class="card-title fs-2">${manager.name}</h5>
          <h5 class="card-title fs-2">♚ Manager</h5>
        </div>
        <ul class="list-group list-group-flush" style = "height: 12rem;">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${manager.email}" target= "_blank">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
      </div>
      `
  }

  const generateEngineerCard = engineer => {
    return `
      <div class = "col col-lg-4 d-flex justify-content-center">
        <div class="card personalshadow mb-5 bg-white" style="width: 20rem;">
        <div class="card-body text-white bg-primary" style = "height: 8rem;">
          <h5 class="card-title fs-2">${engineer.name}</h5>
          <h5 class="card-title fs-2">♞ Engineer</h5>
        </div>
        <ul class="list-group list-group-flush" style = "height: 12rem;">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${engineer.email}" target= "_blank">${engineer.email}</a></li>
          <li class="list-group-item">GitHub: <a href = "https://github.com/${engineer.github}" target = "_blank">https://github.com/${engineer.github}</a></li>
        </ul>
        </div>
      </div>
      `
  }

  const generateInternCard = intern => {
    return `
      <div class = "col col-lg-4 d-flex justify-content-center">
        <div class="card personalshadow mb-5 bg-white" style="width: 20rem;">
        <div class="card-body text-white bg-primary" style = "height: 8rem;">
          <h5 class="card-title fs-2">${intern.name}</h5>
          <h5 class="card-title fs-2">♙ Intern</h5>
        </div>
        <ul class="list-group list-group-flush" style = "height: 12rem;">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${intern.email}" target= "_blank">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
      </div>
      `
  }

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
  );

  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer)).join("")
  );

  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateInternCard(intern)).join("")
  );



  return html.join("")

}

module.exports = team => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- bootstrap link -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link href = "../assets/css/style.css" type="text/css" rel = "stylesheet">

  <title>Team Roster Generator</title>
</head>
<body>
<header class = "d-flex align-items-center justify-content-center bg-danger text-white fs-1 mb-5" style = "height: 13vh">My Team</header>
<div class = "container" style = "width: 800px; height: 1000px;">
  <div class = "row d-flex justify-content-center flex-wrap ">
    ${makeTeam(team)}
  </div>
</div>
</body>
</html>
  `
}
