@foreach($app->getStyleManager()->getStyles() as $style)
    <link rel="stylesheet" href="{{ asset(config('simplisiti.styles_path') . '/' . $style->name . '.css') }}" />
@endforeach
