import { ref } from "vue";
import { Toast } from "../types/Toast";

export const toasts = ref<Toast[]>([]);
export const toastTimeOut = ref(3000);

export const showToast = (toast: Toast) => {
    toast.timestamp = Date.now();
    toasts.value.push(toast);

    setTimeout(() => {
        toasts.value.shift();
    }, toastTimeOut.value);
}
