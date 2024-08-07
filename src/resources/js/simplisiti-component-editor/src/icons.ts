import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowDownWideShort,
    faArrowsLeftRight,
    faArrowsLeftRightToLine,
    faArrowsUpToLine,
    faBars,
    faExpand,
    faGrip,
    faGripVertical,
    faObjectGroup,
    faTableCells,
    faXmark
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faXmark,
    faArrowsLeftRightToLine,
    faArrowsLeftRight,
    faArrowsUpToLine,
    faTableCells,
    faObjectGroup,
    faExpand,
    faGrip,
    faGripVertical,
    faBars,
    faArrowDownWideShort,
);

export default FontAwesomeIcon;

