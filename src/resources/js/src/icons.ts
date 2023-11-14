import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
    faCheck,
    faCircleCheck,
    faFileInvoice,
    faMinus,
    faPlus,
    faTrash,
    faTriangleExclamation,
    faEdit
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faTriangleExclamation,
    faPlus,
    faMinus,
    faCheck,
    faTrash,
    faFileInvoice,
    faCircle,
    faCircleCheck,
    faEdit,
);

export default FontAwesomeIcon;

