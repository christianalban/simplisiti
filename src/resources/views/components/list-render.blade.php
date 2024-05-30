@isset($items)
    @foreach($items as $item)
        {!! Blade::render($slot->toHtml(), ['dt' => $dataSourceRecovery->toRecover($item)]) !!}
    @endforeach
@endisset
