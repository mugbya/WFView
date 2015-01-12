/**
 * @author mugbya
 * @version  2015-01-08
 *
 * 分页工具条组件
 */
Ext.define('WFCore.widget.PagingToolbar',{
    extend : 'Ext.toolbar.Paging',
    alias : 'widget.gridPagingtoolbar',
//    xtype : 'gridPagingtoolbar',
    store : this.store,
    displayInfo : true,
    displayMsg : '当前显示的数据为 {0} - {1}, 共{2}条数据',
    emptyMsg : '没有可以显示的数据',
    beforePageText:'页',
    afterPageText:'总共{0}页',
    prevText : '上一页',
    nextText : '下一页',
    firstText:'第一页',
    lastText : '最后页',
    refreshText : '刷新'
});
