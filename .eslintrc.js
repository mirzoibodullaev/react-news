module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ["plugin:react/recommended", "react-app"],
    overrides: [],

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
    },
};
