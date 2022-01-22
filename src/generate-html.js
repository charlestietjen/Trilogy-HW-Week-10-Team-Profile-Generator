// const employees = require('./index')
const manIcon = '<i class="fas fa-user-tie"></i>';
const engIcon = '<i class="fas fa-user-cog"></i>';
const intIcon = '<i class="fas fa-user-graduate"></i>';

const renderIcon = title => {
    switch (title) {
        case 'Manager':
            return `<i class="fas fa-user-tie"></i>`
            break;
        case 'Engineer':
            return `<i class="fas fa-user-cog"></i>`
            break;
        case 'Intern':
            return `<i class="fas fa-user-graduate"></i>`
            break;
    }
}

const generateCards = employees => {
    return `
        ${employees
            .map(({ name, title, id, email, special }) => {
                return `
                <div class="card column is-narrow ml-2 mr-2">
                    <div class="card-header">
                        <h2 class="card-header-title is-centered is-size-4">${name}</h2>
                    </div>
                    <div class="card-content">
                        <h3 class="subtitle is-size-5"><span class="icon">${renderIcon(title)}</span> ${title}</h3>
                    </div>
                    <div class="card-content">
                        <ul class="box">
                            <li class="has-border">
                                ID: ${id}
                            </li>
                            <li class="has-border">
                                Email: <a href="mailto:${email}">${email}</a>
                            </li>
                            <li class="has-border">
                                ${special}
                            </li>
                        </ul>
                    </div>
                </div>
                `})
        .join('')}
`}

generateHTML = function(employees) {
    return `<!DOCTYPE html>
    <html>  <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./bulma.min.css">
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </head>
      <body>
      <section class="section">
        <div class="container">
          <h1 class="title">
            The Team
          </h1>
        </div>
      </section>
      <section>
          <div class="container columns">
            ${generateCards(employees)}              
          </div>
      </section>
      </body>
    </html>
    `
};

module.exports = generateHTML;