import { createI18n } from "vue-i18n"

const messages = {
    en: {
        titles: {
            dashboard: "Dashboard",
            components: "Components",
            status: "Status",
        },
        status: {
            components: {
                success: "Components loaded successfully.",
                warning: "There isn't any component created yet.",
            }
        },
        components: {
            name: "Name",
            value: "Value",
            placeholders: {
                componentName: "[group/]name",
                name: "Name",
                defaultValue: "Default value",
            },
            types: {
                text: "Text",
            },
            labels: {
                componentName: "Component name (optional group)",
            },
            titles: {
                componentsList: "Components list",
                createComponent: "Create new component",
                editComponent: "Edit component",
                code: "Code",
                variables: "Variables",
            },
            buttons: {
                create: "New component",
            },
            toasts: {
                success: "Success",
                error: "Error",
                created: "Component created successfully.",
                updated: "Component updated successfully.",
                errorCreated: "Component couldn't be created.",
                errorUpdated: "Component couldn't be updated.",
            }
        },
        buttons: {
            save: "Save",
            back: "Back",
            delete: "Delete",
        }
    },
    es: {
        titles: {
            dashboard: "Tablero",
            components: "Componentes",
            status: "Status",
        },
        status: {
            components: {
                success: "Componentes cargados correctamente.",
                warning: "No hay componentes creados aún.",
            }
        },
        components: {
            name: "Nombre",
            value: "Valor",
            placeholders: {
                componentName: "[grupo/]nombre",
                name: "Nombre",
                defaultValue: "Valor por defecto",
            },
            types: {
                text: "Texto",
            },
            labels: {
                componentName: "Nombre del componente (grupo opcional)",
            },
            titles: {
                componentsList: "Listado de componentes",
                createComponent: "Crear nuevo componente",
                editComponent: "Editar componente",
                code: "Código",
                variables: "Variables",
            },
            buttons: {
                create: "Nuevo componente",
            },
            toasts: {
                success: "Éxito",
                error: "Error",
                created: "Componente creado correctamente.",
                updated: "Componente actualizado correctamente.",
                errorCreated: "El componente no pudo ser creado.",
                errorUpdated: "El componente no pudo ser actualizado.",
            }
        },
        buttons: {
            save: "Guardar",
            back: "Volver",
            delete: "Eliminar",
        }
    },
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages,
    legacy: false,
})

export default i18n
