import { userPicRegistry } from '../../UserPic.registry/mobile';
import { UserPicCamera } from '../../Camera/UserPic-Camera@mobile';

userPicRegistry.set('Camera', UserPicCamera);

export { userPicRegistry };
