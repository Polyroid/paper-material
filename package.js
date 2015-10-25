Package.describe({
    name: 'polyroid:paper-material',
    version: '1.0.3',
    summary: 'A material design container that looks like a lifted sheet of paper',
    git: 'https://github.com/Polyroid/paper-material.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:paper-styles@1.0.0'
    ], 'client');

    api.addAssets([
        'paper-material.html'
    ], 'client');
});
