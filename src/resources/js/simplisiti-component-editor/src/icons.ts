import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowsLeftRightToLine,
    faSquareFull,
    faTableCells,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faXmark,
    faArrowsLeftRightToLine,
    faTableCells,
    faSquareFull,
);

export default FontAwesomeIcon;

