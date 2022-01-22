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

generateHtml = function(employees, title) {
    return `
<!DOCTYPE html>
<html>  
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="./bulma.min.css">
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </head>
    <body>
        <section class="hero is-small is-info mb-6">
            <div class="hero-body">
                <p class="title has-text-centered">
                    ${title}
                </p>
            </div>
        </section>
        <section class="container">
            <div class="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-evenly">
                ${generateCards(employees)}              
            </div>
        </section>
    </body>
</html>
    `
};

module.exports = generateHtml;