module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	less: {
		development: {
			options: {
			    paths: ["static/css/less/"]
			},
			files: {
			    "static/css/guerilla.css": "static/css/less/styles.less"
			}
		}
	}
	});

	// Load packages
	grunt.loadNpmTasks('grunt-contrib-less');
	// Default tasks
	grunt.registerTask('default', [
		'less'
	]);

};