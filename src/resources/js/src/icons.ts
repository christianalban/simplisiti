import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCheck,
    faFileInvoice,
    faMinus,
    faPlus,
    faTrash,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faTriangleExclamation,
    faPlus,
    faMinus,
    faCheck,
    faTrash,
    faFileInvoice,
);

export default FontAwesomeIcon;

