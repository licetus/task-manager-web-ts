#!/usr/local/bin/node

const fs = require('fs')
const commander = require('commander')
const { Template } = require('./templates/vue-templates')

commander
	.version('0.1.0')
	.option('-t, --test', 'This is test option')
	.option('-n, --view [name]', 'Add a new view [name]')
	.option('-c, --component [name]', 'Add a new componenet [name]')
	.parse(process.argv)

class ViewData {
	constructor(name, path) {
		this.name = name
		this.path = path
	}

	mkFile() {
		const viewPath = `${this.path}/${this.name}.vue`
		fs.open(viewPath, 'w', (err, fd) => {
			if (err) throw err
			const { buffer } = new Template(this.name)
			fs.write(fd, buffer, 0, buffer.length, 0, (err, written, buffer) => {})
		})
	}
}

if (commander.view) {
	const fileName = typeof commander.view === 'string' ? commander.view : 'new-view'
	const filePath = 'src/views'
	const view = new ViewData(fileName, filePath)
	view.mkFile()
}

if (commander.component) {
	const fileName = typeof commander.component === 'string' ? commander.component : 'new-component'
	const filePath = 'src/components'
	const view = new ViewData(fileName, filePath)
	view.mkFile()
}

