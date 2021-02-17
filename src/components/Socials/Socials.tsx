import React, { FC } from 'react';
import { compose, composeU } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Link } from '../Link/Link.bundle';
import { Icon as IconBase, IIconProps } from '../Icon/Icon';

// social
import { withSocialYouTube } from '../Icon/_social/Icon_social_youtube';
import { withSocialVK } from '../Icon/_social/Icon_social_vk';
import { withSocialTelegram } from '../Icon/_social/Icon_social_telegram';
import { withSocialTwitter } from '../Icon/_social/Icon_social_twitter';
import { withSocialRSS } from '../Icon/_social/Icon_social_rss';
import { withSocialGitHub } from '../Icon/_social/Icon_social_github';
import { withSocialFacebook } from '../Icon/_social/Icon_social_facebook';
import { withSocialInstagram } from '../Icon/_social/Icon_social_instagram';

const Icon = compose(
    composeU(
        withSocialYouTube,
        withSocialVK,
        withSocialTelegram,
        withSocialRSS,
        withSocialTwitter,
        withSocialGitHub,
        withSocialFacebook,
        withSocialInstagram
    )
)(IconBase) as FC<IIconProps>;

import './Socials.scss';

export const cnSocials = cn('Socials');

export interface ISocialsProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
    /**
     * Массив иконок для отображения.
     */
    icons?: Array<string>;
}

export const Socials: FC<ISocialsProps> = ({ className, icons = [], ...props }) => {
    return (
        <div {...props} className={cnSocials(null, [className])}>
            {icons.map((icon: string, key: number) => (
                <Link pseudo href="#" className={cnSocials('Link')} key={key}>
                    <Icon social={icon} size="m" />
                </Link>
            ))}
        </div>
    );
};

Socials.displayName = cnSocials();
