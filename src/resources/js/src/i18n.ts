import { createI18n } from "vue-i18n"

const messages = {
    en: {
        titles: {
            dashboard: "Dashboard",
            components: "Components",
            pages: "Pages",
            status: "Status",
            styles: "Styles",
            scripts: "Scripts",
            resources: "Resources",
        },
        status: {
            components: "There isn't any component created yet. | {count} component loaded successfully. | {count} components loaded successfully.",
            pages: "There isn't any page created yet. | {count} page loaded successfully. | {count} pages loaded successfully.",
            styles: "There isn't any styles sheet created yet. | {count} styles sheet loaded successfully. | {count} styles sheets loaded successfully.",
            scripts: "There isn't any script created yet. | {count} script loaded successfully. | {count} scripts loaded successfully.",
            resources: "There isn't any resource created yet. | {count} resource loaded successfully. | {count} resources loaded successfully.",
        },
        components: {
            name: "Name",
            value: "Value",
            placeholders: {
                componentName: "[group/]name",
                name: "Name",
                defaultValue: "Default value",
                dataName: "Field",
            },
            types: {
                text: "Text",
                resource: "Resource",
                datatable: "Datatable",
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
                selectResource: "Select resource",
                fillData: "Fill data",
            },
            buttons: {
                create: "New component",
                selectResource: "Select",
                changeResource: "Change",
                fillData: "Fill",
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
                pageTitle: "Enter the page title",
                pageUrl: "Enter the page URL, without the domain",
            },
            labels: {
                pageName: "Page name (optional group)",
                pageUrl: "Page URL",
                addComponentsToSection: "Add components to this section",
                urlParam: "URL: {url}",
                sectionsCount: "Sections: {count}",
                pageTitle: "Page title",
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
        styles: {
            titles: {
                stylesList: "Styles list",
                createStyle: "Create new styles sheet",
                updateStyle: "Edit styles sheet",
            },
            labels: {
                styleIsActive: "Is active",
                styleName: "Styles sheet name",
            },
            placeholders: {
                styleIsActive: "The styles sheet is active",
                styleName: "Styles sheet name",
            },
            toasts: {
                created: "Styles sheet created successfully.",
                updated: "Styles sheet updated successfully.",
                deleted: "Styles sheet deleted successfully.",
                errorCreated: "Styles sheet couldn't be created.",
                errorUpdated: "Styles sheet couldn't be updated.",
                errorDeleted: "Styles sheet couldn't be deleted.",
            },
            dialogs: {
                delete: {
                    title: "Delete styles sheet",
                    message: "Are you sure you want to delete the styles sheet '{name}'?",
                }
            },
            buttons: {
                create: "New styles sheet",
            },
        },
        scripts: {
            titles: {
                scriptsList: "Scripts list",
                createScript: "Create new script",
                updateScript: "Edit script",
            },
            labels: {
                scriptIsActive: "Is active",
                scriptName: "Script name",
            },
            toasts: {
                created: "Script created successfully.",
                updated: "Script updated successfully.",
                deleted: "Script deleted successfully.",
                errorCreated: "Script couldn't be created.",
                errorUpdated: "Script couldn't be updated.",
                errorDeleted: "Script couldn't be deleted.",
            },
            placeholders: {
                scriptIsActive: "The script is active",
                scriptName: "Script name",
            },
            dialogs: {
                delete: {
                    title: "Delete script",
                    message: "Are you sure you want to delete the script '{name}'?",
                }
            },
            buttons: {
                create: "New script",
            },
        },
        resources: {
            titles: {
                resourcesList: "Resources list",
                createResource: "Create new resource",
                updateResource: "Edit resource",
            },
            labels: {
                resourceName: "Resource name",
                resourceFile: "Resource file",
            },
            toasts: {
                created: "Resource created successfully.",
                updated: "Resource updated successfully.",
                deleted: "Resource deleted successfully.",
                errorCreated: "Resource couldn't be created.",
                errorUpdated: "Resource couldn't be updated.",
                errorDeleted: "Resource couldn't be deleted.",
            },
            placeholders: {
                resourceName: "Resource name",
                resourceFile: "Resource file",
            },
            dialogs: {
                delete: {
                    title: "Delete resource",
                    message: "Are you sure you want to delete the resource '{name}'?",
                }
            },
            buttons: {
                create: "New resource",
            },
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
            styles: "Estilos",
            scripts: "Scripts",
            resources: "Recursos",
        },
        status: {
            components: "No hay componentes creados aún. | {count} componente cargado correctamente. | {count} componentes cargados correctamente.",
            pages: "No hay páginas creadas aún. | {count} página cargada correctamente. | {count} páginas cargadas correctamente.",
            styles: "No hay hojas de estilos creadas aún. | {count} hoja de estilos cargada correctamente. | {count} hojas de estilos cargadas correctamente.",
            scripts: "No hay scripts creados aún. | {count} script cargado correctamente. | {count} scripts cargados correctamente.",
            resources: "No hay recursos creados aún. | {count} recurso cargado correctamente. | {count} recursos cargados correctamente.",
        },
        components: {
            name: "Nombre",
            value: "Valor",
            placeholders: {
                componentName: "[grupo/]nombre",
                name: "Nombre",
                defaultValue: "Valor por defecto",
                dataName: "Campo",
            },
            types: {
                text: "Texto",
                resource: "Recurso",
                datatable: "Tabla",
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
                selectResource: "Seleccionar recurso",
                fillData: "Completar datos",
            },
            buttons: {
                create: "Nuevo componente",
                selectResource: "Seleccionar",
                changeResource: "Cambiar",
                fillData: "Completar",
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
                pageTitle: "Ingrese el título de la página",
            },
            labels: {
                pageName: "Nombre de la página (grupo opcional)",
                pageUrl: "URL de la página",
                addComponentsToSection: "Agrega componentes a esta sección",
                urlParam: "URL: {url}",
                sectionsCount: "Secciones: {count}",
                pageTitle: "Título de la página",
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
        styles: {
            titles: {
                stylesList: "Listado de estilos",
                createStyle: "Crear nueva hoja de estilos",
                updateStyle: "Editar hoja de estilos",
            },
            labels: {
                styleIsActive: "Está activa",
                styleName: "Nombre de la hoja de estilos",
            },
            placeholders: {
                styleIsActive: "La hoja de estilos está activa",
                styleName: "Nombre de la hoja de estilos",
            },
            toasts: {
                created: "La hoja de estilos se creó correctamente.",
                updated: "La hoja de estilos se actualizó correctamente.",
                deleted: "La hoja de estilos se eliminó correctamente.",
                errorCreated: "La hoja de estilos no pudo ser creada.",
                errorUpdated: "La hoja de estilos no pudo ser actualizada.",
                errorDeleted: "La hoja de estilos no pudo ser eliminada.",
            },
            dialogs: {
                delete: {
                    title: "Eliminar hoja de estilos",
                    message: "¿Está seguro que desea eliminar la hoja de estilos '{name}'?",
                }
            },
            buttons: {
                create: "Nueva hoja de estilos",
            },
        },
        scripts: {
            titles: {
                scriptsList: "Listado de scripts",
                createScript: "Crear nuevo script",
                updateScript: "Editar script",
            },
            labels: {
                scriptIsActive: "Está activo",
                scriptName: "Nombre del script",
            },
            toasts: {
                created: "El script se creó correctamente.",
                updated: "El script se actualizó correctamente.",
                deleted: "El script se eliminó correctamente.",
                errorCreated: "El script no pudo ser creado.",
                errorUpdated: "El script no pudo ser actualizado.",
                errorDeleted: "El script no pudo ser eliminado.",
            },
            placeholders: {
                scriptIsActive: "El script está activo",
                scriptName: "Nombre del script",
            },
            dialogs: {
                delete: {
                    title: "Eliminar script",
                    message: "¿Está seguro que desea eliminar el script '{name}'?",
                }
            },
            buttons: {
                create: "Nuevo script",
            },
        },
        resources: {
            titles: {
                resourcesList: "Listado de recursos",
                createResource: "Crear nuevo recurso",
                updateResource: "Editar recurso",
            },
            labels: {
                resourceName: "Nombre del recurso",
                resourceFile: "Archivo del recurso",
            },
            toasts: {
                created: "Recurso creado correctamente.",
                updated: "Recurso actualizado correctamente.",
                deleted: "Recurso eliminado correctamente.",
                errorCreated: "Recurso no pudo ser creado.",
                errorUpdated: "Recurso no pudo ser actualizado.",
                errorDeleted: "Recurso no pudo ser eliminado.",
            },
            placeholders: {
                resourceName: "Nombre del recurso",
                resourceFile: "Archivo del recurso",
            },
            dialogs: {
                delete: {
                    title: "Eliminar recurso",
                    message: "¿Está seguro que desea eliminar el recurso '{name}'?",
                }
            },
            buttons: {
                create: "Nuevo recurso",
            },
        },
        buttons: {
            save: "Guardar",
            back: "Volver",
            delete: "Eliminar",
            confirm: "Confirmar",
            cancel: "Cancelar",
            close: "Cerrar",
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
