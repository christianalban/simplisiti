import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faMinus,
    faPlus,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faTriangleExclamation,
    faPlus,
    faMinus,
);

export default FontAwesomeIcon;

