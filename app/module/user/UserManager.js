/**
 * @author mugbya
 * @version  2015-01-06
 */
Ext.define('WFModule.user.UserManager', {
    extend: 'Ext.panel.Panel',
    title: '用户管理',
    layout: 'border',
    requires: [
        'WFModule.user.model.UserModel'
    ],
    initComponent: function () {

        this.initCompo();

        Ext.applyIf(this, {
            //tbar : [],
            items: [this.managerGrid]
        });

        this.callParent(arguments);
    },

    initCompo: function () {
        this.createManagerGrid();
    },

    createManagerGrid: function () {
        this.managerGrid = Ext.create('WFCore.common.GridPanel', {
            region: 'center',
            dataModel: 'WFModule.user.model.UserModel',
            api: 'user.getUsers',
            pageSize : 10,
            frame : true,
            forceFit : true,
            columns: [
                {
                    text: '姓名',
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    text: '邮箱',
                    dataIndex: 'email',
                    flex: 1
                },
                {
                    text : '联系电话',
                    dataIndex : 'phone',
                    flex : 1
                },
                {
                    text : '角色',
                    dataIndex : 'rolename',
                    flex : 1
                },
                {
                    text : '所属部门',
                    dataIndex : 'deptname',
                    flex : 1
                }
            ]
        });

    }
});
