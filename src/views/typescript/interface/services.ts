import InRequest from '@/utils/request';
// 枚举-接口api
enum Api {
    list = 'http://geek.itheima.net/v1_0/channels',
    save = '/test/jeecgDemo/add',
    edit = '/test/jeecgDemo/edit',
    get = '/test/jeecgDemo/queryById',
    delete = '/test/jeecgDemo/delete',
    deleteBatch = '/test/jeecgDemo/deleteBatch',
    exportXls = '/test/jeecgDemo/exportXls',
    importExcel = '/test/jeecgDemo/importExcel',
}


  /**
 * 保存或者更新示例
 * @param params
 */
export const saveOrUpdateDemo = (params) => {
    return InRequest.get({ url: Api.list, params });
};