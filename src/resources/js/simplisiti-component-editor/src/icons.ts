import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowsLeftRight,
    faArrowsLeftRightToLine,
    faArrowsUpToLine,
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
    faObjectGroup
);

export default FontAwesomeIcon;

