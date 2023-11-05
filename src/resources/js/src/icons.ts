import { library } from '@fortawesome/fontawesome-svg-core'
import {
faCheck,
    faMinus,
    faPlus,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faTriangleExclamation,
    faPlus,
    faMinus,
    faCheck,
);

export default FontAwesomeIcon;

