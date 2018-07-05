const prefix = '/mock/5aa7598d95543f7e60f67044/test' // api地址前缀
export default (config => {
    Object.keys(config).map(function(key){
        config[key] = `${prefix}${config[key]}`;
        return key;
    })
    return config
})({
    "getTestEnum": "/getTestEnum"
})