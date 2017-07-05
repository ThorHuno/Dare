module.exports = {
    entry: './app/components/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        alias: {
            ListadoParticipantes: 'app/components/listadoParticipantes.jsx',
            Participante: 'app/components/participante.jsx',
            Constantes: 'app/constants/constants.js',
            ParticipantesReducer: 'app/reducers/participantes.reducer.jsx',
            ParticipantesAction: 'app/actions/participantes.action.jsx',
            ConfigureStore: 'app/store/store.config.jsx',
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};