/**
 * 响应数据类型
 */
export declare namespace RespDataType {
    export type RoleList = {
        name: string,
        id: string,
        description: string
    }[]
}

/**
 * 请求数据类型
 */
export declare namespace RequestDataType {
    export interface CreateUserInfo {
        userName: string;
        userEmail: string;
        userPhone: string;
    }

    export interface UpdateUserInfo {
        userName: string;
        userEmail: string;
        userPhone: string;
        userGroupIdList: string[];
        roleList: string[];
        webShell: boolean
    }
}
