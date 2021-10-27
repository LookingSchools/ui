import { withRegistry } from '@bem-react/di';

import { userPicRegistry } from './UserPic.registry/mobile';
import { UserPic as UserPicCommon } from './UserPic';

import './UserPic@mobile.scss';

export * from './UserPic';
export const UserPic = withRegistry(userPicRegistry)(UserPicCommon);
