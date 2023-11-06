import { createI18n } from "vue-i18n"

const messages = {
    en: {
        titles: {
            dashboard: "Dashboard",
            components: "Components",
            pages: "Pages",
            status: "Status",
        },
        status: {
            components: "There isn't any component created yet. | {count} component loaded successfully. | {count} components loaded successfully."
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
                created: "Component created successfully.",
                updated: "Component updated successfully.",
                deleted: "Component deleted successfully.",
                errorCreated: "Component couldn't be created.",
                errorUpdated: "Component couldn't be updated.",
                errorDeleted: "Component couldn't be deleted.",
            },
            dialogs: {
                delete: {
                    title: "Delete component",
                    message: "Are you sure you want to delete the component '{name}'?",
                }
            }
        },
        pages: {
            placeholders: {
                pageName: "[group/]name",
                pageUrl: "Enter the page URL, without the domain",
            },
            labels: {
                pageName: "Page name (optional group)",
                pageUrl: "Page URL",
                addComponentsToSection: "Add components to this section",
                urlParam: "URL: {url}",
                sectionsCount: "Sections: {count}",
            },
            titles: {
                pagesList: "Pages list",
                createPage: "Create new page",
                editPage: "Edit page",
                availableComponents: "Available components",
                sections: "Sections",
                componentConfigurationForm: "Component configuration",
            },
            buttons: {
                create: "New page",
                addSection: "Add new section",
                exit: "Exit",
            },
            toasts: {
                created: "Page created successfully.",
                updated: "Page updated successfully.",
                deleted: "Page deleted successfully.",
                errorCreated: "Page couldn't be created.",
                errorUpdated: "Page couldn't be updated.",
                errorDeleted: "Page couldn't be deleted.",
            },
            dialogs: {
                delete: {
                    title: "Delete page",
                    message: "Are you sure you want to delete the page '{name}'?",
                }
            }
        },
        buttons: {
            save: "Save",
            back: "Back",
            delete: "Delete",
        },
        toasts: {
            success: "Success",
            error: "Error",
        },
    },
    es: {
        titles: {
            dashboard: "Tablero",
            components: "Componentes",
            pages: "Páginas",
            status: "Estado",
        },
        status: {
            components: "No hay componentes creados aún. | {count} componente cargado correctamente. | {count} componentes cargados correctamente."
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
                created: "Componente creado correctamente.",
                updated: "Componente actualizado correctamente.",
                deleted: "Componente eliminado correctamente.",
                errorCreated: "El componente no pudo ser creado.",
                errorUpdated: "El componente no pudo ser actualizado.",
                errorDeleted: "El componente no pudo ser eliminado.",
            },
            dialogs: {
                delete: {
                    title: "Eliminar componente",
                    message: "¿Está seguro que desea eliminar el componente '{name}'?",
                }
            }
        },
        pages: {
            placeholders: {
                pageName: "[grupo/]nombre",
                pageUrl: "Ingrese la URL de la página, sin el dominio",
            },
            labels: {
                pageName: "Nombre de la página (grupo opcional)",
                pageUrl: "URL de la página",
                addComponentsToSection: "Agrega componentes a esta sección",
                urlParam: "URL: {url}",
                sectionsCount: "Secciones: {count}",
            },
            titles: {
                pagesList: "Listado de páginas",
                createPage: "Crear nueva página",
                editPage: "Editar página",
                availableComponents: "Componentes disponibles",
                sections: "Secciones",
                componentConfigurationForm: "Configuración del componente",
            },
            buttons: {
                create: "Nueva página",
                addSection: "Agregar nueva sección",
                exit: "Salir",
            },
            toasts: {
                created: "Página creada correctamente.",
                updated: "Página actualizada correctamente.",
                deleted: "Página eliminada correctamente.",
                errorCreated: "La página no pudo ser creada.",
                errorUpdated: "La página no pudo ser actualizada.",
                errorDeleted: "La página no pudo ser eliminada.",
            },
            dialogs: {
                delete: {
                    title: "Eliminar página",
                    message: "¿Está seguro que desea eliminar la página '{name}'?",
                }
            }
        },
        buttons: {
            save: "Guardar",
            back: "Volver",
            delete: "Eliminar",
            confirm: "Confirmar",
            cancel: "Cancelar",
        },
        toasts: {
            success: "Éxito",
            error: "Error",
        },
    },
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages,
    legacy: false,
})

export default i18n
