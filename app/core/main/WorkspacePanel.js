/**
 * @author mugbya
 * @version  2015-01-06
 *
 * 工作区域界面
 */
Ext.define('WFCore.main.WorkspacePanel',{
    extend : 'Ext.tab.Panel',
    idPrefix : 'Workspace_',
    initComponent : function(){
        Ext.applyIf(this, {
            /**
             * -- id: 'MainTabPanel',
             * 由于ExtJS的开发习惯是高度模块化，重用度很高，因此一定不要使用id，否则会出现DOM ID污染
             * 也就是说不要通过id来标示、查找对象，尽量使用对象本身
             * 对于items一类的“无对象引用”的元素，使用itemId来标示
             * 总之，一定不要使用id
             */
            items : []
        });

        this.callParent(arguments);
    },

    getWorkspaceId : function (moduleId) {
        return this.idPrefix + moduleId;
    },
    
    getWorkspace : function (moduleId) {
        var workspaceId = this.getWorkspaceId(moduleId);

        /**
         * itemId对getComponent查找是有效的
         */
        var workspace = this.getComponent(workspaceId);

        return workspace;
    },
    
    openModule : function (moduleId) {
        var workspace = this.getWorkspace(moduleId);

        if(Ext.isDefined(workspace)) {
            this.setActiveTab(workspace);
            return;
        }
        var workspaceId = this.getWorkspaceId(moduleId);
        var newWorkspace = Ext.create(moduleId, {
            closable : true,
            /*
             * 这里就是上面说的，用itemId来替代id
             */
            itemId: workspaceId
        });
        this.add(newWorkspace);
        this.setActiveTab(newWorkspace);

    }
});