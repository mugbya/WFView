/**
 * @author mugbya
 * @version  2015-01-06
 */

/**
 * Set the configuration for the loader.
 * This should be called right after ext-(debug).js is included in the page, and before Ext.onReady.
 *
 * 注意： 某些版本的ext-all 可能没有Loader这个类
 */
Ext.Loader.setConfig({
    enabled : true,
    paths : {
        /**
         *  设置WFUI 以及 WFTrade命名空间对应的路径
         */
        WFCore : 'app/core',
        WFModule : 'app/module'
    }
});

/**
 * Loads Ext.app.Application class and starts it up with given configuration after the page is ready.
 */
Ext.application({
    name : 'WFApp',
    start : function(){
        /**
         * 启动主界面
         */
        Ext.create('WFCore.main.MainPanel');
    },

    /**
     * Called automatically when the page has completely loaded.
     * This is an empty function that should be overridden by each application that needs to take action on page load.
     */
    launch : function(){
        /**
         * Loads all classes by the given names and all their direct dependencies;
         * optionally executes the given callback function when finishes, within the optional scope.
         */
        Ext.require('WFCore.utils.Configuration',this.start, this);
    }

});

