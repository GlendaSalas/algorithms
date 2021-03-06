module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    'rules': {
		"no-tabs": "off",
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': "off",
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
};
