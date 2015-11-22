module.exports = function (mini) {
    mini.use('/', require('./mini'));
    mini.use('/docs', require('./docs'));
    mini.use('/demoApp', require('./demoApp'));
    mini.use('/demoApp2', require('./demoApp2'));
    //mini.use('/wallet', require('./wallet'));
};