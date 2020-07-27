const employeeArr = require('../index');

const generateCards = teamData => {
    return ` 
    <div class="card" style="width: 18rem;">
        <h2>${job.name}</h2>
        <h4>Manager<h4>
        <p>ID: ${job.id}</p>
        <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
        <p>Office Number: ${job.office}</p>
    </div>
    `
}


module.exports = templateData => {
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names
    const { projects, about, ...header } = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en"> 

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        <nav class="flex-row">
        </nav>
        </div>
    </header>
    <main class="container my-5">

    </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Alvaro Saldana </h3>
        </footer>
    </body>
    </html>
    `;
};