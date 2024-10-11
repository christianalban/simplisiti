@foreach($renderer->getElements() as $element)
    @if($element->onlyForCurrentPage() && $element->exceptForCurrentPage())
        <{{ $element->getTag() }}{!! $element->getAttributesAsString() !!}>
            {!! $element->getContent() !!}
        @if(!$element->getNoClose())
        </{{ $element->getTag() }}>
        @endif
    @endif
@endforeach
