/**
 * @author mugbya
 * @version  2015-01-06
 */
Ext.define('WFCore.main.NavigatorPanel',{
    extend : 'Ext.tree.Panel',
    title: '组织结构',
    width: 250,
    split: true,
    collapsible: true,
    requires : [
        'WFCore.main.model.Module'
    ],

    initComponent : function(){

        var store = this.createStore();

        Ext.applyIf(this, {
            store : store,
            rootVisible : false,
            listeners : {
                itemclick : function(store, record){
                    if(record.data.isModule == true){
                        this.fireEvent('moduleSelectd',{
                            moduleId : record.data.id
                        });
                    }
                },
                scope : this
            }
        });

        this.callParent(arguments);
    },

    createStore : function(){
        var store = Ext.create('Ext.data.TreeStore',{
            model : 'WFCore.main.model.Module',
            proxy : {
                type : 'ajax',

                /**
                 * 这里的url是加载的本地的json数据
                 */
                url : WFCore.utils.Configuration.getAPI('module.getModules'),
                reader : {
                    type : 'json',
                    root : 'data'
                }
            },

            root : {
                text : 'WFModule',
                expanded : true
            }
        });

        return store;
    }
});