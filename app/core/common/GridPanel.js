/**
 * @author mugbya
 * @version  2015-01-08
 */
Ext.define('WFCore.common.GridPanel',{
    extend : 'Ext.grid.Panel',
    layout: 'border',
    requires : [
        'WFCore.widget.PagingToolbar'
    ],
    initComponent: function () {
        var store = this.createStore();
        Ext.applyIf(this, {
            store: store,
            dockedItems : [{
                xtype : 'gridPagingtoolbar', // 按钮toolbar
                dock : 'bottom',
                store : store,
                //pageSize : this.pageSize
            }]
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
                actionMethods : {
                    read : 'POST'   // use HTTP POST when making the AJAX request
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty : 'totalCounts'
                },
                startParam : ''
            },
            autoSync : false,
            pageSize : this.pageSize,

            /**
             * 更改数据提交的方式，true表示为JSON，false表示为form
             */
            jsonContentType:function(flag){
                this.proxy.actionMethods.read="POST"
                if(flag){
                    this.proxy.headers={
                        'Content-Type': "application/json;charset=utf-8",
                        'mimeType': 'application/json'
                    }
                    this.proxy.paramsAsJson = true;
                }  else{
                    this.proxy.paramsAsJson = false;
                }
            },//function jsonContentType end

            search:function(condition){
                this.currentPage = 1;
                this.proxy.extraParams = condition;
                this.load();
            }

        });//function createStore  end
        /**
         * 更改消息头，使发送请求的数据作为JSON
         * store不能使用autoLoad
         */
        store.jsonContentType(false);

        return store;
    }

});

 
