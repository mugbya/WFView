/**
 * @author mugbya
 * @version  2015-01-06
 */
Ext.define('WFModule.user.UserManager',{
    extend : 'Ext.panel.Panel',
    title : '用户管理',
    layout : 'border',

    initComponent : function () {
        
        this.initCompo();
        
        Ext.applyIf(this,{
            tbar : [],
            items : [this.managerGrid]
        });

        this.callParent(arguments);
    },
    
    initCompo : function () {
      this.managerGrid = this.createManagerGrid();  
    },
    
    createManagerGrid : function () {

    }
});
