import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

export class InsertVideoUrl extends Plugin {
    init() {
        this._defineSchema();
        this._defineConverters();
        this._defineToolbar();
    }

    _defineToolbar() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertVideo', () => {
            const button = new ButtonView();

            button.label = 'Insert Video';
            button.tooltip = true;
            button.withText = true;

            this.listenTo( button, 'execute', () => {
                const videoUrl = prompt( 'Enter the video URL' );

                editor.model.change( writer => {
                    const videoElement = writer.createElement( 'video', {
                        src: videoUrl,
                        controls: true
                    } );

                    console.log(videoElement);

                    // Insert the image in the current selection location.
                    editor.model.insertContent(
                        writer.createText( ' ', { videoUrl } ),
                    );
                } );
            });

            return button;
        });
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        // Extend the text node's schema to accept the abbreviation attribute.
        schema.extend( '$text', {
            allowAttributes: [ 'videoUrl' ]
        } );
    }

    _defineConverters() {									// ADDED
        const conversion = this.editor.conversion;

        // Conversion from a model attribute to a view element.
        conversion.for( 'downcast' ).attributeToElement( {
            model: 'videoUrl',
            // Callback function provides access to the model attribute value
            // and the DowncastWriter.
            view: ( modelAttributeValue, conversionApi ) => {
                const { writer } = conversionApi;

                return writer.createAttributeElement( 'video', {
                    src: modelAttributeValue,
                    controls: true
                } );
            }
        } );

        // // Conversion from a view element to a model attribute.
        // conversion.for( 'upcast' ).elementToAttribute( {
        //     view: {
        //         name: 'video',
        //         attributes: [ 'src' ]
        //     },
        //     model: {
        //         key: 'videoUrl',
        //         // Callback function provides access to the view element.
        //         value: viewElement => {
        //             const src = viewElement.getAttribute( 'src' );
        //
        //             return src;
        //         }
        //     }
        // } );

    }
}

