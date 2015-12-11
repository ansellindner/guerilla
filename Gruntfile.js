module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	less: {
		development: {
			options: {
			    paths: ["app/public/css/less/"]
			},
			files: {
			    "app/public/css/guerilla.css": "app/public/css/less/styles.less"
			}
		}
	},
	watch: {
		less: {
			
		}
	}
	});

	// Load packages
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default tasks
	grunt.registerTask('default', [
		'less',
		'watch'
	]);

};