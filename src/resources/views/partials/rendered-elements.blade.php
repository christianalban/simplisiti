@foreach($renderer->getElements() as $element)
    <{{ $element->getTag() }}{!! $element->getAttributesAsString() !!}>
        {!! $element->getContent() !!}
    </{{ $element->getTag() }}>
@endforeach
