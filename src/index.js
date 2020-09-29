const { Provider } = require('oidc-provider');

const configuration = {
    clients: [{
        client_id: 'foo',
        client_secret: 'bar',
        redirect_uris: ['http://wosome.ooo/cb'],
    }],
};

const oidc = new Provider('http://localhost:3000', configuration);

oidc.listen(3000, () => {
    console.log('oidc-provider listening on port 3000, check http://localhost:3000/.well-known/openid-configuration');
});