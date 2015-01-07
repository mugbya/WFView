/**
 * @author mugbya
 * @version  2015-01-06
 */
/*
 * App 主界面
 */
Ext.define('WFCore.main.MainPanel', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires : [
        'WFCore.main.Header'
    ],
    /*
     * initComponet可以视作初始化方法
     * 派生自ExtJS UI类的子类，都可以通过重载此方法，来进行初始化工作
     * 在initComponet调用之前，外面传入的参数实际apply到当前对象了，因此可以直接通过this获取
     * 例如下面的 html: this.title，这里的title由外接传入
     */
    initComponent: function () {

        /**
         * 使能字体图标
         */
        Ext.setGlyphFontFamily('FontAwesome');

        //左侧导航区域
        this.navigatorPanel = Ext.create('WFCore.main.NavigatorPanel', {
            region: 'west'
        });

       this.navigatorPanel.on('moduleSelected', this.moduleSelected, this);  // 绑定事件

        //右侧工作区
        this.workspacePanel = Ext.create('WFCore.main.WorkspacePanel', {
            region: 'center'
        });

        Ext.applyIf(this, {
            items: [{
                region: 'north',
                xtype : 'app-header'
            },this.navigatorPanel,
              this.workspacePanel
            ]
        });

        /*
         * 由于是重载Ext.container.Viewport的initComponet，因此，需要调用父类的此方法
         * this.callParent，实际就是调用调用了Ext.container.Viewport的initComponent方法
         */
        this.callParent(arguments);
    },
    /*
     * 处理模块选中事件，类似监听
     */
    moduleSelected: function(params) {
        this.workspacePanel.openModule(params.moduleId);
    }
});