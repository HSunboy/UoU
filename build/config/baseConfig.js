module.exports = {
    URLENV: JSON.stringify("pro"),
    process: {
        env: {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    }
};