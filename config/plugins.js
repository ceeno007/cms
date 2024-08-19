module.exports = () => ({
    'users-permissions': {
        config: {
            jwtSecret: 'Jx29VAEeLF90CvPyKGo0/w==',
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: 'dskwy11us',
                api_key: '985823917354576',
                api_secret: '82K8ObjqVCNMpe2Qr5-0hDi4YMY',
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});
