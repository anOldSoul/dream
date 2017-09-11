// 包装函数
module.exports = function(grunt) {
    // 任务配置
    grunt.initConfig({
        'hello-world':{}
    });
    // 自定义任务
    grunt.registerTask('hello-world', 'My "asyncfoo" task.', function() {
        grunt.log.writeln('hello world');
    });
    grunt.registerTask('build', ['clean','copy','webpack']);

    grunt.registerTask('default', ['hello-world']);
};