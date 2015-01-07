/**
 * @author mugbya
 * @version  2015-01-07
 *
 *  定义透明按钮组件
 *
 *  参见：http://blog.csdn.net/jfok/article/details/36171753
 */

Ext.define('WFCore.widget.ButtonTransparent',{
    extend : 'Ext.button.Button',
    xtype : 'buttontransparent',
    initComponent : function () {
        this.listeners = {
            mouseout : function () {
                this.setTransparent(document.getElementById(this.id));
            },

            mouseover : function () {
                var btn = document.getElementById(this.id);
                btn.style.backgroundImage = '';
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
            },

            afterrender : function() {
                this.setTransparent(document.getElementById(this.id));
            }
        };

        this.callParent(arguments);
    },

    setTransparent : function (btn) {
        btn.style.backgroundImage = 'inherit';
        btn.style.backgroundColor = 'inherit';
        btn.style.borderColor = 'transparent';
    }
});
