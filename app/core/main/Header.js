/**
 * @author mugbya
 * @version  2015-01-07
 */
Ext.define('WFCore.main.Header',{
    extend : 'Ext.toolbar.Toolbar',
    xtype: 'app-header',
    cls:'app-header',
    height: 100,
    padding: 20,
    requires : [
        'WFCore.widget.ButtonTransparent'
    ],

    defaults : {
        xtype : 'buttontransparent'
    },

    items:[{
        xtype: 'image',
        cls: 'app-header-logo',
        bind : {
            hidden : '{!system.logoUrl}',
            src : '{system.logoUrl}'
        }
    },{
        xtype: 'label',
        cls: 'app-header-title',
        html : 'Activiti工作流前端界面示例',
        flex: 1
    },'->',{
                text : '注销',
                glyph : 0xf011
    },{
                text : '设置',
                glyph : 0xf013,
                items : [{
                    text : '颜色'
                },{
                    text : '颜色'
                }]
    }]

});