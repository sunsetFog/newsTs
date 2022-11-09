import InRequest from '@/utils/request/Axios';
// 枚举-接口api
enum Api {
    list = '/sky/shop/list',
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
    let url = Api.list;
    return InRequest.post({ url: url, params });
};