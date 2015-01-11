/**
 * @author mugbya
 * @version  2015-01-08
 */
Ext.define('WFCore.common.GridPanel',{
    extend : 'Ext.gird.Panel',
    layout: 'border',
    initComponent: function () {
        var store = this.createStore();
        Ext.applyIf(this, {
            store: store
        });
        this.store.load();
        this.callParent(arguments);
    },
    createStore: function() {
        var store = Ext.create('Ext.data.Store', {
            model: this.dataModel,
            proxy: {
                type: 'ajax',
                url: YCUI.utils.Configuration.getAPI(this.api),
                reader: {
                    type: 'json',
                    rootProperty: 'result'
                }
            }
        });
        return store;
    }

});

 
