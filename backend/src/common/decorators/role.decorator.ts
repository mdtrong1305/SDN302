import { SetMetadata } from '@nestjs/common';

export const IS_ROLE = 'isRole';

export type RoleType = 'ADMIN' | 'CUSTOMER';

export const Role = (roleType: RoleType) => SetMetadata(IS_ROLE, roleType);
