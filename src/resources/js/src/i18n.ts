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
                createComponent: "Create new component",
                editComponent: "Edit component",
                code: "Code",
                variables: "Variables",
            },
            buttons: {
                create: "New component",
            },
            toasts: {
                success: {
                    title: "Success",
                    message: "Component created successfully.",
                },
                error: {
                    title: "Error",
                    message: "Component couldn't be created.",
                },
            }
        },
        buttons: {
            save: "Save",
            back: "Back",
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
                createComponent: "Crear nuevo componente",
                editComponent: "Editar componente",
                code: "Código",
                variables: "Variables",
            },
            buttons: {
                create: "Nuevo componente",
            },
            toasts: {
                success: {
                    title: "Éxito",
                    message: "Componente creado correctamente.",
                },
                error: {
                    title: "Error",
                    message: "El componente no pudo ser creado.",
                },
            }
        },
        buttons: {
            save: "Guardar",
            back: "Volver",
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
