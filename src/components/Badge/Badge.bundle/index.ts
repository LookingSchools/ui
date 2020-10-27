import { compose } from "@bem-react/core";

import { Badge as BadgeBase } from "../Badge";

// _type
import { withTypeDot } from "../_type/Badge_type_dot";

// _direction
import { withDirectionTopRight } from "../_direction/Badge_direction_top-right";

export * from "../Badge";

export const Badge = compose(withTypeDot, withDirectionTopRight)(BadgeBase);
