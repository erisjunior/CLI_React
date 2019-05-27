module.exports = {
  name: 'component',
  description: 'Create New Component inside src/components',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Component name must be passed!')
      return
    }

    await template.generate({
      template: 'component.js.ejs',
      target: `src/components/${name}/index.js`,
      props: { name }
    })
    await template.generate({
      template: 'styles.js.ejs',
      target: `src/components/${name}/styles.js`
    })

    success(`Component ${name} generated`)
  }
}
