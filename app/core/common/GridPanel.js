/**
 * @author mugbya
 * @version  2015-01-08
 */
Ext.define('WFCore.common.GridPanel',{
    extend : 'Ext.grid.Panel',
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
                url: WFCore.utils.Configuration.getAPI(this.api),
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        });
        return store;
    }

});

 
