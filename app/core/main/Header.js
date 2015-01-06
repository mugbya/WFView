/**
 * @author mugbya
 * @version  2015-01-07
 */
Ext.define('WFCore.main.Header',{
    extend: 'Ext.Container',
    xtype: 'app-header',
    cls:'app-header',
    height: 100,
    padding: 20,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    items:[{
        xtype: 'component',
        cls: 'app-header-logo'
    },{
        xtype: 'component',
        cls: 'app-header-title',
        html : 'Activiti工作流前端界面示例',
        flex: 1
    }]
});