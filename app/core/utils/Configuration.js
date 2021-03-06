/**
 * @author mugbya
 * @version  2015-01-06
 */

/*
 * 全局配置类，可以存储或处理一些全局的配置信息
 */
Ext.define('WFCore.utils.Configuration', {
    singleton: true,
    properties: {},
    apiPrefix: 'api/',
    set: function(name, value) {
        this.properties[name] = value;
    },
    get: function(name) {
        return this.properties[name];
    },
    getAPI: function(name) {
        name = name.replace(/\./g, '/');
        return this.apiPrefix + name + '.json'
    }
});