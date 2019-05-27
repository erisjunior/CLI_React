module.exports = {
  name: 'page',
  alias: ['p'],
  description: 'Create New Page inside src/components',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Page name must be passed!')
      return
    }

    await template.generate({
      template: 'component.js.ejs',
      target: `src/page/${name}/index.js`,
      props: { name }
    })
    await template.generate({
      template: 'styles.js.ejs',
      target: `src/page/${name}/styles.js`
    })

    success(`Page ${name} generated`)
  }
}
