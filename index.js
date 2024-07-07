#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { stdin: input, stdout: output } = require('process')

const rl = readline.createInterface({ input, output })
rl.question('Enter project name: ', (projectName) => {
  fs.mkdirSync(projectName)

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName}</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>${projectName}</h1>
  
  <script src="script.js"></script>
</body>
</html>`

  fs.writeFileSync(path.join(projectName, 'index.html'), htmlContent)
  fs.writeFileSync(
    path.join(projectName, 'style.css'),
    `/* Styles for ${projectName}*/`
  )
  fs.writeFileSync(
    path.join(projectName, 'script.js'),
    `// Scripts for ${projectName}`
  )

  console.log('Project has been created!')
  rl.close()
})
